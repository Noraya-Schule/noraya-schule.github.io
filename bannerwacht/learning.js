// Guided training uses the real board, shop, battles and rewards, with a separate save.
let lesson=null,helpWasPaused=false;
function learningDialog(){let d=$('learningDialog');if(!d){d=document.createElement('dialog');d.id='learningDialog';d.className='learning-dialog';document.body.append(d);d.addEventListener('cancel',e=>{e.preventDefault();closeLearning()})}return d}
function openLearning(){const d=learningDialog();if(!d.open){helpWasPaused=paused;d.showModal()}paused=true;clearTimeout(timer);timer=null;return d}
function closeLearning(){const d=learningDialog();d.close();lesson=null;paused=helpWasPaused;if(!paused&&pendingStep)schedule(pendingStep,120)}
function startTutorial(){
 if(S?.tutorial){closeMenu();render();return}
 if(S)save();
 if($('learningDialog')?.open)closeLearning();
 beginSetup();chosenRace='humans';chosenHero=HEROES.find(h=>h.race==='humans').id;chosenCampaign='crown';
 S=fresh();S.tutorial={version:1,spellUsed:false};S.life=5;S.team=Array(6).fill(null);S.bench[0]={id:'guard',lv:1};S.collection={guard:1};S.offers=['crossbow','guard','alchemist'];S.tacticOffers=['shield'];
 save();render();
}
function exitTutorial(){
 if(!S?.tutorial)return;
 if(S.phase==='end'&&!S.defeated)localStorage.setItem('bannerwacht-tutorial-seen','1');
 localStorage.removeItem('bannerwacht-tutorial');
 if($('learningDialog')?.open)closeLearning();
 beginSetup();S=load();if(S){chosenRace=S.race;chosenHero=S.hero;chosenCampaign=S.campaign;render()}
 renderTutorial();
}
function prepareTutorialChapter(){
 if(!S?.tutorial)return;
 S.pathChoice=null;S.tacticOffers=['shield'];S.gold=Math.max(S.gold,9);
 if(S.round===2){const i=S.bench.indexOf(null);if(i>=0)S.bench[i]={id:'guard',lv:1};S.collection.guard=(S.collection.guard||0)+1}
 if(S.round===3){S.offers=['alchemist','crossbow','guard'];S.life=Math.max(S.life,3)}
}
function tutorialTask(){
 if(!S?.tutorial)return null;
 const all=[...S.team,...S.bench].filter(Boolean),guard=S.team.findIndex(u=>u?.id==='guard'),bow=S.team.findIndex(u=>u?.id==='crossbow');
 const place=(id,slot,text)=>{let index=S.bench.findIndex(u=>u?.id===id),where='bench';if(index<0){where='team';index=S.team.findIndex(u=>u?.id===id)}const source=selected?.where===where&&selected?.i===index;return {title:source?'Platz auswählen':'Karte auswählen',text,tab:'army',target:source?`[data-area="team"][data-index="${slot}"]`:`[data-area="${where}"][data-index="${index}"]`}};
 if(S.phase==='end')return {title:S.defeated?'Noch einmal üben':'Tutorial abgeschlossen',text:S.defeated?'Du kannst diese Trainingskampagne jederzeit neu starten. Deine eigentliche Kampagne bleibt unverändert.':'Du hast Kämpfer aufgestellt, gekauft und verschmolzen, einen Zauber eingesetzt und Belohnungen gewählt. Bereit für deine eigene Chronik!',target:'#tutorialExit'};
 if(S.phase==='reward')return {title:'Siegesbeute auswählen',text:'Lies Werte und Fähigkeiten der drei Belohnungen. Wähle eine davon durch Antippen. Danach beginnt der nächste Trainingsabschnitt.',target:'[data-reward-index="0"]'};
 if(S.phase==='battle'){
  if(S.round===2&&!S.tutorial.spellUsed)return {title:'Jetzt Schildformation spielen',text:'Tippe auf Schildformation. Sie kostet 1 Mana und gibt allen Kämpfern sofort 2 Schild. Beobachte die blauen Schildwerte.',target:'[data-tactic="shield"]'};
  return {title:S.tutorial.spellUsed&&S.round===2?'Schild aktiv – jetzt kämpfen':'Beobachte den Kampf',text:'„Zug beenden“ startet die Angriffe. Die Front fängt Treffer ab; hinten greift die Armbrustschützin an. Höhere Initiative (⌛) handelt früher. Rot zeigt Leben, Blau Schild. Die Heldenfähigkeit ist optional und hat eine Vorschau.',target:'#endTurn'};
 }
 if(guard<0||guard>=3)return place('guard',0,'Tippe zuerst auf die Schildwache und dann auf den vorderen linken Platz. Ihre Wache schützt die Kämpfer dahinter.');
 if(!all.some(u=>u.id==='crossbow'))return {title:'Eine Fernkämpferin kaufen',text:'Kaufe die Armbrustschützin für 3 Gold. Sie erscheint anschließend in deiner Reserve.',tab:'shop',target:'[data-buy="0"]'};
 if(bow<3)return place('crossbow',3,'Tippe auf die Armbrustschützin und dann auf den hinteren linken Platz. Beide Kämpfer tragen Eisen: Der gemeinsame Bannerbonus verleiht Schild.');
 if(S.round===2){
  const u=S.team[guard];if(u.lv<2)return {title:'Gleiche Karten verschmelzen',text:'Eine zweite Schildwache liegt in deiner Reserve. „Alle verschmelzen“ macht daraus eine Karte auf Stufe 2. Danach wählst du ihre Fähigkeit.',tab:'army',target:'#merge'};
  if(!u.spec)return {title:'Entwicklung wählen',text:'Wähle im Auswahlfenster eine Fähigkeit für deine Schildwache. Ihre Wirkung gilt ab Stufe 2. Falls du das Fenster geschlossen hast: „Karte spezialisieren“.',tab:'army',target:'#developCards'};
  if(!S.tacticOwned.shield)return {title:'Einen Zauber kaufen',text:'Wechsle zu „Zauber“ und kaufe Schildformation für 3 Gold. Der Shop ist im Lager immer geöffnet. Gold bezahlt den Kauf, Mana später den Einsatz im Kampf.',tab:'commands',target:'[data-tactic-buy="shield"]'};
 }
 if(S.round===3&&S.team.filter(Boolean).length<3)return {title:'Deine Truppe ergänzen',text:'Nutze jetzt selbstständig den Shop und die Reserve. Kaufe einen dritten Kämpfer und stelle ihn auf einen freien Platz. Vergleiche Fähigkeiten und Banner; drei Kämpfer sind erlaubt.',target:'#mobileTabs'};
 if(!S.pathChoice)return {title:'Den Weg zum Kampf wählen',text:S.round===3?'Prüfe die Gegnerkundung. Wähle den sicheren Pfad und nutze, was du gelernt hast.':'Wähle den sicheren Pfad. In der Gegnerkundung siehst du die feindliche Aufstellung vor dem Kampf.',tab:'route',target:'[data-path="safe"]'};
 return {title:'Kampf beginnen',text:S.round===3?'Deine Vorbereitung ist abgeschlossen. Setze im letzten Übungskampf deine Aufstellung, Zauber und bei Bedarf den Helden ein.':'Starte den Kampf. Das echte Schlachtfeld zeigt dir jeden Angriff und wie Leben und Schild sich verändern.',target:'#mainAction'};
}
function tutorialExplanation(){
 if(S.round===1)return 'Nur Karten auf dem Feld kämpfen und zählen für Banner und Rollenboni. Reservekarten warten auf ihren Einsatz. Zwei Karten mit demselben Banner aktivieren einen Bonus. Mit dem Schloss unter einem Shopangebot hältst du es kostenlos für Neuwürfe und das nächste Kapitel fest.';
 if(S.round===2)return 'Fusion: zwei gleiche Karten derselben Stufe ergeben eine höhere Stufe, höchstens III. Ab II wählst du eine Entwicklungsrichtung. Gold bezahlt Käufe im Lager; Mana bezahlt Zauber im Kampf. Runde 1: 1 Mana, dann 2, 3, 4 und ab Runde 5 jeweils 5. Mana wird nicht angespart.';
 return 'Prüfe vor jedem Kampf Gegner, Aufstellung und Zielbefehle. Hohe Initiative handelt früher. Die Heldenfähigkeit kostet kein Mana und ist einmal pro Kampf verfügbar. Nach Siegen wählst du genau eine Belohnung. Heldenruhm und Völkerbund verstärken diese Reise; Erfolge und Kampagnenfreischaltungen bleiben dauerhaft.';
}
function playHelpTopics(){return [
 ['formation','Aufstellung und Reserve','Eine Karte antippen, dann ihren Zielplatz: verschieben oder tauschen. Vorne stehen meistens Schutz und Nahkampf, hinten Fernkampf, Magie und Heilung. Die Rolle bestimmt die Reichweite. Nur Karten auf dem Feld kämpfen und aktivieren Banner- und Rollenboni. Die neun Reserveplätze zählen nicht zum Truppenlimit.'],
 ['cards','Karten, Fusion und Shop','Zwei Karten derselben Art und Stufe verschmelzen zu einer höheren Stufe, höchstens III. Ab Stufe II kannst du eine von zwei Entwicklungsrichtungen wählen. „Kartendetails“ zeigt Werte, Initiative und Fähigkeiten. Volksrahmen zeigen die Stufe, die farbige Außenkante die Seltenheit. Das Schloss unter einem Angebot hält es kostenlos über Neuwürfe und Kapitelwechsel fest. Epische Karten werden als Siegbeute für diese Reise freigeschaltet.'],
 ['battle','Gold, Mana und Kampf','Gold bezahlt Einheiten, Zauber und Aufwertungen im Lager. Mana bezahlt Zauber im Kampf: pro Kampfrunde 1, 2, 3, 4 und danach jeweils 5; Reste verfallen. Höchstens fünf gekaufte Zauber sind aktiv, bis zu drei kommen pro Runde auf die Hand. Antippen spielt einen bezahlbaren Zauber sofort. Deine Heldenfähigkeit kostet kein Mana, zeigt eine Vorschau und ist einmal pro Kampf nutzbar. „Zug beenden“ startet die Angriffe nach Initiative.'],
 ['progress','Reiseboni oder dauerhafte Freischaltung?','Heldenruhm verbessert die aktive Heldenfähigkeit, Völkerbund den Volksbonus. Beide steigen höchstens auf 2 und gelten bis zum Ende dieser Reise. Gold, Einheiten, Zauber und Drilllager gelten ebenfalls für diese Reise. Erfolge, zusätzliche Helden, Kartenstile und Kampagnenfreischaltungen bleiben auf diesem Gerät erhalten. Jedes Volk schaltet seine Kampagnen einzeln frei. Der Sieg in der vierten Kampagne mit einem Volk schaltet dessen legendäre Karte dauerhaft für spätere Reisen frei; sie muss dort weiterhin gekauft werden.'],
 ['boss','Bosstrophäen: genau eine wählen','Nach den ersten beiden Bossen wählst du eine von drei Trophäen. Schmiede: bis zu zwei zufällige, noch aufwertbare Karten aus Feld und Reserve steigen eine Stufe; wenn keine aufwertbar ist, +12 Gold. Schatzkammer: +10 Gold und die angezeigte Karte; ohne freien Platz stattdessen zusätzlich +5 Gold. Legendärer Schwur: Heldenruhm und Völkerbund steigen jeweils um 1, höchstens auf 2; sind beide bereits maximal, +12 Gold. Der Schwur ist ein Reisebonus und schaltet keine legendäre Karte frei.'],
 ['save','Speichern und Hilfe','Dein Fortschritt wird in diesem Browser bzw. dieser App gespeichert. App und Website teilen den Spielstand nicht automatisch. Das Tutorial hat drei Übungskapitel und einen eigenen Spielstand; deine normale Reise bleibt erhalten. Im Kompendium findest du sämtliche Karten, Entwicklungsrichtungen, Zielregeln, Kampagnen und Belohnungen.']
]}
function showPlayHelp(topic='formation'){
 openLearning().innerHTML=`<header><h2>Spielhilfe</h2><button id="playHelpClose" class="btn secondary">Schließen</button></header><p>Vorbereiten → kämpfen → eine Belohnung wählen. Die wichtigsten Regeln zum Nachschlagen:</p><div class="play-help-topics">${playHelpTopics().map(([id,title,text])=>`<details ${id===topic?'open':''}><summary>${title}</summary><p>${text}</p></details>`).join('')}</div><button id="playHelpCodex" class="btn secondary full">Alle Karten und Regeln im Kompendium</button>`;
 $('playHelpClose').onclick=closeLearning;
 $('playHelpCodex').onclick=()=>{closeLearning();openCompendium()};
}
function tutorialBattleReady(){return tutorialTask()?.target==='#mainAction'}
function renderTutorial(){
 document.querySelectorAll('.tutorial-target').forEach(el=>el.classList.remove('tutorial-target'));
 let guide=$('tutorialGuide');document.body.classList.toggle('tutorial-running',!!S?.tutorial);
 if(!S?.tutorial){guide?.remove();return}
 if(!guide){guide=document.createElement('section');guide.id='tutorialGuide';guide.setAttribute('aria-label','Tutorial-Aufgabe');$('game').prepend(guide)}
 const task=tutorialTask(),key=S.round+':'+S.phase+':'+task.title;
 const changed=guide.dataset.step!==key;guide.dataset.step=key;
 if(changed)guide.innerHTML=`<div class="tutorial-heading"><b>🎓 Tutorial · ${S.round}/3</b><button id="tutorialExit" class="btn secondary">${S.phase==='end'?'Zurück zum Spiel':'Tutorial verlassen'}</button></div><strong>${task.title}</strong><p aria-live="polite">${task.text}</p><details class="tutorial-explanation"><summary>Kurz erklärt</summary><p>${tutorialExplanation()}</p></details>${S.phase==='end'?'':'<button id="tutorialShow" class="back-link">Nächsten Schritt zeigen →</button>'}`;
 $('tutorialExit').onclick=exitTutorial;
 const reveal=()=>{if(task.tab){mobileTab=task.tab;updateMobilePhase()}const target=document.querySelector(task.target);target?.classList.add('tutorial-target');if(target&&changed)target.scrollIntoView({block:'nearest',behavior:'smooth'})};
 if($('tutorialShow'))$('tutorialShow').onclick=()=>{reveal();document.querySelector(task.target)?.focus()};
 if(changed)reveal();else document.querySelector(task.target)?.classList.add('tutorial-target');
 $('stage').textContent=`🎓 ${S.round}/3`;$('heading').textContent=['Die erste Aufstellung','Entwicklung und Zauber','Deine Bewährungsprobe'][S.round-1];
 if(S.phase==='end'){$('heading').textContent=task.title;$('message').textContent=task.text;$('mainAction').textContent='Zurück zum Spiel';$('mainAction').onclick=exitTutorial}
 // Avoid distractions and irreversible preparation mistakes in guided chapters.
 for(const id of ['sell','reroll','rerollTactics'])if($(id))$(id).disabled=true;
 if(S.phase==='shop'){
  $('mainAction').disabled=!tutorialBattleReady();
  if(S.round<3){document.querySelectorAll('[data-buy]').forEach(b=>{b.disabled=task.target!==`[data-buy="${b.dataset.buy}"]`});document.querySelectorAll('[data-tactic-buy]').forEach(b=>{b.disabled=task.target!==`[data-tactic-buy="${b.dataset.tacticBuy}"]`})}
  document.querySelectorAll('[data-tactic-toggle],[data-tactic-upgrade]').forEach(b=>b.disabled=true);
 }
 if(S.phase==='battle'&&S.round===2&&!S.tutorial.spellUsed){if($('endTurn'))$('endTurn').disabled=true;if($('heroPower'))$('heroPower').disabled=true}
 if(S.phase==='battle'&&S.round===2&&S.tutorial.spellUsed&&$('endTurn'))$('endTurn').disabled=false;
 $('campaignProgress').hidden=true;
}
// Update guidance after real actions, including selecting a card without rerendering it.
document.addEventListener('click',()=>{if(S?.tutorial)renderTutorial()});
function showCardDetails(){if(!S||!selected)return;const u=slotUnit(selected.where,selected.i);if(!u)return;const t=type(u),unit={...u,slot:selected.i},h=hero(),baseAtk=Math.round(t.atk*(1+(u.lv-1)*.8)),baseHp=Math.round(t.hp*(1+(u.lv-1)*.85)),atk=previewAttack(unit),hp=maxhp(unit);
 const heroAtk=(h.allAtk||0)+(unit.slot<3?(h.frontAtk||0):(h.backAtk||0)),heroHp=(h.allHp||0)+(unit.slot<3?(h.frontHp||0):0),eliteAtk=eliteAttack(unit),eliteHealth=eliteHp(unit);
 openLearning().innerHTML=`${unitArt(t,true)}<header><h2>${t.name}</h2><button id="detailClose" class="btn secondary">Schließen</button></header><p>${t.role} · Banner ${unitBanners(t).join(' + ')} · Stufe ${u.lv}/3</p><p>${t.cardText}</p>${supportMarkup(u)}<p>${upgradeLabel(t,u.lv)}</p><p>${initiativeDescription(u)}</p>${unitPriorityMarkup(u,'detail')}<table><tr><th>Quelle</th><th>Angriff</th><th>Leben</th></tr><tr><td>Grundwert</td><td>${t.atk}</td><td>${t.hp}</td></tr><tr><td>Aufwertung</td><td>+${baseAtk-t.atk}</td><td>+${baseHp-t.hp}</td></tr><tr><td>Held</td><td>+${heroAtk}</td><td>+${heroHp}</td></tr><tr><td>Elite</td><td>+${eliteAtk}</td><td>+${eliteHealth}</td></tr><tr><td>Formation, Synergien, Sammlung & Segen</td><td>+${atk-baseAtk-heroAtk-eliteAtk}</td><td>+${hp-baseHp-heroHp-eliteHealth}</td></tr><tr><th>Gesamt</th><th>${atk}</th><th>${hp}</th></tr></table><p>${selected.where==='bench'?'Reserve: Vorschau für die entsprechende vordere/hintere Position. Reservekarten aktivieren selbst keine Synergie.':'Werte für die aktuelle Aufstellung. Zeitweilige Kampfboni kommen gegebenenfalls hinzu.'}</p><details><summary>Begriffe erklären</summary><p>Schild fängt Schaden vor den Lebenspunkten ab. Jedes Banner hat eigene Effekte: Eisen schützt, Mond lässt ausweichen, Blut heilt nach Treffern. Bei 2, 3 und 4 Einheiten steigt der Gesamtbonus. Die genauen Effekte stehen unter Boni. Jede Karte auf dem Feld zählt einmal, unabhängig von ihrer Fusionsstufe. Heldenruhm verstärkt die einmalige Heldenfähigkeit. Völkerbund verstärkt den Bonus deines Volkes. Mana bezahlt Zauber im Kampf: Runde 1 gibt 1 Mana, danach pro Runde 1 mehr bis maximal 5. Nicht verbrauchtes Mana verfällt am Rundenende. Heldenruhm und Völkerbund gelten nur für diese Reise; Erfolge und freigeschaltete Helden bleiben dauerhaft.</p></details>`;bindUnitPriorities(u,'detail');$('detailClose').onclick=closeLearning;
}
function learningHints(){if(!$('cardDetails'))return;$('cardDetails').disabled=!selected||!slotUnit(selected.where,selected.i);let reasons=[];if(S?.phase==='shop'){
 if(!S.pathChoice)reasons.push('Kampf gesperrt: Wähle zuerst einen Pfad.');if(!S.team.some(Boolean))reasons.push('Kampf gesperrt: Stelle mindestens einen Kämpfer auf.');if(!mergePair())reasons.push('Verschmelzen: Du brauchst zwei gleiche Karten derselben Stufe unter Stufe 3.');if(S.gold<2)reasons.push('Neuwurf: Noch '+(2-S.gold)+' Gold nötig.');if(!canStoreCard())reasons.push('Rekrutierung: Feld und Reserve sind voll. Verkaufe oder verschmelze Karten.');}
 $('actionReasons').textContent=reasons.join(' ');
 let report=$('battleReport');if(!report){report=document.createElement('details');report.id='battleReport';$('campAdvice').insertAdjacentElement('afterend',report)}report.hidden=!S?.lastBattle;if(S?.lastBattle){const b=S.lastBattle;report.innerHTML=`<summary>Letzter Kampf: ${b.won?'Sieg':'Niederlage'} · Auswertung</summary><p>${b.round} Kampfrunden · ${b.survivors}/${b.total} eigene Kämpfer überlebt.</p><ul>${(b.findings||[b.tip]).map(t=>`<li>${t}</li>`).join('')}</ul>${b.spellHealing?`<p>Zauber & Held: ${b.spellHealing} Leben wiederhergestellt.</p>`:''}${b.units?`<details><summary>Werte je Kämpfer</summary><table><thead><tr><th>Kämpfer</th><th>Schaden</th><th>Heilung</th><th>Abgewehrt</th></tr></thead><tbody>${b.units.map(u=>`<tr><td>${u.name} (${u.slot<3?'V':'H'}${u.slot%3+1})</td><td>${u.damage}</td><td>${u.heal}</td><td>${u.blocked}</td></tr>`).join('')}</tbody></table></details>`:''}`;if(S.phase==='reward')$('reward').querySelector('.reward-title')?.append(report);else $('mobileStory').prepend(report)}
}
function setupLearning(){
 const help=document.createElement('button');help.id='playHelpOpen';help.className='btn secondary full';help.textContent='Spielhilfe · die wichtigsten Regeln';$('menuResume').insertAdjacentElement('afterend',help);help.onclick=()=>{closeMenu();showPlayHelp()};
 const btn=document.createElement('button');btn.id='tutorialStart';btn.className='btn secondary';btn.textContent='Tutorial-Kampagne spielen';$('menuResume').insertAdjacentElement('afterend',btn);btn.onclick=()=>{closeMenu();startTutorial()};
 $('actions').insertAdjacentHTML('beforeend','<button id="cardDetails" class="btn secondary">Kartendetails</button><details id="actionHelp"><summary>Warum ist eine Aktion gesperrt?</summary><p id="actionReasons"></p></details>');$('cardDetails').onclick=showCardDetails;
 $('game').addEventListener('click',()=>{learningHints()});
 if(S)learningHints();

}
setupLearning();

renderTutorial();
