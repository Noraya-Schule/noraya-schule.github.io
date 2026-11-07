/* Bundled CC BY 4.0 recordings; original synthesized effects. See music/manifest.json. */
(()=>{
 const tracks={humans:['humans-camp','humans-battle'],elves:['elves-camp','elves-battle'],orcs:['orcs-camp','orcs-battle'],undead:['undead-camp','undead-battle']};
 // Integrated LUFS, measured 2026-10-06. Attenuation only; recordings stay unchanged.
 const loudness={'humans-camp':-16.30,'humans-battle':-13.24,'elves-camp':-17.38,'elves-battle':-19.48,'orcs-camp':-23.18,'orcs-battle':-11.11,'undead-camp':-16.75,'undead-battle':-14.24};
 const battleStarts={'humans-battle':18,'elves-battle':12,'orcs-battle':24,'undead-battle':20};
 const players=new Map(),fades=new Map(),pending=new Set(),failed=new Set(),lastFx=new Map(),variation=new Map(),gains=new Map();
 let unlocked=false,fxBus,player=null,currentTrack='',musicPreviewUntil=0,fxPreviewUntil=0,voices=0;
 const clamp=v=>Math.max(0,Math.min(1,v));
 function notice(text){const n=document.getElementById('musicNotice');if(n)n.textContent=text}
 function prepare(id){
  if(players.has(id))return players.get(id);
  const media=new Audio();media.preload='auto';media.loop=true;media.volume=0;media.src='music/'+id+'.mp3';
  const start=battleStarts[id]||0;
  if(start)media.addEventListener('loadedmetadata',()=>{try{media.currentTime=Math.min(start,Math.max(0,media.duration-1))}catch{}},{once:true});
  media.addEventListener('error',()=>{failed.add(media);if(media===player)notice('Musik konnte nicht geladen werden. Bitte Seite neu laden.')});
  players.set(id,media);gains.set(media,0);media.load();return media;
 }
 function stopMusic(){for(const media of players.values()){media.pause();media.volume=0;gains.set(media,0)}fades.clear();player=null;currentTrack=''}
 function fade(media,to,duration){fades.set(media,{from:gains.get(media)||0,to,start:performance.now(),duration})}
 function music(){
  if(!unlocked)return;
  const preview=Date.now()<musicPreviewUntil;
  // Before faction selection, the city uses the bundled humans camp theme.
  // Settings keep the current music loop; gameplay and effects remain paused.
  if(settings.music===false||document.hidden||(paused&&!preview&&((S?.phase==='battle'&&!document.getElementById('menu')?.open)||document.getElementById('learningDialog')?.open||document.getElementById('compendium')?.open))){stopMusic();return}
  const pair=tracks[S?.race]||tracks.humans,id=pair[S?.phase==='battle'?1:0];
  if(id!==currentTrack){if(player)fade(player,0,220);player=prepare(id);currentTrack=id;fade(player,1,S?.phase==='battle'?180:600)}
  const now=performance.now(),volume=clamp(settings.musicVolume??.35);
  for(const [key,media] of players){
   const f=fades.get(media);let amount=media===player?1:0;
   if(f){const progress=clamp((now-f.start)/f.duration);amount=f.from+(f.to-f.from)*progress;if(progress===1){fades.delete(media);if(f.to===0)media.pause()}}
   gains.set(media,amount);media.volume=clamp(volume*Math.min(1,10**((-23.2-loudness[key])/20))*amount);
  }
  if(player.paused&&!pending.has(player)&&!failed.has(player)){
   const active=player;pending.add(active);
   Promise.resolve(active.play()).then(()=>{pending.delete(active);if(active!==player){active.pause();return}notice('Musik: Kevin MacLeod · CC BY 4.0')}).catch(()=>{pending.delete(active);if(active!==player)return;failed.add(active);notice('Zum Starten der Musik einmal ins Spiel tippen.')});
  }
  pair.forEach(prepare);
 }
 function context(){
  if(!unlocked)return null;
  try{
   audioContext??=new(window.AudioContext||window.webkitAudioContext)();
   if(!fxBus){fxBus=audioContext.createGain();fxBus.gain.value=settings.sound===false?0:clamp(settings.effectsVolume??.65);const limiter=audioContext.createDynamicsCompressor();limiter.threshold.value=-14;limiter.knee.value=12;limiter.ratio.value=3;limiter.attack.value=.003;limiter.release.value=.12;fxBus.connect(limiter);limiter.connect(audioContext.destination)}
   return audioContext;
  }catch{return null}
 }
 function note(freq,time,duration,wave='sine',volume=.07,end=freq){
  const c=context();if(!c||voices>=16)return;voices++;
  const o=c.createOscillator(),g=c.createGain();o.type=wave;o.frequency.setValueAtTime(freq,time);o.frequency.exponentialRampToValueAtTime(Math.max(20,end),time+duration);g.gain.setValueAtTime(0,time);g.gain.linearRampToValueAtTime(volume,time+.012);g.gain.exponentialRampToValueAtTime(.0001,time+duration);o.connect(g).connect(fxBus);o.start(time);o.stop(time+duration+.02);o.onended=()=>{voices--;o.disconnect();g.disconnect()};
 }
 function levels(){const c=context();if(c)fxBus.gain.setTargetAtTime(settings.sound===false?0:clamp(settings.effectsVolume??.65),c.currentTime,.03)}
 function tick(){music();const c=context();if(!c)return;if(document.hidden||(paused&&Date.now()>=fxPreviewUntil)){if(c.state==='running')c.suspend().catch(()=>{});return}if(c.state!=='running')c.resume().catch(()=>{});levels()}
 function unlock(){unlocked=true;failed.clear();music();const c=context();if(c&&!document.hidden&&(!paused||Date.now()<fxPreviewUntil))c.resume().catch(()=>{});levels()}
 function effect(id,kind,preview=false){
  const c=context();if(!c||settings.sound===false||document.hidden||(paused&&!preview)||c.state!=='running')return;
  const t=c.currentTime,key=id+':'+kind;if(t-(lastFx.get(key)??-10)<.12)return;lastFx.set(key,t);levels();
  const count=(variation.get(key)||0)+1;variation.set(key,count);
  const hash=[...String(id)].reduce((a,v)=>a+v.charCodeAt(0),0),unit=typeof TYPES!=='undefined'?TYPES.find(u=>u.id===id):null,role=unit?.role||'',base=(220+hash%180)*(1+[-.025,0,.025][count%3]);
  if(id==='rally'||kind==='rally'){[0,7,12].forEach((n,i)=>note(base*2**(n/12),t+i*.055,.23,'triangle',.065))}
  else if(kind==='heal'||kind==='support'||id==='mend'){[0,4,7].forEach((n,i)=>note(base*2**(n/12),t+i*.07,.3,'sine',.07))}
  else if(kind==='shield'||id==='shield'){[1,1.5,2].forEach(n=>note(base*n,t,.32,'triangle',.035))}
  else if(id==='pierce'){note(base*2,t,.19,'triangle',.07,60);note(base*3,t+.04,.15,'sine',.035,base)}
  else if(id==='shot'){note(base,t,.24,'sine',.085,base*3);note(base*2,t+.06,.16,'triangle',.03,90)}
  else if(!unit||/Magie/.test(role)){note(base,t,.3,'sine',.08,base*2.5);note(base*2,t+.07,.2,'triangle',.025,100)}
  else if(/Fern/.test(role)){note(base*5,t,.14,'triangle',.06,110)}
  else{note(base,t,.12,'triangle',.08,45);note(base*2.7,t+.02,.07,'sine',.04,base)}
 }
 function previewMusic(){musicPreviewUntil=Date.now()+4000;unlock();notice(settings.music===false?'Musik ist ausgeschaltet. Aktiviere sie für die Hörprobe.':'Musik-Hörprobe · 4 Sekunden')}
 async function previewEffects(){
  fxPreviewUntil=Date.now()+1600;unlock();const c=context();if(!c||document.hidden||settings.sound===false){notice('Aktiviere Soundeffekte für die Hörprobe.');return}
  try{await c.resume()}catch{return}
  [['guard','attack'],['crossbow','attack'],['shield','shield'],['mend','heal']].forEach(([id,kind],i)=>setTimeout(()=>{if(Date.now()<fxPreviewUntil)effect(id,kind,true)},i*300));
 }
 window.GameAudio={effect,refresh:()=>{music();levels()},unlock,tracks,previewMusic,previewEffects};
 document.addEventListener('pointerdown',unlock,{passive:true});document.addEventListener('keydown',unlock);
 document.addEventListener('visibilitychange',()=>{if(document.hidden){musicPreviewUntil=fxPreviewUntil=0;context()?.suspend().catch(()=>{});stopMusic()}else if(unlocked)unlock()});
 setInterval(tick,50);
})();
