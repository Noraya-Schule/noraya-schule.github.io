const VERSION='2.0.1';
const EXPECTED_SHA='3d29128440f1cf36e71c444be49806c33d027d3428c6bde47276453e1fe2e898';
const EXPECTED_SIZE=92752507;
const hash=async bytes=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)),b=>b.toString(16).padStart(2,'0')).join('');

export async function loadApk({signal,onProgress=()=>{},fetchFile=fetch}={}){
  const response=await fetchFile('./download.json',{signal,cache:'no-store'});
  if(!response.ok)throw Error('Die Downloadinformationen konnten nicht geladen werden.');
  const m=await response.json();
  if(m.sha256!==EXPECTED_SHA||m.size!==EXPECTED_SIZE||m.filename!==`Bannerwacht-${VERSION}-release.apk`||m.parts?.length!==Math.ceil(EXPECTED_SIZE/(20*1024*1024))||m.parts.reduce((n,p)=>n+p.size,0)!==EXPECTED_SIZE)throw Error('Die Downloadinformationen stimmen nicht.');
  const chunks=[]; let loaded=0;
  for(const [i,part] of m.parts.entries()){
    if(part.path!==`parts/bannerwacht-${VERSION}-${String(i+1).padStart(2,'0')}.bin`||!Number.isInteger(part.size)||part.size<1||part.size>20*1024*1024||!/^[a-f0-9]{64}$/.test(part.sha256))throw Error('Ungültige Downloadinformationen.');
    signal?.throwIfAborted();
    const result=await fetchFile('./'+part.path,{signal});
    if(!result.ok)throw Error('Der Download wurde unterbrochen. Bitte versuche es erneut.');
    const data=await result.arrayBuffer();
    if(data.byteLength!==part.size||await hash(data)!==part.sha256)throw Error('Die Datei konnte nicht geprüft werden. Bitte versuche es erneut.');
    chunks.push(data); loaded+=data.byteLength; onProgress(loaded,EXPECTED_SIZE);
  }
  signal?.throwIfAborted();
  const blob=new Blob(chunks,{type:'application/vnd.android.package-archive'});
  if(blob.size!==EXPECTED_SIZE||await hash(await blob.arrayBuffer())!==EXPECTED_SHA)throw Error('Die APK-Prüfsumme stimmt nicht. Der Download wurde verworfen.');
  signal?.throwIfAborted();
  return {blob,filename:m.filename};
}

if(typeof document!=='undefined'){
  const start=document.getElementById('download'),cancel=document.getElementById('cancel'),status=document.getElementById('status'),progress=document.getElementById('progress'),save=document.getElementById('save');
  let controller=null,url=null;
  if(!crypto.subtle){start.disabled=true;status.textContent='Zum Herunterladen bitte einen aktuellen Browser verwenden.';}
  start.addEventListener('click',async()=>{
    if(controller)return;
    if(url){URL.revokeObjectURL(url);url=null;}
    save.hidden=true; controller=new AbortController();start.disabled=true;cancel.hidden=false;progress.hidden=false;progress.value=0;
    status.textContent='Die APK wird geladen. Bitte lasse diese Seite geöffnet.';
    try{
      const file=await loadApk({signal:controller.signal,onProgress:(loaded,total)=>{progress.value=loaded/total*100;status.textContent=`${Math.round(loaded/total*100)} % geladen · ${Math.round(loaded/1e6)} von ${Math.round(total/1e6)} MB`}});
      url=URL.createObjectURL(file.blob);save.href=url;save.download=file.filename;save.hidden=false;
      status.textContent='APK vollständig geladen und geprüft. Falls der Download nicht startet, tippe auf „APK speichern“.';
      save.click();
    }catch(e){status.textContent=e.name==='AbortError'?'Download abgebrochen. Du kannst ihn erneut starten.':e.message;}
    finally{controller=null;start.disabled=false;cancel.hidden=true;progress.hidden=true;}
  });
  cancel.addEventListener('click',()=>controller?.abort());
  window.addEventListener('pagehide',()=>{controller?.abort();if(url)URL.revokeObjectURL(url);});
}
