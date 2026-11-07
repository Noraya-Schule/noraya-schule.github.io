(() => {
const APP_VERSION = '2.0.1';
function start(){
  if(window.Capacitor?.isNativePlatform?.()||window.capacitorExports||!/^https?:$/.test(location.protocol))return;
  const menu=document.getElementById('menu');if(!menu)return;
  const section=document.createElement('section');section.className='web-app-card';
  section.innerHTML='<h3>Bannerwacht als App</h3><small>Vollversion '+APP_VERSION+' · kostenlos und ohne Werbung</small><details><summary>Auf iPhone oder iPad installieren</summary><ol><li>Öffne diese Website in Safari.</li><li>Tippe auf „Teilen“ und dann „Zum Home-Bildschirm“.</li><li>Starte Bannerwacht über das neue Symbol zunächst mit Internet.</li><li>Warte hier auf „Spiel offline bereit“. Für Offline-Musik tippe zusätzlich auf den Downloadknopf.</li></ol><p>Safari und die Home-Bildschirm-App können getrennte Spielstände haben. Übertrage deine Reise bei Bedarf mit einer Sicherung.</p></details><button class="btn secondary full" id="webInstall" hidden>Als App installieren</button><p id="webOfflineStatus" class="web-app-status" role="status" aria-live="polite">Offline-Modus wird vorbereitet …</p><small>Offline-Spiel ca. 72 MB, Musik zusätzlich ca. 19 MB. Lass die App bis zur Bereitmeldung geöffnet.</small><button class="btn secondary full" id="webCore" hidden>Offline-Spiel erneut vorbereiten</button><button class="btn secondary full" id="webMusic">Musik für offline herunterladen</button><button class="btn secondary full" id="webUpdate" hidden>Neue Version laden · Spiel neu starten</button><h3>Spielstand sichern</h3><p>Reise, Tutorial, Freischaltungen und Einstellungen als Datei sichern oder übertragen. Neue Sicherungen der Android-Vollversion können hier ebenfalls geladen werden.</p><div class="web-app-actions"><button class="btn secondary" id="webExport">Sichern</button><button class="btn secondary" id="webImport">Wiederherstellen</button></div><input id="webSaveFile" type="file" accept=".json,application/json" hidden><p id="webFileStatus" role="status" aria-live="polite"></p><small>Bewahre eine Kopie deiner Sicherung in „Dateien“ auf. Sicherungen aus der Android-App enthalten keinen laufenden Tutorialfortschritt.</small>';
  menu.append(section);
  const shortcut=document.createElement('button');shortcut.className='btn secondary';shortcut.textContent='Auf iPhone/iPad als App nutzen';shortcut.type='button';
  shortcut.onclick=()=>{document.getElementById('menuOpen').click();section.querySelector('details').open=true;section.scrollIntoView({block:'nearest'});};
  document.querySelector('.foot')?.append(shortcut);
  const element=id=>document.getElementById(id),notify=text=>element('webFileStatus').textContent=text;
  const keys=['bannerwacht-v2','bannerwacht-profile-v1','bannerwacht-settings','bannerwacht-tutorial-seen'];
  element('webExport').onclick=async()=>{
    try{
      if(typeof S!=='undefined'&&S&&typeof save==='function')save();
      const data={format:'bannerwacht-save',version:1,createdAt:new Date().toISOString(),progressEpoch:window.BANNERWACHT_PROGRESS_EPOCH||'legacy',tutorialSave:localStorage.getItem('bannerwacht-tutorial'),storage:Object.fromEntries(keys.map(k=>[k,localStorage.getItem(k)]))};
      const name='Bannerwacht-Spielstand-'+new Date().toISOString().slice(0,10)+'.json';
      const file=new File([JSON.stringify(data,null,2)],name,{type:'application/json'});
      if(navigator.canShare?.({files:[file]})&&navigator.share){await navigator.share({files:[file],title:'Bannerwacht-Spielstand'});notify('Sicherung geöffnet. Wähle „In Dateien sichern“, um sie aufzubewahren.');}
      else {const url=URL.createObjectURL(file),link=document.createElement('a');link.href=url;link.download=name;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);notify('Sicherung zum Speichern bereitgestellt.');}
    }catch(error){notify(error.name==='AbortError'?'Sichern abgebrochen.':error.message||'Sicherung konnte nicht erstellt werden.');}
  };
  element('webImport').onclick=()=>{element('webSaveFile').value='';element('webSaveFile').click();};
  element('webSaveFile').onchange=async()=>{
    const file=element('webSaveFile').files?.[0];if(!file)return;
    try{
      if(file.size>1000000)throw Error('Die Sicherung ist zu groß.');
      const text=await file.text(),parsed=JSON.parse(text),incoming=validateBannerwachtBackup(text);
      if(parsed.tutorialSave!=null){
        if(typeof parsed.tutorialSave!=='string')throw Error('Ungültiger Tutorial-Spielstand.');
        validateBannerwachtBackup(JSON.stringify({...parsed,tutorialSave:null,storage:{...parsed.storage,'bannerwacht-v2':parsed.tutorialSave}}));
        if(JSON.parse(parsed.tutorialSave).tutorial?.version!==1)throw Error('Ungültiger Tutorial-Spielstand.');
      }
      incoming['bannerwacht-tutorial']=parsed.tutorialSave??null;
      if(!window.confirm('Diese Sicherung ersetzt deinen Spielstand, deine Freischaltungen und Einstellungen. Fortfahren?'))return;
      const importKeys=[...keys,'bannerwacht-tutorial'],previous=Object.fromEntries(importKeys.map(k=>[k,localStorage.getItem(k)]));
      try{for(const key of importKeys)incoming[key]==null?localStorage.removeItem(key):localStorage.setItem(key,incoming[key]);}
      catch(error){for(const key of importKeys)localStorage.removeItem(key);for(const key of importKeys)if(previous[key]!==null)localStorage.setItem(key,previous[key]);throw error;}
      location.reload();
    }catch(error){notify(error.message||'Sicherung konnte nicht geladen werden.');}
  };
  let background=null;
  document.addEventListener('visibilitychange',()=>{
    if(typeof paused==='undefined')return;
    if(document.hidden){background??={wasPaused:paused};paused=true;clearTimeout(timer);timer=null;}
    else if(background){const previous=background;background=null;if(!previous.wasPaused&&!document.querySelector('dialog[open]')){paused=false;if(pendingStep)schedule(pendingStep,120);}}
  });
  let prompt=null,registration=null,reloadRequested=false,musicBusy=false,lastStatus=null;
  window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();prompt=event;element('webInstall').hidden=false;});
  element('webInstall').onclick=async()=>{if(!prompt)return;await prompt.prompt();prompt=null;element('webInstall').hidden=true;};
  function render(status){
    lastStatus=status;musicBusy=false;
    element('webOfflineStatus').textContent=status.coreReady?(status.musicReady?'Spiel und Musik offline bereit.':'Spiel offline bereit · Musik noch nicht vollständig gespeichert.'):'Offline-Modus wird vorbereitet …';
    element('webCore').hidden=status.coreReady;element('webCore').disabled=false;
    element('webMusic').disabled=!status.coreReady||status.musicReady;element('webMusic').hidden=status.musicReady;
  }
  function message(data){
    if(data.type==='STATUS')render(data);
    if(data.type==='PREPARING')element('webOfflineStatus').textContent=`Offline-Spiel wird gespeichert: ${data.done}/${data.total} Dateien.`;
    if(data.type==='ERROR_CORE'){element('webOfflineStatus').textContent='Offline-Spiel konnte nicht vollständig gespeichert werden. Bitte mit Internet erneut vorbereiten.';element('webCore').hidden=false;element('webCore').disabled=false;}
    if(data.type==='BUSY'){musicBusy=false;element('webOfflineStatus').textContent='Musik wird bereits in einem anderen Fenster gespeichert.';setTimeout(refresh,5000);}
    if(data.type==='PROGRESS'){element('webOfflineStatus').textContent=`Musik wird gespeichert: ${data.done}/${data.total} Dateien.`;}
    if(data.type==='ERROR'){musicBusy=false;element('webMusic').disabled=false;element('webOfflineStatus').textContent=data.message;}
  }
  async function refresh(){
    const worker=registration?.active;if(!worker||musicBusy)return;
    const channel=new MessageChannel();channel.port1.onmessage=event=>{message(event.data);channel.port1.close();};worker.postMessage({type:'STATUS'},[channel.port2]);
  }
  element('webCore').onclick=()=>{if(registration?.active)registration.active.postMessage({type:'DOWNLOAD_CORE'});else location.reload();};
  element('webMusic').disabled=true;
  element('webMusic').onclick=async()=>{
    const worker=registration?.active;if(!worker)return;
    musicBusy=true;element('webMusic').disabled=true;element('webOfflineStatus').textContent='Musik wird für offline gespeichert …';
    try{await navigator.storage?.persist?.();}catch{}
    worker.postMessage({type:'DOWNLOAD_MUSIC'});
  };
  element('webUpdate').onclick=()=>{if(!registration?.waiting)return;reloadRequested=true;registration.waiting.postMessage({type:'SKIP_WAITING'});};
  element('menuOpen').addEventListener('click',refresh);
  if('serviceWorker' in navigator){
    navigator.serviceWorker.addEventListener('message',event=>message(event.data));
    navigator.serviceWorker.addEventListener('controllerchange',()=>{if(reloadRequested)location.reload();else refresh();});
    navigator.serviceWorker.register('sw.js',{scope:'./',updateViaCache:'none'}).then(async reg=>{
      registration=reg;
      const showUpdate=()=>{element('webUpdate').hidden=!reg.waiting;};showUpdate();
      reg.addEventListener('updatefound',()=>{const installing=reg.installing;installing?.addEventListener('statechange',()=>{showUpdate();if(installing.state==='installed')refresh();if(installing.state==='redundant'&&!reg.active)element('webOfflineStatus').textContent='Offline-Vorbereitung fehlgeschlagen. Öffne das Spiel mit Internet erneut.';});});
      await navigator.serviceWorker.ready;await refresh();
      try{await navigator.storage?.persist?.();}catch{}
    }).catch(()=>{element('webOfflineStatus').textContent='Offline-Modus konnte nicht eingerichtet werden. Öffne die App mit Internet erneut.';});
    window.addEventListener('online',()=>{refresh();registration?.update().catch(()=>{});});
    window.addEventListener('offline',()=>{if(lastStatus?.coreReady)element('webOfflineStatus').textContent=lastStatus.musicReady?'Offline · Spiel und Musik bereit.':'Offline · Spiel bereit, Musik teilweise nicht verfügbar.';});
  }else{element('webOfflineStatus').textContent='Dieser Browser unterstützt den Offline-Modus nicht. Du kannst online spielen.';element('webMusic').hidden=true;}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
