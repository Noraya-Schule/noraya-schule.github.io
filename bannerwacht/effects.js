// Each card has its own motif, trajectory, color and particle cadence.
const CARD_FX={
 guard:['Schildstoß','🛡','#90bfff','ram',1],
 crossbow:['Bolzenschuss','➶','#ffda87','line',1],
 knight:['Greifensturz','🪶','#ffc86c','dive',3],
 cleric:['Sonnenlicht','☀','#fff19b','ray',5],
 halberd:['Hellebardenschwung','🔱','#ccdce8','sweep',2],
 bannermaid:['Kronenbanner','⚑','#ffb85b','wave',3],
 alchemist:['Alchemistenwurf','⚗','#94ed79','arc',4],
 cannoneer:['Pulverkugel','💣','#ffac63','arc',6],
 duelist:['Doppelter Ausfall','╱','#fff5df','cross',2],
 battle_mage:['Runensalve','◇','#88bfff','spiral',3],
 thorn:['Dornenstoß','✧','#82c45c','roots',4],
 archer:['Blattpfeil','➵','#a3df76','line',2],
 druid:['Blättersegen','🌿','#a1efa0','wave',5],
 bladedancer:['Mondklingen','☽','#d1e1ff','cross',3],
 owl_scout:['Federflug','🪶','#d4c4a2','arc',2],
 dryad:['Quellenschimmer','💧','#84e8e6','spiral',4],
 moonstag:['Mondansturm','☾','#e6d4ff','ram',3],
 rootmage:['Wurzelgriff','🌱','#80ce96','roots',5],
 shadowcat:['Schattenkrallen','≋','#b69ad9','dive',3],
 starweaver:['Sternenfächer','✦','#b9b1ff','fan',6],
 brute:['Axtschlag','🪓','#ffae74','sweep',1],
 hunter:['Speerwurf','➤','#e3bc82','line',3],
 shaman:['Sturmblitz','ϟ','#a7deff','zigzag',4],
 troll:['Felsfaust','●','#baa78a','ram',5],
 wolf_rider:['Wolfsprung','🐾','#d4dce5','dive',2],
 drummer:['Kriegstakt','♪','#ffc17f','wave',4],
 boar_guard:['Hauerstoß','⋀','#e1ac8b','ram',2],
 fire_spitter:['Feueratem','🔥','#ff824b','fan',5],
 bloodaxe:['Blutwirbel','🩸','#ff688a','sweep',3],
 earthspeaker:['Erdsegen','◆','#d0c58b','roots',3],
 boneguard:['Knochenstoß','🦴','#eee2c9','cross',1],
 wraith:['Geisterflug','👻','#bce6f1','wave',2],
 necromancer:['Seelenfluch','🔮','#c995ef','spiral',5],
 vampire:['Blutfang','🦇','#ec83ba','dive',4],
 skeleton_archer:['Knochenpfeile','➳','#dcd0b2','line',4],
 banshee:['Klagelaut','◎','#c6c0f3','wave',6],
 grave_priest:['Ahnenlichter','✝','#d4b7ed','spiral',2],
 bone_giant:['Schädelbeben','☠','#c3c5db','quake',6],
 plague_rat:['Seuchenschwarm','🐾','#bdd076','zigzag',5],
 death_knight:['Dämmerungshieb','⚔','#a8a9e9','cross',4],
 shield:['Schildformation','⬡','#9acfff','ring',6],
 shot:['Fokusfeuer','⌖','#ffce78','cross',3],
 rally:['Bannerflamme','⚑','#ffac64','wave',5],
 mend:['Feldheilung','✚','#9af3b6','rise',4],
 pierce:['Durchbruch','➤','#faf0b5','line',5],
 bastion:['Schutzwall','♜','#dfc68b','ring',4],
 marshal:['Löwenansturm','🦁','#efd2a0','dive',2],
 treasurer:['Söldnerruf','✚','#e7da7c','rise',3],
 templar:['Blendlicht','🌞','#fff6be','ray',4],
 huntress:['Markierter Schuss','🐾','#a9ee8e','line',2],
 oracle:['Zeitbruch','☽','#c6b9ff','spiral',4],
 warden:['Lebensquell','🍀','#87ecb1','roots',4],
 falcon:['Federhagel','🪶','#b0e8e0','fan',6],
 warchief:['Blutrausch','👺','#ff997a','sweep',4],
 stormcaller:['Donnerschlag','🌩','#d9eeff','zigzag',6],
 ironhide:['Eisenhaut','🦏','#d9aa8f','ring',3],
 raider:['Beutezug','🌋','#ffc188','wave',4],
 lich:['Seelenfrost','❄','#bbd3ff','fan',5],
 bloodlord:['Lebensraub','🦇','#f294c0','spiral',3],
 boneseer:['Todesblick','🧿','#c7a4ee','ray',3],
 gravekeeper:['Knochenwall','🪦','#ded1b9','ring',5]
};
// Campaign NPCs use independent IDs; resolve their visual identity separately
// from combat stats, and retain an animation for future unknown card IDs.
const BOSS_FX={
 boss_crown:['Kronenstoß','♛','#ffd47d','ram',3],
 boss_rift:['Risslanze','ϟ','#a7deff','zigzag',5],
 boss_frost:['Froststoß','❄','#c4edff','ram',4],
 boss_embers:['Richterhammer','⚒','#ff9966','sweep',3],
 boss_depths:['Flutwelle','≈','#82e5ee','wave',5],
 boss_eclipse:['Dämmerungsstrahl','✦','#c5a9ff','ray',5]
};
function cardEffectSpec(id,kind='attack'){
 if(CARD_FX[id])return CARD_FX[id];
 if(BOSS_FX[id])return BOSS_FX[id];
 const enemy=(typeof CAMPAIGN_ENEMIES!=='undefined'&&CAMPAIGN_ENEMIES[id])||(typeof EXCLUSIVE_ENEMIES!=='undefined'&&EXCLUSIVE_ENEMIES[id]);
 if(enemy&&CARD_FX[enemy.artId])return CARD_FX[enemy.artId];
 const ranged=['Fernkampf','Magie','Heilung'].includes(enemy?.role);
 return ['Aktion',kind==='heal'?'✚':ranged?'➤':'╱',kind==='heal'?'#9af3b6':'#ffbe78',kind==='heal'?'rise':ranged?'line':'sweep',2];
}
function enemySpecialEffect(actor,targets,round){
 const enemy=(typeof CAMPAIGN_ENEMIES!=='undefined'&&CAMPAIGN_ENEMIES[actor.id])||(typeof EXCLUSIVE_ENEMIES!=='undefined'&&EXCLUSIVE_ENEMIES[actor.id]);
 const source=document.querySelector(`[data-cell="e${actor.slot}"] .fighter`);
 if((enemy?.mechanic==='tide'||actor.id==='enemy_tide_keeper')&&round%2)return cardEffect(actor.id,source,source,'shield');
 if((enemy?.mechanic==='ritual'||actor.id==='enemy_ash_ritualist')&&round%3===0&&actor.ritualRound!==round){
  return Promise.all(targets.filter(u=>u&&u.hp>0).map(u=>cardEffect(actor.id,source,document.querySelector(`[data-cell="a${u.slot}"] .fighter`),'attack')));
 }
 return null;
}
const liveCardAnimations=new Set();
function clearCardEffects(){for(const a of liveCardAnimations)a.cancel();liveCardAnimations.clear();document.querySelectorAll('.card-fx').forEach(e=>e.remove())}
function fxPoint(el){const r=(el.querySelector('.figure')||el).getBoundingClientRect(),a=$('arena').getBoundingClientRect();return{x:r.x+r.width/2-a.x,y:r.y+r.height/2-a.y}}
function fxMotion(el,frames,duration,delay=0){
 if(typeof el.animate!=='function')return Promise.resolve();
 const a=el.animate(frames,{duration,delay,easing:'ease-in-out',fill:'both'});liveCardAnimations.add(a);
 return a.finished.catch(()=>{}).finally(()=>{liveCardAnimations.delete(a);a.cancel()})
}
async function cardEffect(id,source,target,kind='attack'){
 window.GameAudio?.effect(id,kind);
 if(!source||!target||settings.reducedMotion||typeof source.animate!=='function')return;
 const spec=cardEffectSpec(id,kind);
 const [name,glyph,color,path,count]=spec,arena=$('arena'),from=fxPoint(source),to=fxPoint(target),duration=settings.speed==='fast'?340:650;
 const layer=document.createElement('div');layer.className='card-fx';layer.dataset.card=id;layer.dataset.effect=kind;layer.setAttribute('aria-hidden','true');arena.append(layer);
 const tasks=[],dx=to.x-from.x,dy=to.y-from.y;
 const transform=(x,y,scale=1,rotation=0)=>`translate(${x}px,${y}px) translate(-50%,-50%) rotate(${rotation}deg) scale(${scale})`;
 // Movement belongs to the figure only; names and health bars stay anchored.
 const figure=source.querySelector('.figure');
 if(kind==='attack'&&figure){
  source.classList.add('attacking');
  const melee=['ram','dive','sweep','cross','quake'].includes(path),reach=path==='dive'?.88:.76,lean=dx>=0?1:-1;
  tasks.push(fxMotion(figure,melee?[
   {transform:'translate(0,0) scale(1)',offset:0},
   {transform:`translate(${-dx*.04}px,${-dy*.04}px) rotate(${-lean*12}deg) scale(.92)`,offset:.18},
   {transform:`translate(${dx*reach}px,${dy*reach-(path==='dive'?16:0)}px) rotate(${lean*18}deg) scale(1.22)`,offset:.58},
   {transform:`translate(${dx*reach}px,${dy*reach}px) scale(1.12)`,offset:.68},
   {transform:'translate(0,0) scale(1)',offset:1}
  ]:[{transform:'scale(1)'},{transform:`translate(${-dx*.025}px,${-dy*.025}px) scale(1.14)`,offset:.25},{transform:`translate(${dx*.018}px,${dy*.018}px) scale(.94)`,offset:.45},{transform:'scale(1)'}],duration));
 }else if(figure)tasks.push(fxMotion(figure,[{filter:'brightness(1)',transform:'scale(1)'},{filter:`brightness(1.5) drop-shadow(0 0 8px ${color})`,transform:'scale(1.12)'},{filter:'brightness(1)',transform:'scale(1)'}],duration));

 for(let i=0;i<count;i++){
  const p=document.createElement('span');p.className='card-fx-particle';p.textContent=glyph;p.style.color=color;p.style.textShadow=`0 0 9px ${color}, 0 0 18px ${color}`;layer.append(p);
  let frames=[];const spread=(i-(count-1)/2)*10;
  for(let step=0;step<=4;step++){
   const t=step/4;let x=from.x+dx*t,y=from.y+dy*t,rotate=0,scale=.7+Math.sin(Math.PI*t)*.7;
   if(kind!=='attack'){
    const angle=(i/count+t)*Math.PI*2;
    x=to.x+Math.cos(angle)*(kind==='shield'?25:18)*(1-t*.5);
    y=to.y+Math.sin(angle)*12-t*24;
    scale=.6+t*.6;
    if(path==='roots'||path==='rise'){x=to.x+spread;y=to.y+25-t*50}
    if(path==='wave'){x=to.x+spread+Math.sin(t*Math.PI*2)*8;y=to.y-t*30}
    if(path==='ring'){x=to.x+Math.cos(angle)*28;y=to.y+Math.sin(angle)*20;scale=.8}
    if(path==='ray'){x=to.x+spread*(1-t);y=to.y-35+t*35;scale=1-t*.4}
    if(kind==='revive'){y=to.y+30-t*60;scale=.4+t}
    if(kind==='dodge'){x=to.x+(i%2?1:-1)*t*35;scale=1-t*.5}
   }else{
    if(path==='arc'||path==='dive')y-=Math.sin(Math.PI*t)*(30+i*5);
    if(path==='wave')x+=Math.sin(t*Math.PI*2+i)*16;
    if(path==='spiral'){x+=Math.sin(t*Math.PI*4+i)*18;y+=Math.cos(t*Math.PI*4+i)*12;rotate=t*180}
    if(path==='fan'){x+=spread*Math.sin(Math.PI*t);scale=.5+t}
    if(path==='zigzag')x+=(step%2?18:-18)*Math.sin(Math.PI*t);
    if(path==='roots'){x=to.x+spread;y=to.y+(1-t)*45;scale=.3+t}
    if(path==='sweep'){rotate=-75+t*150;x+=spread*Math.sin(Math.PI*t)}
    if(path==='cross'){rotate=(i%2?45:-45);x+=spread*(1-t)}
    if(path==='line')y+=spread*Math.sin(Math.PI*t)*.25;
    if(path==='quake'){x=to.x+Math.cos(i/count*Math.PI*2)*t*38;y=to.y+Math.sin(i/count*Math.PI*2)*t*16;scale=1.3-t*.7}
   }
   frames.push({transform:transform(x,y,scale,rotate),opacity:step===4?0:1,offset:t});
  }
  tasks.push(fxMotion(p,frames,duration,i*22));
 }
 try{await Promise.all(tasks)}finally{layer.remove();source.classList.remove('attacking')}
}
function unitEffect(unit,side,kind){const el=document.querySelector(`[data-cell="${side}${unit.slot}"] .fighter`);return cardEffect(unit.id,el,el,kind)}

function battleImpact(target,id,damage,absorbed,defeated=false){
 if(!target||settings.reducedMotion)return;
 const figure=target.querySelector('.figure'),color=absorbed&&!damage?'#9ddcff':cardEffectSpec(id)[2];
 if(figure)fxMotion(figure,[{transform:'scale(1)',filter:'brightness(1)'},{transform:'translate(7px,3px) rotate(10deg) scale(.86)',filter:`brightness(1.8) drop-shadow(0 0 8px ${color})`,offset:.2},{transform: defeated?'translateY(8px) rotate(24deg) scale(.75)':'translate(-3px,0) scale(1.04)',opacity:defeated?.3:1,offset:.65},{transform:defeated?'translateY(10px) scale(.7)':'translate(0,0) scale(1)',opacity:defeated?.2:1}],settings.speed==='fast'?180:300);
 const layer=document.createElement('div');layer.className='card-fx';layer.setAttribute('aria-hidden','true');$('arena').append(layer);const at=fxPoint(target),ring=document.createElement('span');ring.className='impact-ring';ring.style.cssText=`left:${at.x}px;top:${at.y}px;border-color:${color}`;layer.append(ring);
 fxMotion(ring,[{transform:'translate(-50%,-50%) scale(.2)',opacity:1},{transform:'translate(-50%,-50%) scale(1.7)',opacity:0}],settings.speed==='fast'?180:320).finally(()=>layer.remove());
}


Object.assign(CARD_FX,{"pikewarden": ["Pikenwache", "♔", "#eac461", "arc", 6], "lanternhealer": ["Lichtheilerin", "♕", "#eac461", "arc", 6], "gryphon_archer": ["Greifenschützin", "♖", "#eac461", "arc", 6], "oathbearer": ["Eidwächterin", "♗", "#eac461", "arc", 6], "dawnmarshal": ["Morgenmarschallin", "♘", "#eac461", "arc", 6], "briar_scout": ["Rankenspäherin", "♙", "#8cd7a0", "arc", 6], "moonblade": ["Mondsichel", "♚", "#8cd7a0", "arc", 6], "streamkeeper": ["Bachhüterin", "♛", "#8cd7a0", "arc", 6], "rootweaver": ["Rankenweber", "♜", "#8cd7a0", "arc", 6], "ancientheart": ["Uraltes Herz", "♝", "#8cd7a0", "arc", 6], "axe_scout": ["Axtläufer", "♞", "#e89154", "arc", 6], "emberhealer": ["Glutheilerin", "♟", "#e89154", "arc", 6], "stormbanner": ["Sturmbanner", "♠", "#e89154", "arc", 6], "boar_berserker": ["Eberberserker", "♡", "#e89154", "arc", 6], "stormmatriarch": ["Sturmmatriarchin", "♢", "#e89154", "arc", 6], "lanternshade": ["Laternengeist", "♣", "#bba3ed", "arc", 6], "grave_sentinel": ["Gruftwache", "♤", "#bba3ed", "arc", 6], "chainspirit": ["Kettengeist", "♥", "#bba3ed", "arc", 6], "funeral_knight": ["Trauerritter", "♦", "#bba3ed", "arc", 6], "namekeeper": ["Namenshüterin", "♧", "#bba3ed", "arc", 6]});
