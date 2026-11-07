// Project art is keyed by canonical IDs, never by translated labels or saved values.
function gameArt(group,id,label='',size='small'){
 return `<img class="game-art art-${group} art-${size}" src="assets/${group}/${id}.webp?v=73"${group==='campaigns'&&size==='cover'?` srcset="assets/campaigns/mobile/${id}.webp?v=73 768w, assets/campaigns/${id}.webp?v=73 1280w" sizes="(max-width: 760px) 100vw, 560px"`: ''} alt="${label}" width="160" height="160" loading="lazy" decoding="async">`;
}
function heroArt(h,size='small'){return gameArt('heroes',h.id,h.name,size)}
function spellArt(c,size='small'){return gameArt('spells',c.id,c.name,size)}
function campaignArt(c,size='cover'){return gameArt('campaigns',c.id,c.name,size)}
function factionArt(r,size='small'){return gameArt('factions',r.id,r.name,size)}
function rewardArt(r){
 const icons={upgrade:'upgrade',treasure:'treasure',recover:'campfire',study:'book',training:'training',bossforge:'forge',bosschest:'treasure',bosslegacy:'oath'};
 return icons[r.id]?gameArt('rewards',icons[r.id],r.name):r.icon;
}
// Shared art uses stable card IDs; save data and combat values remain unchanged.
function unitArt(t, detail=false){const lazy='loading="lazy" decoding="async"';if(t.boss)return `<img class="unit-art boss-art${detail?' unit-art-detail':''}" src="assets/bosses/${t.campaign}.webp?v=73" alt="${t.name}" width="160" height="160" ${lazy}>`;if(t.campaignEnemy){const index=['shield','raider','archer','mage','healer','marshal','assassin','breaker','ritual','beast','scout','warden'].indexOf(t.archetype);return `<span class="unit-art npc-art${detail?' unit-art-detail':''}" role="img" aria-label="${t.name}" data-npc-art="${t.id}" style="background-image:url('assets/enemies/${t.campaign}.png?v=95');background-position:${index%4*100/3}% ${Math.floor(index/4)*50}%"></span>`}return `<img class="unit-art${detail?' unit-art-detail':''}" src="assets/units/${t.artRace||t.race}/${t.artId||t.id}.webp?v=73" alt="${t.name}" width="160" height="160" ${lazy}>`}
const RACES=[
 {id:'humans',name:'Königreiche',icon:'🦁',text:'Freie Städte kämpfen mit Schildwall und Armbrust.',lore:'Einst regierte eine Krone sieben Städte. Heute schwören ihre Banner jedem Helden Treue, der das verlorene Licht zurückbringt.',color:'#d3a84c',starters:['guard','crossbow']},
 {id:'elves',name:'Waldvolk',icon:'🦌',text:'Wandernde Höfe hüten die lebenden Wälder.',lore:'Die Wälder erinnern sich an jedes gebrochene Versprechen. Ihre Hüter kämpfen für uralte Pfade, Quellen und Namen.',color:'#69a96b',starters:['thorn','archer']},
 {id:'orcs',name:'Orkstämme',icon:'🐗',text:'Freie Clans verbinden Kraft mit Sturmritualen.',lore:'Die Stämme folgen keinem Thron. Wer Stärke, List und Großmut beweist, darf das Kriegsbanner tragen.',color:'#b86645',starters:['brute','hunter']},
 {id:'undead',name:'Nekropole',icon:'💀',text:'Ahnenreiche bewahren Wissen und Seelenmagie.',lore:'In der Nekropole wachen Ahnen über ihre Nachfahren – doch unter den Grüften flüstert etwas, das selbst sie fürchten.',color:'#8f78bd',starters:['boneguard','wraith']}
];
const CAMPAIGNS=[
 {id:'crown',icon:'🌘',name:'Die Splitterkrone',text:'Eine zerbrochene Krone, wechselnde Bündnisse und der Schatten unter dem Hochsitz.',chapters:['Funken im Grenzland','Der schweigende Weg','Ruinen von Asterhall','Pakt am Dornenhain','Sturm über Rotfurt','Die wandernde Gruft','Masken des Rates','Belagerung der Morgenpforte','Das falsche Banner','Unter dem Hochsitz','Die Halle ohne Echo','Die Splitterkrone'],story:['Ein fremdes Banner brennt am Horizont.','Auf der Straße verstummen selbst die Vögel.','In den Ruinen liegt ein Splitter der alten Krone.','Der Dornenhof fordert einen Beweis deiner Treue.','Rotfurt hält nur bis zum nächsten Morgen.','Eine Gruft wandert nachts über das Moor.','Im Rat trägt jemand das falsche Gesicht.','Die Morgenpforte darf nicht fallen.','Dein eigenes Wappen steht im feindlichen Heer.','Unter dem Thron schlägt ein steinernes Herz.','Jeder Ruf kehrt als Warnung zurück.','Die Krone wartet – und sie kennt deinen Namen.']},
 {id:'rift',icon:'⚡',name:'Sturm über den Weltenrissen',text:'Eine schwierigere Reise mit Anomalien, Eliteformationen und dem Schicksal aller Völker.',chapters:['Der erste Riss','Aschenregen','Jagd durch Silberlaub','Die Knochenbrücke','Donnerpakt','Belagerte Archive','Der doppelte Mond','Herz des Sturms','Vier Banner','Der Namenlose Heerführer','Jenseits der Schwelle','Morgen nach dem Sturm'],story:['Der Himmel reißt über dem Grenzland auf.','Asche fällt aus einer Welt ohne Sonne.','Etwas Unsichtbares jagt zwischen den Bäumen.','Die Brücke verlangt einen lebenden Zoll.','Donner antwortet auf deinen Schwur.','Die letzten Karten der Welt liegen im Archiv.','Zwei Monde ziehen die Toten aus der Erde.','Im Auge des Sturms wartet eine Armee.','Vier Völker müssen unter einem Banner stehen.','Der Heerführer trägt kein Gesicht.','Jenseits der Schwelle gelten andere Gesetze.','Der Morgen kommt – wenn du ihn verteidigst.']}
];
const HERO_BEATS={
 crown:['Das Feuer ist zu sauber gelegt. Jemand wollte, dass wir dieses Banner sehen.','Wenn selbst die Vögel schweigen, lauscht der Feind an ihrer Stelle.','Ein Kronensplitter ist kein Schatz. Er ist ein Versprechen – oder eine Falle.','Der Dornenhof prüft nicht unsere Stärke, sondern weshalb wir sie einsetzen.','Rotfurt braucht keine Legende. Es braucht uns vor Sonnenaufgang.','Diese Gruft wandert nicht ziellos. Sie sucht denselben Weg wie wir.','Im Rat lügt nicht nur eine Person. Jemand hat ihnen allen dieselbe Angst gegeben.','Heute entscheidet unsere Aufstellung, ob die Morgenpforte morgen noch einen Namen hat.','Mein Wappen auf ihrer Seite? Gut. Dann weiß ich, welches Banner zuerst fällt.','Das Herz unter dem Thron schlägt im Takt unserer Schritte.','Kein Echo – als hätte diese Halle ihre Erinnerungen verschluckt.','Die Krone kennt meinen Namen. Ich entscheide, was er ihr bedeutet.'],
 rift:['Der Riss ist keine Wunde im Himmel. Er ist eine offene Tür.','Diese Asche stammt aus einer Welt, die bereits verloren hat.','Wir werden gejagt. Also wählen wir den Pfad, auf dem der Jäger sichtbar wird.','Die Knochenbrücke verlangt Leben. Wir bieten ihr Mut.','Ein Schwur im Donner bindet mehr als nur die, die ihn sprechen.','Im Archiv liegt nicht nur Wissen – dort liegt die letzte gemeinsame Erinnerung der Völker.','Zwei Monde, zwei Schatten. Traue heute keinem Umriss.','Im Auge des Sturms wird jede Entscheidung plötzlich still.','Vier Banner müssen nicht gleich sein. Sie müssen nur in dieselbe Richtung wehen.','Ein Heerführer ohne Gesicht kann jede Angst tragen. Geben wir ihm unsere nicht.','Hinter der Schwelle gelten andere Regeln. Unsere Werte nehmen wir trotzdem mit.','Wenn dieser Morgen kommt, soll er alle vier Banner sehen.']
};
const EPILOGUES={
 crown:{humans:'Die Splitterkrone wird nicht neu geschmiedet. Die freien Städte setzen ihre Teile in vier Tore – Macht wird zu Schutz.',elves:'Wurzeln umschließen die Splitterkrone. Aus ihrem Metall wächst ein Baum, unter dem die vier Völker erstmals gemeinsam schwören.',orcs:'Die Krone wird zerbrochen, diesmal freiwillig. Jeder Clan trägt einen Splitter, doch keiner darf wieder über alle herrschen.',undead:'Die Ahnen nehmen die Krone in Verwahrung. Ihr Flüstern verstummt, als die Nekropole verspricht, Erinnerung nie wieder mit Herrschaft zu verwechseln.'},
 rift:{humans:'Die Städte schließen den Riss nicht mit Mauern, sondern mit einem gemeinsamen Banner. Zum ersten Mal steht es für alle Völker.',elves:'Der Wald wächst durch die Wunde der Welt. Silberne Blätter markieren fortan jeden Ort, an dem Wirklichkeiten einander berühren.',orcs:'Der letzte Donner trägt den Namen deines Helden über alle Ebenen. Die Stämme nennen den Frieden ihren größten Sieg.',undead:'Die Ahnen treten an die Schwelle und halten sie von der anderen Seite. In der Nekropole brennt dafür erstmals ein warmes Licht.'}
};
const RACE_STORY={humans:'Die freien Städte schicken dich, weil jedes Banner im Grenzland eine andere Wahrheit erzählt. Deine Truppe soll nicht nur gewinnen, sondern entscheiden, wem die Krone künftig gehört.',elves:'Der Wald hat den Riss zuerst gespürt. Zwischen Wurzeln und Mondlicht folgen deine Hüter einer Spur, die älter ist als die vier Völker – und sie führt direkt in den Krieg.',orcs:'Die Clans lachen über fremde Kronen, doch der kommende Sturm bedroht jede Feuerstelle. Dein Banner muss beweisen, dass Stärke auch Schutz und Zusammenhalt bedeuten kann.',undead:'Die Ahnen haben deine Truppe aus der Stille gerufen. Etwas unter den Gräbern löscht Erinnerungen aus – und nur wer sich an die Wahrheit erinnert, kann es aufhalten.'};
const CAMPAIGN_RACE_STORY={crown:{humans:'Die Splitterkrone versprach den Städten Frieden. Nun musst du herausfinden, wer sie zerbrochen hat.',elves:'Die Splitterkrone liegt in fremder Erde. Jeder Splitter vergiftet einen alten Waldpfad.',orcs:'Eine Krone ist nur Metall – bis jemand versucht, damit alle Clans zu beherrschen.',undead:'Die Krone bewahrt Erinnerungen. Ihre Splitter flüstern Namen, die längst hätten ruhen sollen.'},rift:{humans:'Der Weltenriss öffnet sich über den Grenzstädten. Hinter ihm wartet eine Armee ohne Heimat.',elves:'Der Riss schneidet durch die Wurzeln der Welt. Der Wald sucht einen Weg, ihn von innen zu schließen.',orcs:'Der Donner aus dem Riss fordert einen Gegner, der groß genug ist, um ihn zu übertönen.',undead:'Jenseits des Risses liegt ein Reich, in dem selbst Tote sterben können.'}};
const TACTICS=[
 {id:'shield',icon:'🛡️',name:'Schildformation',cost:1,text:'Alle erhalten 2 Schild.'},
 {id:'shot',icon:'🎯',name:'Fokusfeuer',cost:2,text:'5 Schaden am verwundetsten Ziel.'},
 {id:'rally',icon:'🔥',name:'Bannerflamme',get cost(){return currentCardBalance()?2:3},text:'Alle erhalten in diesem Zug +2 Angriff.'},
 {id:'mend',icon:'💚',name:'Feldheilung',cost:2,text:'Heilt den verwundetsten Kämpfer um 7.'},
 {id:'pierce',icon:'🏹',name:'Durchbruch',cost:3,text:'8 Schaden, ignoriert Schild und Wache.'},
];
const TYPES = [
 {id:'guard',initiative:3,initiativeGrowth:[[0, -1], [0, 0]],race:'humans',name:'Schildwache',icon:'🛡️',banner:'Eisen',role:'Schutz',rarity:'Gewöhnlich',hp:19,atk:3,upgradeType:'shield',upgrade:'Beginnt mit 2/4 Schild.'},
 {id:'crossbow',initiative:5,initiativeGrowth:[[0, -1], [0, 0]],race:'humans',name:'Armbrustschützin',icon:'🎯',banner:'Eisen',role:'Fernkampf',rarity:'Gewöhnlich',hp:10,atk:5,upgradeType:'snipe',upgrade:'Umgeht Wache beim ersten/bei jedem 3. Angriff.'},
 {id:'knight',initiative:7,initiativeGrowth:[[0, 0], [-1, -1]],race:'humans',name:'Greifenritter',icon:'🦅',banner:'Krone',role:'Nahkampf',rarity:'Selten',hp:15,atk:6,upgradeType:'charge',upgrade:'Der erste Angriff verursacht +3/+6 Schaden.'},
 {id:'cleric',initiative:4,initiativeGrowth:[[0, 0], [0, -1]],race:'humans',name:'Lichtklerikerin',icon:'☀️',banner:'Krone',role:'Heilung',rarity:'Episch',hp:12,atk:2,heal:5,upgradeType:'healing',upgrade:'Heilungen wirken zusätzlich um +2/+4.'},
 {id:'halberd',initiative:5,initiativeGrowth:[[0, -1], [1, 1]],race:'humans',name:'Hellebardier',icon:'🔱',banner:'Eisen',role:'Nahkampf',rarity:'Gewöhnlich',hp:14,atk:5,upgradeType:'cleave',upgrade:'Trifft ein benachbartes Ziel für 2/4.'},
 {id:'bannermaid',initiative:6,initiativeGrowth:[[0, 0], [0, -1]],race:'humans',name:'Bannerträgerin',icon:'🚩',banner:'Krone',role:'Unterstützung',rarity:'Selten',hp:13,atk:3,upgradeType:'rally',upgrade:'Benachbarte Verbündete beginnen mit +1/+2 Angriff.'},
 {id:'alchemist',initiative:5,initiativeGrowth:[[0, 0], [0, 0]],race:'humans',name:'Feldalchemist',icon:'⚗️',banner:'Zunft',role:'Heilung',rarity:'Selten',hp:11,atk:3,heal:3,upgradeType:'regen',upgrade:'Heilt sich zu Rundenbeginn um 2/4.'},
 {id:'cannoneer',initiative:2,initiativeGrowth:[[0, 0], [0, -1]],race:'humans',name:'Pulvermeisterin',icon:'💣',banner:'Zunft',role:'Fernkampf',rarity:'Episch',hp:9,atk:7,upgradeType:'blast',upgrade:'Jeder 3. Angriff trifft Nachbarn für 3/6.'},
 {id:'duelist',initiative:9,initiativeGrowth:[[0, 0], [-1, -1]],race:'humans',name:'Hofduellant',icon:'🤺',banner:'Krone',role:'Nahkampf',rarity:'Selten',hp:11,atk:7,upgradeType:'dodge',upgrade:'Weicht dem ersten/den ersten zwei Treffern aus.'},
 {id:'battle_mage',initiative:4,initiativeGrowth:[[0, 0], [0, -1]],race:'humans',name:'Kampfmagierin',icon:'📘',banner:'Zunft',role:'Magie',rarity:'Episch',hp:10,atk:6,upgradeType:'ward',upgrade:'Erhält nach jedem Zauberstoß 2/4 Schild.'},

 {id:'thorn',initiative:3,initiativeGrowth:[[0, 0], [0, -1]],race:'elves',name:'Dornhüter',icon:'🌳',banner:'Wald',role:'Schutz',rarity:'Gewöhnlich',hp:17,atk:3,upgradeType:'thorns',upgrade:'Wirft bei Treffern 2/4 Schaden zurück.'},
 {id:'archer',initiative:7,initiativeGrowth:[[0, -1], [0, 0]],race:'elves',name:'Waldläuferin',icon:'🏹',banner:'Wald',role:'Fernkampf',rarity:'Gewöhnlich',hp:10,atk:5,upgradeType:'snipe',upgrade:'Umgeht Wache beim ersten/bei jedem 3. Angriff.'},
 {id:'druid',initiative:5,initiativeGrowth:[[0, 0], [0, -1]],race:'elves',name:'Druidin',icon:'🌿',banner:'Mond',role:'Heilung',rarity:'Selten',hp:13,atk:2,heal:4,upgradeType:'healing',upgrade:'Heilungen wirken zusätzlich um +2/+4.'},
 {id:'bladedancer',initiative:8,initiativeGrowth:[[0, 0], [-1, -1]],race:'elves',name:'Klingentänzer',icon:'🍃',banner:'Mond',role:'Nahkampf',rarity:'Episch',hp:11,atk:7,upgradeType:'haste',upgrade:'Greift in Runde 1/alle 3 Runden zweimal an.'},
 {id:'owl_scout',initiative:8,initiativeGrowth:[[0, 0], [-1, -1]],race:'elves',name:'Eulenspäherin',icon:'🦉',banner:'Wald',role:'Fernkampf',rarity:'Gewöhnlich',hp:9,atk:4,upgradeType:'mark',upgrade:'Getroffene Ziele erleiden danach +1/+2 Schaden.'},
 {id:'dryad',initiative:6,initiativeGrowth:[[0, 0], [0, 0]],race:'elves',name:'Quellendryade',icon:'🧚',banner:'Quelle',role:'Heilung',rarity:'Selten',hp:12,atk:2,heal:4,upgradeType:'regen',upgrade:'Heilt sich zu Rundenbeginn um 2/4.'},
 {id:'moonstag',initiative:6,initiativeGrowth:[[0, 0], [-1, -1]],race:'elves',name:'Mondhirsch',icon:'🦌',banner:'Mond',role:'Schutz',rarity:'Selten',hp:19,atk:4,upgradeType:'aura',upgrade:'Hintere Reihe erhält zu Beginn 1/2 Schild.'},
 {id:'rootmage',initiative:4,initiativeGrowth:[[0, 0], [0, -1]],race:'elves',name:'Wurzelrufer',icon:'🌱',banner:'Quelle',role:'Magie',rarity:'Episch',hp:11,atk:6,upgradeType:'bind',upgrade:'Senkt den Angriff des Ziels für eine Runde um 1/2.'},
 {id:'shadowcat',initiative:9,initiativeGrowth:[[0, 0], [-1, -1]],race:'elves',name:'Schattenluchs',icon:'🐈‍⬛',banner:'Wald',role:'Nahkampf',rarity:'Selten',hp:10,atk:7,upgradeType:'execute',upgrade:'Verwundete Ziele erleiden +3/+6 Schaden.'},
 {id:'starweaver',initiative:3,initiativeGrowth:[[0, 0], [0, 0]],race:'elves',name:'Sternenweberin',icon:'🌌',banner:'Quelle',role:'Magie',rarity:'Episch',hp:9,atk:7,upgradeType:'blast',upgrade:'Jeder 3. Angriff trifft Nachbarn für 3/6.'},

 {id:'brute',initiative:5,initiativeGrowth:[[0, 0], [-1, -1]],race:'orcs',name:'Orkbrecher',icon:'🪓',banner:'Horde',role:'Nahkampf',rarity:'Gewöhnlich',hp:17,atk:5,upgradeType:'charge',upgrade:'Der erste Angriff verursacht +3/+6 Schaden.'},
 {id:'hunter',initiative:7,initiativeGrowth:[[0, 0], [-1, -1]],race:'orcs',name:'Speerjägerin',icon:'🗡️',banner:'Horde',role:'Fernkampf',rarity:'Gewöhnlich',hp:12,atk:4,upgradeType:'mark',upgrade:'Getroffene Ziele erleiden danach +1/+2 Schaden.'},
 {id:'shaman',initiative:5,initiativeGrowth:[[0, -1], [0, 0]],race:'orcs',name:'Sturmschamane',icon:'⚡',banner:'Sturm',role:'Magie',rarity:'Selten',hp:10,atk:6,upgradeType:'chain',upgrade:'Zauberstoß trifft ein weiteres Ziel für 2/4.'},
 {id:'troll',initiative:2,initiativeGrowth:[[0, 0], [0, -1]],race:'orcs',name:'Brückentroll',icon:'👹',banner:'Sturm',role:'Schutz',rarity:'Episch',hp:23,atk:3,upgradeType:'regen',upgrade:'Heilt sich zu Rundenbeginn um 2/4.'},
 {id:'wolf_rider',initiative:8,initiativeGrowth:[[0, 0], [-1, -1]],race:'orcs',name:'Wolfsreiterin',icon:'🐺',banner:'Horde',role:'Nahkampf',rarity:'Gewöhnlich',hp:13,atk:6,upgradeType:'haste',upgrade:'Greift in Runde 1/alle 3 Runden zweimal an.'},
 {id:'drummer',initiative:6,initiativeGrowth:[[0, 0], [0, -1]],race:'orcs',name:'Kriegstrommler',icon:'🥁',banner:'Horde',role:'Unterstützung',rarity:'Selten',hp:14,atk:3,upgradeType:'rally',upgrade:'Benachbarte Verbündete beginnen mit +1/+2 Angriff.'},
 {id:'boar_guard',initiative:4,initiativeGrowth:[[0, 0], [0, -1]],race:'orcs',name:'Eberwache',icon:'🐗',banner:'Blut',role:'Schutz',rarity:'Selten',hp:20,atk:4,upgradeType:'thorns',upgrade:'Wirft bei Treffern 2/4 Schaden zurück.'},
 {id:'fire_spitter',initiative:4,initiativeGrowth:[[0, -1], [0, 0]],race:'orcs',name:'Feuerspucker',icon:'🔥',banner:'Sturm',role:'Fernkampf',rarity:'Episch',hp:10,atk:7,upgradeType:'blast',upgrade:'Jeder 3. Angriff trifft Nachbarn für 3/6.'},
 {id:'bloodaxe',initiative:5,initiativeGrowth:[[0, -1], [1, 1]],race:'orcs',name:'Blutaxt',icon:'🩸',banner:'Blut',role:'Nahkampf',rarity:'Episch',hp:14,atk:8,upgradeType:'lifesteal',upgrade:'Heilt sich nach Treffern um 2/4.'},
 {id:'earthspeaker',initiative:3,initiativeGrowth:[[0, -1], [0, 0]],race:'orcs',name:'Erdsprecherin',icon:'🪨',banner:'Blut',role:'Heilung',rarity:'Selten',hp:14,atk:2,heal:4,upgradeType:'aura',upgrade:'Hintere Reihe erhält zu Beginn 1/2 Schild.'},

 {id:'boneguard',initiative:3,initiativeGrowth:[[0, -1], [0, 0]],race:'undead',name:'Knochenwache',icon:'🦴',banner:'Grab',role:'Schutz',rarity:'Gewöhnlich',hp:18,atk:3,upgradeType:'shield',upgrade:'Beginnt mit 2/4 Schild.'},
 {id:'wraith',initiative:8,initiativeGrowth:[[0, 0], [-1, -1]],race:'undead',name:'Grabgeist',icon:'👻',banner:'Grab',role:'Magie',rarity:'Gewöhnlich',hp:9,atk:6,upgradeType:'dodge',upgrade:'Weicht dem ersten/den ersten zwei Treffern aus.'},
 {id:'necromancer',initiative:4,initiativeGrowth:[[0, 0], [0, -1]],race:'undead',name:'Nekromantin',icon:'🔮',banner:'Seele',role:'Fernkampf',rarity:'Selten',hp:11,atk:5,upgradeType:'curse',upgrade:'Senkt den Angriff des Ziels für eine Runde um 1/2.'},
 {id:'vampire',initiative:7,initiativeGrowth:[[0, -1], [0, 0]],race:'undead',name:'Blutfürst',icon:'🧛',banner:'Seele',role:'Nahkampf',rarity:'Episch',hp:14,atk:7,upgradeType:'lifesteal',upgrade:'Heilt sich nach Treffern um 2/4.'},
 {id:'skeleton_archer',initiative:6,initiativeGrowth:[[0, -1], [0, 0]],race:'undead',name:'Knochenschütze',icon:'➳',banner:'Grab',role:'Fernkampf',rarity:'Gewöhnlich',hp:10,atk:5,upgradeType:'snipe',upgrade:'Umgeht Wache beim ersten/bei jedem 3. Angriff.'},
 {id:'banshee',initiative:7,initiativeGrowth:[[0, 0], [-1, -1]],race:'undead',name:'Banshee',icon:'😱',banner:'Seele',role:'Magie',rarity:'Selten',hp:9,atk:6,upgradeType:'bind',upgrade:'Senkt den Angriff des Ziels für eine Runde um 1/2.'},
 {id:'grave_priest',initiative:4,initiativeGrowth:[[0, 0], [0, -1]],race:'undead',name:'Grabpriesterin',icon:'⚰️',banner:'Dämmerung',role:'Heilung',rarity:'Selten',hp:12,atk:2,heal:4,upgradeType:'healing',upgrade:'Heilungen wirken zusätzlich um +2/+4.'},
 {id:'bone_giant',initiative:1,initiativeGrowth:[[0, 0], [0, 0]],race:'undead',name:'Knochenriese',icon:'☠️',banner:'Dämmerung',role:'Schutz',rarity:'Episch',hp:24,atk:4,upgradeType:'thorns',upgrade:'Wirft bei Treffern 2/4 Schaden zurück.'},
 {id:'plague_rat',initiative:9,initiativeGrowth:[[0, 0], [-1, -1]],race:'undead',name:'Seuchenmeute',icon:'🐀',banner:'Grab',role:'Nahkampf',rarity:'Gewöhnlich',hp:11,atk:6,upgradeType:'mark',upgrade:'Getroffene Ziele erleiden danach +1/+2 Schaden.'},
 {id:'death_knight',initiative:4,initiativeGrowth:[[0, 0], [1, 1]],race:'undead',name:'Todesritterin',icon:'⚔️',banner:'Dämmerung',role:'Nahkampf',rarity:'Episch',hp:17,atk:7,upgradeType:'revive',upgrade:'Kehrt einmal mit 4/8 Leben zurück.'}
];

// Expansion roster: five cards per people; permanent legends require campaign four.
TYPES.push(...[
 {
  "id": "pikewarden",
  "race": "humans",
  "name": "Pikenwache",
  "rarity": "Gewöhnlich",
  "role": "Nahkampf",
  "banner": "Eisen",
  "hp": 14,
  "atk": 4,
  "initiative": 5,
  "upgradeType": "charge",
  "upgrade": "Der erste Angriff verursacht +3/+6 Schaden.",
  "expansion": true,
  "icon": "♔",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    0
   ]
  ]
 },
 {
  "id": "lanternhealer",
  "race": "humans",
  "name": "Lichtheilerin",
  "rarity": "Selten",
  "role": "Heilung",
  "banner": "Zunft",
  "hp": 13,
  "atk": 2,
  "initiative": 5,
  "upgradeType": "regen",
  "upgrade": "Heilt sich zu Rundenbeginn um 2/4.",
  "expansion": true,
  "icon": "♕",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    -1
   ]
  ],
  "heal": 3
 },
 {
  "id": "gryphon_archer",
  "race": "humans",
  "name": "Greifenschützin",
  "rarity": "Selten",
  "role": "Fernkampf",
  "banner": "Krone",
  "hp": 10,
  "atk": 6,
  "initiative": 7,
  "upgradeType": "mark",
  "upgrade": "Getroffene Ziele erleiden danach +1/+2 Schaden.",
  "expansion": true,
  "icon": "♖",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    0
   ]
  ]
 },
 {
  "id": "oathbearer",
  "race": "humans",
  "name": "Eidwächterin",
  "rarity": "Episch",
  "role": "Schutz",
  "banner": "Eisen",
  "hp": 18,
  "atk": 5,
  "initiative": 3,
  "upgradeType": "aura",
  "upgrade": "Hintere Reihe erhält zu Beginn 1/2 Schild.",
  "expansion": true,
  "icon": "♗",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    -1
   ]
  ]
 },
 {
  "id": "dawnmarshal",
  "race": "humans",
  "name": "Morgenmarschallin",
  "rarity": "Legendär",
  "role": "Unterstützung",
  "banner": "Krone",
  "hp": 18,
  "atk": 5,
  "initiative": 5,
  "upgradeType": "rally",
  "upgrade": "Benachbarte Verbündete beginnen mit +1/+2 Angriff.",
  "expansion": true,
  "icon": "♘",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    -1
   ]
  ]
 },
 {
  "id": "briar_scout",
  "race": "elves",
  "name": "Rankenspäherin",
  "rarity": "Gewöhnlich",
  "role": "Fernkampf",
  "banner": "Wald",
  "hp": 12,
  "atk": 4,
  "initiative": 7,
  "upgradeType": "snipe",
  "upgrade": "Umgeht Wache beim ersten/bei jedem 3. Angriff.",
  "expansion": true,
  "icon": "♙",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    0
   ]
  ]
 },
 {
  "id": "moonblade",
  "race": "elves",
  "name": "Mondsichel",
  "rarity": "Selten",
  "role": "Nahkampf",
  "banner": "Mond",
  "hp": 13,
  "atk": 6,
  "initiative": 6,
  "upgradeType": "dodge",
  "upgrade": "Weicht dem ersten/den ersten zwei Treffern aus.",
  "expansion": true,
  "icon": "♚",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    0
   ]
  ]
 },
 {
  "id": "streamkeeper",
  "race": "elves",
  "name": "Bachhüterin",
  "rarity": "Selten",
  "role": "Heilung",
  "banner": "Quelle",
  "hp": 12,
  "atk": 2,
  "initiative": 4,
  "upgradeType": "aura",
  "upgrade": "Hintere Reihe erhält zu Beginn 1/2 Schild.",
  "expansion": true,
  "icon": "♛",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    -1
   ]
  ],
  "heal": 4
 },
 {
  "id": "rootweaver",
  "race": "elves",
  "name": "Rankenweber",
  "rarity": "Episch",
  "role": "Magie",
  "banner": "Quelle",
  "hp": 13,
  "atk": 6,
  "initiative": 3,
  "upgradeType": "bind",
  "upgrade": "Senkt den Angriff des Ziels für eine Runde um 1/2.",
  "expansion": true,
  "icon": "♜",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    -1
   ]
  ]
 },
 {
  "id": "ancientheart",
  "race": "elves",
  "name": "Uraltes Herz",
  "rarity": "Legendär",
  "role": "Schutz",
  "banner": "Wald",
  "hp": 21,
  "atk": 4,
  "initiative": 2,
  "upgradeType": "regen",
  "upgrade": "Heilt sich zu Rundenbeginn um 2/4.",
  "expansion": true,
  "icon": "♝",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    -1
   ]
  ]
 },
 {
  "id": "axe_scout",
  "race": "orcs",
  "name": "Axtläufer",
  "rarity": "Gewöhnlich",
  "role": "Nahkampf",
  "banner": "Horde",
  "hp": 13,
  "atk": 5,
  "initiative": 6,
  "upgradeType": "charge",
  "upgrade": "Der erste Angriff verursacht +3/+6 Schaden.",
  "expansion": true,
  "icon": "♞",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    0
   ]
  ]
 },
 {
  "id": "emberhealer",
  "race": "orcs",
  "name": "Glutheilerin",
  "rarity": "Selten",
  "role": "Heilung",
  "banner": "Blut",
  "hp": 14,
  "atk": 2,
  "initiative": 4,
  "upgradeType": "regen",
  "upgrade": "Heilt sich zu Rundenbeginn um 2/4.",
  "expansion": true,
  "icon": "♟",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    -1
   ]
  ],
  "heal": 4
 },
 {
  "id": "stormbanner",
  "race": "orcs",
  "name": "Sturmbanner",
  "rarity": "Selten",
  "role": "Unterstützung",
  "banner": "Sturm",
  "hp": 15,
  "atk": 3,
  "initiative": 5,
  "upgradeType": "ward",
  "upgrade": "Erhält nach jedem Zauberstoß 2/4 Schild.",
  "expansion": true,
  "icon": "♠",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    -1
   ]
  ]
 },
 {
  "id": "boar_berserker",
  "race": "orcs",
  "name": "Eberberserker",
  "rarity": "Episch",
  "role": "Nahkampf",
  "banner": "Blut",
  "hp": 16,
  "atk": 7,
  "initiative": 4,
  "upgradeType": "cleave",
  "upgrade": "Trifft ein weiteres Ziel für 2/4.",
  "expansion": true,
  "icon": "♡",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    0
   ]
  ]
 },
 {
  "id": "stormmatriarch",
  "race": "orcs",
  "name": "Sturmmatriarchin",
  "rarity": "Legendär",
  "role": "Magie",
  "banner": "Sturm",
  "hp": 14,
  "atk": 6,
  "initiative": 4,
  "upgradeType": "chain",
  "upgrade": "Zauberstoß trifft ein weiteres Ziel für 2/4.",
  "expansion": true,
  "icon": "♢",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    -1
   ]
  ]
 },
 {
  "id": "lanternshade",
  "race": "undead",
  "name": "Laternengeist",
  "rarity": "Gewöhnlich",
  "role": "Magie",
  "banner": "Seele",
  "hp": 10,
  "atk": 5,
  "initiative": 6,
  "upgradeType": "curse",
  "upgrade": "Senkt den Angriff des Ziels für eine Runde um 1/2.",
  "expansion": true,
  "icon": "♣",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    -1
   ]
  ]
 },
 {
  "id": "grave_sentinel",
  "race": "undead",
  "name": "Gruftwache",
  "rarity": "Selten",
  "role": "Schutz",
  "banner": "Grab",
  "hp": 20,
  "atk": 3,
  "initiative": 3,
  "upgradeType": "ward",
  "upgrade": "Erhält nach jedem Zauberstoß 2/4 Schild.",
  "expansion": true,
  "icon": "♤",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    -1
   ]
  ]
 },
 {
  "id": "chainspirit",
  "race": "undead",
  "name": "Kettengeist",
  "rarity": "Selten",
  "role": "Magie",
  "banner": "Seele",
  "hp": 12,
  "atk": 5,
  "initiative": 5,
  "upgradeType": "bind",
  "upgrade": "Senkt den Angriff des Ziels für eine Runde um 1/2.",
  "expansion": true,
  "icon": "♥",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    -1
   ]
  ]
 },
 {
  "id": "funeral_knight",
  "race": "undead",
  "name": "Trauerritter",
  "rarity": "Episch",
  "role": "Nahkampf",
  "banner": "Dämmerung",
  "hp": 17,
  "atk": 6,
  "initiative": 4,
  "upgradeType": "revive",
  "upgrade": "Kehrt einmal mit 4/8 Leben zurück.",
  "expansion": true,
  "icon": "♦",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    0
   ]
  ]
 },
 {
  "id": "namekeeper",
  "race": "undead",
  "name": "Namenshüterin",
  "rarity": "Legendär",
  "role": "Heilung",
  "banner": "Dämmerung",
  "hp": 15,
  "atk": 3,
  "initiative": 3,
  "upgradeType": "revive",
  "upgrade": "Kehrt einmal mit 4/8 Leben zurück.",
  "expansion": true,
  "icon": "♧",
  "initiativeGrowth": [
   [
    0,
    0
   ],
   [
    0,
    -1
   ]
  ],
  "heal": 5
 }
]);
for(const id of ['lanternhealer','streamkeeper','emberhealer'])TYPES.find(t=>t.id===id).heal=5;
const PRE_EXPANSION_ATTACK={"duelist": 7, "wolf_rider": 6, "wraith": 6, "gryphon_archer": 6, "bladedancer": 7, "pikewarden": 4, "guard": 3, "boneguard": 3, "thorn": 3, "troll": 3, "grave_sentinel": 3, "alchemist": 3, "lanternhealer": 2, "dryad": 2, "earthspeaker": 2, "emberhealer": 2, "grave_priest": 2, "hunter": 4, "shaman":6, "knight": 6, "shadowcat": 7, "vampire": 7, "banshee": 6, "death_knight": 7, "bloodaxe": 8, "boar_berserker": 7};
for(const [id,atk]of Object.entries({"duelist": 6, "wolf_rider": 5, "wraith": 5, "gryphon_archer": 5, "bladedancer": 6, "pikewarden": 5}))TYPES.find(t=>t.id===id).atk=atk;
// Repeated role comparisons: defensive damage, fragile alchemist and fast damage peaks.
for(const [id,atk]of Object.entries({"guard": 4, "boneguard": 4, "thorn": 4, "troll": 4, "grave_sentinel": 4, "alchemist": 4, "lanternhealer": 3, "dryad": 3, "earthspeaker": 3, "emberhealer": 3, "grave_priest": 3, "hunter": 5, "knight": 5, "shadowcat": 6, "bladedancer": 5, "vampire": 6, "banshee": 5, "death_knight": 6, "bloodaxe": 7, "boar_berserker": 6}))TYPES.find(t=>t.id===id).atk=atk;
TYPES.find(t=>t.id==='alchemist').hp=14;TYPES.find(t=>t.id==='alchemist').heal=5;
const PRE_EXPANSION_HP={alchemist:11,cannoneer:9,crossbow:10,owl_scout:9,shaman:10};
for(const [id,hp]of Object.entries({cannoneer:13,crossbow:13,owl_scout:12}))TYPES.find(t=>t.id===id).hp=hp;
TYPES.find(t=>t.id==='duelist').atk=5;
Object.assign(TYPES.find(t=>t.id==='lanternhealer'),{hp:17,upgradeType:'aura',upgrade:'Hintere Reihe erhält zu Beginn 1/2 Schild.'});
Object.assign(TYPES.find(t=>t.id==='funeral_knight'),{hp:19,upgradeType:'ward',upgrade:'Erhält nach eigenem Treffer 2/4 Schild.'});
Object.assign(TYPES.find(t=>t.id==='shaman'),{hp:13,atk:7});
TYPES.find(t=>t.id==='earthspeaker').heal=5;
TYPES.find(t=>t.id==='vampire').atk=5;
TYPES.forEach(t=>{t.cost=t.rarity==='Episch'?5:t.rarity==='Selten'?4:t.role==='Schutz'?2:3;t.cardText=t.role==='Heilung'?'Genesung: heilt in geraden Kampfrunden den am stärksten verletzten Verbündeten. Sonst greift sie an.':t.role==='Schutz'?'Wache: schützt die hintere Reihe und benachbarte Kämpfer.':t.role==='Magie'?'Zauberstoß: Magie kann zusätzliche Ziele treffen.':t.role==='Fernkampf'?'Fernkampf: erreicht ungeschützte Ziele hinter der Front.':t.role==='Unterstützung'?'Unterstützung: greift normal an und zählt für Banner- und Aufstellungsboni. Zusätzliche Hilfe entsteht durch die gewählte Entwicklung ab Stufe 2.':'Ansturm: hoher Druck in der vorderen Reihe.'});
for(const t of TYPES){const original=t.cardText;if(t.heal)Object.defineProperty(t,'cardText',{get:()=>currentCardBalance()?'Genesung: heilt in geraden Kampfrunden einen verletzten Verbündeten und greift anschließend an. Heilung wächst mit der Kartenstufe.':original,enumerable:true});}
// Final opponents deliberately live outside TYPES: never sold, collected or fused.
for(const t of TYPES)t.targetProfile=CARD_TARGET_PROFILES[t.id];
const CAMPAIGN_BOSSES={
 crown:{name:'Der Splittersouverän',icon:'♛',role:'Schutz',hp:100,atk:13,initiative:2,shield:10,skill:'Kroneneid',effect:'Erhält 4 Schild; seine lebenden Begleiter erhalten je 2 Schild.',lore:'Das steinerne Herz unter dem Hochsitz trägt eine leere Rüstung und die zerbrochene Krone.'},
 rift:{name:'Der namenlose Heerführer',icon:'⚡',role:'Magie',hp:108,atk:14,initiative:6,shield:4,skill:'Risslanzen',effect:'Die ersten zwei lebenden Kämpfer deiner hinteren Reihe erleiden je 3 Schaden. Schild schützt.',lore:'Ein gesichtsloser Sturm führt die Armee durch die letzte Schwelle.'},
 frost:{name:'Der letzte Frostwächter',icon:'❄',role:'Schutz',hp:115,atk:15,initiative:3,shield:8,skill:'Stillstand',effect:'Deine lebende Front verliert bis Rundenende je 2 Angriff.',lore:'Der entfesselte Wächter hält den letzten Morgen gefangen. Brecht ihn, damit die Winterkönigin ihren Zauber lösen kann.'},
 embers:{name:'Der eiserne Richter',icon:'⚒',role:'Nahkampf',hp:130,atk:16,initiative:2,shield:6,skill:'Urteil der Esse',effect:'Deine lebende Front erleidet je 3 Schaden. Schild schützt.',lore:'Ein lebender Amboss aus erpressten Eiden, Ketten und glühendem Eisen.'},
 depths:{name:'Die Flut des Vergessens',icon:'🌊',role:'Magie',hp:140,atk:17,initiative:4,shield:6,skill:'Gestohlene Erinnerung',effect:'Heilt sich um bis zu 6 Leben und den am stärksten verletzten lebenden Begleiter um bis zu 4.',lore:'Die namenlose Flut hat am Meeresgrund eine Gestalt aus geraubten Geschichten angenommen.'},
 eclipse:{name:'Der Ursprung der Nacht',icon:'◉',role:'Magie',hp:150,atk:24,initiative:5,shield:4,skill:'Weltenbruch',effect:'Alle deine lebenden Kämpfer erleiden je 2 Schaden. Schild schützt.',lore:'Jenseits der Sonne hält dieses Wesen Zeit, Schwur und Erinnerung in einer endlosen Wiederholung.'}
};
for(const [campaign,b] of Object.entries(CAMPAIGN_BOSSES))Object.assign(b,{id:'boss_'+campaign,campaign,boss:true,race:'boss',banner:'Endboss',rarity:'Endboss',upgradeType:'none',cardText:b.lore});
function finalBoss(round=S?.round,state=S){return state&&!state.tutorial&&round===journeyLength(state)?campaignBossType(CAMPAIGN_BOSSES[state.campaign],state):null}
function finalBossFormation(units,round){const b=finalBoss(round);if(!b)return units.map(u=>u?{...u,category:u.elite||u.pathElite?'elite':'normal'}:null);const out=units.map(u=>u?{...u,elite:false,category:u.pathElite?'elite':'normal'}:null);out[1]=null;out[4]={id:b.id,lv:1,boss:true,category:'boss'};for(const i of [0,2])if(out[i])out[i].bodyguard=true;return out}
const BOSS_PLANS={left:{name:'Linke Flanke',text:'Erreichbare linke Leibwache zuerst, dann die rechte.'},right:{name:'Rechte Flanke',text:'Erreichbare rechte Leibwache zuerst, dann die linke.'},support:{name:'Unterstützer ausschalten',text:'Fernkämpfer bevorzugen erreichbare Heiler und Magier; Nahkämpfer brechen die Deckung.'}};
function bossPlan(){return BOSS_PLANS[S?.bossPlan]?S.bossPlan:'left'}
function bossGuards(units){return units.filter(u=>u&&u.hp>0&&u.bodyguard)}
function bossTargetPool(units){const live=units.filter(u=>u&&u.hp>0);return bossGuards(live).length?live.filter(u=>!type(u).boss):live}
function bossPlanOrder(a,b){const p=bossPlan();return p==='support'?(['Heilung','Magie'].includes(type(b).role)?1:0)-(['Heilung','Magie'].includes(type(a).role)?1:0)||a.hp-b.hp||a.slot-b.slot:p==='right'?b.slot%3-a.slot%3||a.hp-b.hp:a.slot%3-b.slot%3||a.hp-b.hp}
function setBossPlan(id){if(S?.phase!=='shop'||!finalBoss()||!BOSS_PLANS[id])return;S.bossPlan=id;save();render()}
function bossPlanMarkup(){return `<section class="boss-plan"><b>Angriffsplan · Leibwache zuerst</b><p>Zwei markierte Leibwachen decken den Boss. Solange eine lebt, erreichen direkte Einheitenangriffe, Fokusfeuer und direkte Heldenangriffe den Boss nicht. Durchbruch umgeht diese Deckung; Flächeneffekte können den Boss mit treffen. Wache und Reichweite gelten weiterhin.</p><div class="boss-plan-options">${Object.entries(BOSS_PLANS).map(([id,p])=>`<button class="choice ${bossPlan()===id?'chosen':''}" data-boss-plan="${id}" aria-pressed="${bossPlan()===id}"><b>${p.name}</b><small>${p.text}</small></button>`).join('')}</div><small>Gilt für diesen Bosskampf. Nach dem Fall der Leibwachen wird der Boss erreichbar. Keine zusätzliche Aktion nötig.</small></section>`}

function bossRuleText(b){return `${b.skill}: Vor seinem Angriff in Runde 3, 6, 9 … ${b.effect} Aussetzen verhindert die Fähigkeit in dieser Runde. Nicht rekrutierbar; keine Fusion oder Bannerboni.`}
function bossSkill(actor,own,other,round,logs){
 const b=type(actor);if(!b.boss||actor.hp<=0||round%3!==0||actor.bossSkillRound===round)return false;
 actor.bossSkillRound=round;const live=other.filter(u=>u&&u.hp>0).sort((a,b)=>a.slot-b.slot);
 if(b.campaign==='crown'){actor.shield+=4;own.filter(u=>u&&u!==actor&&u.hp>0).forEach(u=>u.shield+=2)}
 if(b.campaign==='rift')live.filter(u=>u.slot>=3).slice(0,2).forEach(u=>damageUnit(u,3,actor));
 if(b.campaign==='frost')live.filter(u=>u.slot<3).forEach(u=>u.turnAtk=(u.turnAtk||0)-2);
 if(b.campaign==='embers')live.filter(u=>u.slot<3).forEach(u=>damageUnit(u,3,actor));
 if(b.campaign==='depths'){healUnit(actor,6,round,actor);const ally=own.filter(u=>u&&u!==actor&&u.hp>0&&u.hp<u.max).sort((a,b)=>a.hp/a.max-b.hp/b.max||a.slot-b.slot)[0];if(ally)healUnit(ally,4,round,actor)}
 if(b.campaign==='eclipse')live.forEach(u=>damageUnit(u,2,actor));
 logs.push(`${b.name} – ${b.skill}: ${b.effect}`);return true;
}
function applyWorldTheme(){
 const race=S?.race||chosenRace;document.body.dataset.faction=RACES.some(r=>r.id===race)?race:'neutral';
 const c=S?.tutorial?'tutorial':S?.campaign||chosenCampaign;document.body.dataset.arenaTheme=c||'none';
 document.body.style.setProperty('--faction-art',race?`url("assets/backgrounds/${race}.webp?v=73")`:'none');
 document.body.style.setProperty('--faction-art-mobile',race?`url("assets/backgrounds/mobile/${race}.webp?v=73")`:'none');
 document.body.style.setProperty('--arena-art-mobile',c?`url("assets/campaigns/mobile/${c}.webp?v=73")`:'none');
 document.body.style.setProperty('--arena-art',c?`url("assets/campaigns/${c}.webp?v=73")`:'none');
 const scene=S&&!S.tutorial&&CAMPAIGN_SCENERY[S.campaign]?narrativeAct():null;
 document.body.dataset.chapterScenery=scene===null?'none':String(scene);
 document.body.style.setProperty('--chapter-scenery',scene===null?'none':`url("assets/scenery/${S.campaign}.webp?v=83")`);
 document.body.style.setProperty('--chapter-position',scene===null?'center':`${scene%2?'100%':'0%'} ${scene>1?'100%':'0%'}`);
}

const HEROES=[
 {id:'bastion',race:'humans',name:'Alda Eisenherz',icon:'👑',title:'Schildhauptfrau',power:'Schutzwall',powerType:'shield',text:'Alle Verbündeten erhalten 5 Schild.',passive:'Vordere Reihe: +3 Leben',frontHp:3},
 {id:'marshal',race:'humans',name:'Roderic Falk',icon:'🦁',title:'Greifenmarschall',power:'Sturmangriff',powerType:'damage',text:'10 Schaden am stärksten verwundeten Gegner.',passive:'Alle Einheiten: +1 Angriff',allAtk:1},
 {id:'treasurer',race:'humans',name:'Mira Goldhand',icon:'🪙',title:'Schatzmeisterin',power:'Söldnerruf',powerType:'heal',text:'Heilt die Truppe um 4 Leben.',passive:'+2 Gold nach jedem Sieg',goldWin:2},
 {id:'templar',race:'humans',name:'Cassian Licht',icon:'🌞',title:'Sonnentempler',power:'Blendlicht',powerType:'skip',text:'Gegner setzen eine Runde aus.',passive:'Alle Einheiten: +2 Leben',allHp:2},
 {id:'huntress',race:'elves',name:'Lyra Dornpfad',icon:'🐆',title:'Jägerkönigin',power:'Markierter Schuss',powerType:'damage',text:'10 Schaden am gefährlichsten Fernkämpfer.',passive:'Hintere Reihe: +1 Angriff',backAtk:1},
 {id:'oracle',race:'elves',name:'Neris Sternruf',icon:'🌙',title:'Mondorakel',power:'Zeitbruch',powerType:'skip',text:'Gegner setzen eine Runde aus.',passive:'Erste Heilung im Kampf: +4',healBoost:4},
 {id:'warden',race:'elves',name:'Faelar Grünmantel',icon:'🍀',title:'Hainwächter',power:'Lebensquell',powerType:'heal',text:'Heilt die Truppe um 4 Leben.',passive:'Alle Einheiten: +2 Leben',allHp:2},
 {id:'falcon',race:'elves',name:'Syla Windfeder',icon:'🪶',title:'Falknerin',power:'Pfeilhagel',powerType:'damage',text:'10 Schaden am verwundeten Gegner.',passive:'Alle Einheiten: +1 Angriff',allAtk:1},
 {id:'warchief',race:'orcs',name:'Gorak Eisenhauer',icon:'👺',title:'Kriegshäuptling',power:'Blutrausch',powerType:'damage',text:'10 Schaden am verwundeten Gegner.',passive:'Vordere Reihe: +1 Angriff',frontAtk:1},
 {id:'stormcaller',race:'orcs',name:'Mazra Sturmzahn',icon:'🌩️',title:'Sturmruferin',power:'Donnerschlag',powerType:'skip',text:'Gegner setzen eine Runde aus.',passive:'Hintere Reihe: +1 Angriff',backAtk:1},
 {id:'ironhide',race:'orcs',name:'Brakka Eisenhaut',icon:'🦏',title:'Hordenmutter',power:'Eisenhaut',powerType:'shield',text:'Alle Verbündeten erhalten 5 Schild.',passive:'Alle Einheiten: +2 Leben',allHp:2},
 {id:'raider',race:'orcs',name:'Urgash Rotklinge',icon:'🌋',title:'Plünderfürst',power:'Beutezug',powerType:'heal',text:'Heilt die Truppe um 4 Leben.',passive:'+2 Gold nach jedem Sieg',goldWin:2},
 {id:'lich',race:'undead',name:'Morwen Nacht',icon:'💀',title:'Lichkönigin',power:'Seelenfrost',powerType:'skip',text:'Gegner setzen eine Runde aus.',passive:'Alle Einheiten: +1 Angriff',allAtk:1},
 {id:'bloodlord',race:'undead',name:'Varek Blutmond',icon:'🦇',title:'Blutfürst',power:'Lebensraub',powerType:'heal',text:'Heilt die Truppe um 4 Leben.',passive:'Vordere Reihe: +3 Leben',frontHp:3},
 {id:'boneseer',race:'undead',name:'Iskra Knochenblick',icon:'🧿',title:'Knochenseherin',power:'Todesblick',powerType:'damage',text:'10 Schaden am verwundeten Gegner.',passive:'Hintere Reihe: +1 Angriff',backAtk:1},
 {id:'gravekeeper',race:'undead',name:'Orrin Grabwacht',icon:'🪦',title:'Grabeshüter',power:'Knochenwall',powerType:'shield',text:'Alle Verbündeten erhalten 5 Schild.',passive:'Alle Einheiten: +2 Leben',allHp:2}
];
CAMPAIGNS.push(...EXTRA_CAMPAIGNS);
CAMPAIGNS.forEach(c=>c.approaches=CAMPAIGN_APPROACHES[c.id]);
for(const c of EXTRA_CAMPAIGNS){HERO_BEATS[c.id]=c.quotes;EPILOGUES[c.id]=c.epilogues;CAMPAIGN_RACE_STORY[c.id]=Object.fromEntries(RACES.map(r=>[r.id,c.arcs[r.id][0]]))}
HEROES.push(...LEGACY_HEROES);
const $=id=>document.getElementById(id);
const rand=n=>Math.floor(Math.random()*n),pick=a=>a[rand(a.length)];
let S=null,selected=null,timer=null,pendingStep=null,paused=false,audioContext=null,battleToken=0,chosenHero=null,chosenRace=null,chosenCampaign=null,heroChoices=[],heroPower=null;
HEROES.forEach(h=>h.text=heroPowerDescription(h,0));
let settings={sound:true,music:true,musicVolume:.35,effectsVolume:.65,speed:'normal',reducedMotion:false};
try{settings={...settings,...JSON.parse(localStorage.getItem('bannerwacht-settings')||'{}')}}catch{}
let focusKey='';
function clearNextStep(){document.querySelectorAll('.next-step').forEach(el=>el.classList.remove('next-step'))}
function focusNext(el,key,scroll=true,delay=60){clearNextStep();if(!el)return;el.classList.add('next-step');if(key!==focusKey&&scroll){focusKey=key;if(window.matchMedia('(max-width: 760px)').matches)return;setTimeout(()=>el.scrollIntoView({behavior:settings.reducedMotion?'auto':'smooth',block:'start'}),delay)}}
// Keep the route stored in existing saves; new journeys use the campaign's length.
function campaignLength(id=chosenCampaign||'crown'){return ['crown','rift'].includes(id)?12:id==='frost'?16:24}
function modernJourney(state=S){return state==null||(!state.tutorial&&(state.rulesVersion===2||state.journeyLength===24||state.journeyLength===16))}
function journeyLength(state=S){return state?.tutorial?3:state==null?campaignLength():[12,16,24].includes(state.journeyLength)?state.journeyLength:12}
function journeyChapters(length=journeyLength()){return Array.from({length:12},(_,i)=>({story:i+1,approach:false})).flatMap(c=>length===24||(length===16&&(c.story-1)%3===0)?[{...c,approach:true},c]:[c])}
function storyChapter(round=S?.round||1,state=S){return journeyChapters(journeyLength(state))[round-1]?.story||12}
function chapterName(round=S?.round||1){const c=journeyChapters()[round-1];return campaign().chapters[(c?.story||1)-1]+(c?.approach?' · Anmarsch':'')}
function chapterStory(){const c=journeyChapters()[S.round-1];return c?.approach?campaign().approaches?.[c.story-1]||'Die Vorhut sichert den Weg. Prüfe die feindliche Stellung und bereite deine Truppe auf die nächste Begegnung vor.':campaign().story[(c?.story||1)-1]}
function actLength(state=S){return state?.tutorial?3:journeyLength(state)/4}
function bossChapters(state=S){return journeyChapters(journeyLength(state)).flatMap((c,i)=>!c.approach&&[4,8,12].includes(c.story)?[i+1]:[])}
function bossNumber(round=S?.round||1,state=S){return state?.tutorial?0:bossChapters(state).indexOf(round)+1}
function fieldMilestones(state=S){return !modernJourney(state)?[1,4,7,10]:journeyLength(state)===12?[1,3,6,8]:journeyLength(state)===16?[1,4,8,11]:[1,5,11,16]}
function encounterProgress(round=S.round){return (round-1)/(journeyLength()-1)}
function encounterScale(round=S.round){return 1+23*encounterProgress(round)}
function victoryGold(){return modernJourney()&&!bossNumber()?journeyLength()===12?4:journeyLength()===16?3:2:4}
function troopLimitText(){const a=fieldMilestones();return `3 Plätze zu Beginn, 4 ab Kapitel ${a[1]}, 5 ab Kapitel ${a[2]} und 6 ab Kapitel ${a[3]}`}
function refreshOffers(){const rolled=shopRoll();S.offerLocks??=[false,false,false];S.offers=rolled.map((id,i)=>S.offerLocks[i]&&S.offers?.[i]?S.offers[i]:id)}
function toggleOfferLock(i){if(S?.phase!=='shop'||!Number.isInteger(i)||i<0||i>2||!S.offers[i])return;S.offerLocks??=[false,false,false];S.offerLocks[i]=!S.offerLocks[i];save();render()}
function spellValue(id,l=0){const enhanced=modernJourney();return{shield:2+l,shot:(enhanced?7:5)+(enhanced?3:2)*l,rally:2+l,mend:(enhanced?9:7)+(enhanced?4:3)*l,pierce:(enhanced?12:8)+(enhanced?4:3)*l}[id]}
function raceShield(m=0){return (modernJourney()?(formationBalanceActive()?3:2):1)*m}
function heroValue(kind,m=0){return kind==='damage'?(modernJourney()?(testedBalanceActive()?26+10*m:currentCardBalance()?20+7*m:18+6*m):10+3*m):kind==='heal'?(modernJourney()?6+3*m:4+2*m):kind==='shield'?5+2*m:testedBalanceActive()?2:modernJourney()?Math.min(3,2+m):6}
function enemyBaseHealth(u){if(type(u).boss)return type(u).hp;if(!modernJourney())return Math.round((type(u).hp*(1+(u.lv-1)*.85)*(.82+S.round*.07)+(u.elite?5:0))*(u.pathElite?1.12:1)*(1+campaignPressure()*.1));const p=encounterProgress(),t=campaignTier(),scale=.86+p*(.35+.25*(journeyLength()-12)/12)+t*.055*p;const hp=Math.round((type(u).hp*(1+(u.lv-1)*.85)*scale+(u.elite?4:0))*(u.pathElite?1.10:1)),bannerHp=u.duskBannerHp||0;return u.duskHealthScale?Math.round((hp+bannerHp)*u.duskHealthScale)-bannerHp:hp}
const PRE_EXPANSION_CAMPAIGN_HEALTH_GROWTH=Object.freeze({"crown":0.0075,"rift":0.065,"frost":0.055,"embers":0.025,"depths":0.0385,"eclipse":0.0185});
const CAMPAIGN_HEALTH_GROWTH=Object.freeze({"crown": 0.1205, "rift": 0.1155, "frost": 0.087, "embers": 0.0395, "depths": 0.052, "eclipse": 0.022});
const FORMATION_CAMPAIGN_HEALTH_GROWTH={crown:.135,rift:.1155,frost:.0895,embers:.041,depths:.053,eclipse:.023};
const FACTION_CAMPAIGN_HEALTH_GROWTH={"crown":0.135,"rift":0.1165,"frost":0.0895,"embers":0.0445,"depths":0.056,"eclipse":0.025};
const TESTED_CAMPAIGN_HEALTH_GROWTH={"crown":0.135,"rift":0.1165,"frost":0.0925,"embers":0.0475,"depths":0.056,"eclipse":0.022};
function campaignHealthGrowth(id=S?.campaign||chosenCampaign||"crown",state=S){return (testedBalanceActive(state)?TESTED_CAMPAIGN_HEALTH_GROWTH:factionBalanceActive(state)?FACTION_CAMPAIGN_HEALTH_GROWTH:formationBalanceActive(state)?FORMATION_CAMPAIGN_HEALTH_GROWTH:!state||expandedRoster(state)?CAMPAIGN_HEALTH_GROWTH:PRE_EXPANSION_CAMPAIGN_HEALTH_GROWTH)[id]}
function enemyHealth(u){const length=journeyLength(),distance=length-S.round;const relief=testedBalanceActive()&&!u.boss&&length>=16&&distance>=1&&distance<=3?1-.08*(4-distance)/3:1;const hp=Math.round(enemyBaseHealth(u)*relief*(u.campaignHealthFactor||1)),rate=campaignHealthGrowth();if(!modernJourney()||!rate||journeyLength()!==campaignLength(S.campaign))return hp;const factor=Math.pow(1+rate,S.round-1),bonus=u.bannerBonus?.hp??bannerBonus(u,enemiesFor(S.round)).hp;return Math.round((hp+bonus)*factor)-bonus}
function enemyAttack(u){if(type(u).boss)return type(u).atk;if(!modernJourney())return Math.round(type(u).atk*(1+(u.lv-1)*.8)+S.round*.34+(u.elite?2:0)+(u.pathElite?1:0)+campaignPressure());const p=encounterProgress();const atk=Math.round(type(u).atk*(1+(u.lv-1)*.8)+p*2+campaignTier()*p*.45+(u.elite?1:0)+(u.pathElite?1:0));return u.duskAttackScale?Math.round(atk*u.duskAttackScale):atk}
function enemyStartShield(u){if(CAMPAIGN_ENEMIES[u.id]?.mechanic==='thaw')return 8;if(u.id==='enemy_thaw_guard')return 8;if(type(u).boss)return type(u).shield;return (modernJourney()?Math.floor(campaignTier()*encounterProgress()*.6):campaignPressure())+(bossNumber()===1&&u.slot<3?3:!modernJourney()&&u.id==='guard'&&S.round>=4?2:0)+developmentShield(u)}
function fieldLimit(round=S?.round||1,state=S){return 2+fieldMilestones(state).filter(n=>round>=n).length}
function teamCount(){return S.team.filter(Boolean).length}
function nextFieldUnlock(){let limit=fieldLimit();return limit<6?fieldMilestones()[limit-2]:null}
function canStoreCard(){return S.bench.includes(null)||(teamCount()<fieldLimit()&&S.team.includes(null))}
function fresh(){let race=RACES.find(r=>r.id===chosenRace),a=race.starters;return{enemyRosterVersion:6,rulesVersion:2,cardRosterVersion:2,formationBalanceVersion:2,balancePatchVersion:2,journeyLength:campaignLength(chosenCampaign),offerLocks:[false,false,false],runId:newRunId(),round:1,gold:9,life:3,phase:'shop',race:chosenRace,hero:chosenHero,campaign:chosenCampaign||'crown',team:[{id:a[0],lv:1},null,null,null,{id:a[1],lv:1},null],bench:Array(9).fill(null),offers:[],collection:{[a[0]]:1,[a[1]]:1},unlocked:{},boon:null,raceMastery:0,heroMastery:0,armyTraining:0,tacticLevels:{},tacticOwned:{},tacticActive:{},tacticOffers:[],pathChoice:null,eliteWins:0,wins:0}}
function save(){if(S)normalizeTargeting(S);localStorage.setItem(S?.tutorial?'bannerwacht-tutorial':'bannerwacht-v2',JSON.stringify(S))}
// Global save reset: old tabs can only write v1; new campaigns use v2.
function load(){try{localStorage.removeItem('bannerwacht-v1');let x=JSON.parse(localStorage.getItem('bannerwacht-tutorial')||localStorage.getItem('bannerwacht-v2'));if(!x||!Array.isArray(x.team)||!x.race)return null;x.team=[...x.team.slice(0,6),...Array(6).fill(null)].slice(0,6);x.bench=Array.isArray(x.bench)?[...x.bench.slice(0,9),...Array(9).fill(null)].slice(0,9):Array(9).fill(null);while(x.team.filter(Boolean).length>fieldLimit(x.round,x)){let from=x.team.map((u,i)=>u?i:-1).filter(i=>i>=0).pop(),to=x.bench.indexOf(null);if(from==null||to<0)break;x.bench[to]=x.team[from];x.team[from]=null}x.enemyRosterVersion=[1,2,3,4,5,6].includes(x.enemyRosterVersion)?x.enemyRosterVersion:0;x.cardRosterVersion=x.cardRosterVersion===2?2:1;x.formationBalanceVersion=[0,1,2].includes(x.formationBalanceVersion)?x.formationBalanceVersion:0;x.balancePatchVersion=[1,2].includes(x.balancePatchVersion)?x.balancePatchVersion:0;x.collection=x.collection||{};x.raceMastery=x.raceMastery||0;x.heroMastery=x.heroMastery||0;x.armyTraining=Math.min(3,x.armyTraining||0);x.tacticLevels=x.tacticLevels||{};x.tacticOwned=x.tacticOwned||{};x.tacticActive=x.tacticActive||{};x.tacticOffers=Array.isArray(x.tacticOffers)?x.tacticOffers:[];Object.keys(x.tacticOwned).forEach(id=>{if(x.tacticActive[id]===undefined)x.tacticActive[id]=true});delete x.manaCards;delete x.tacticOwned.reserve;delete x.tacticActive.reserve;delete x.tacticLevels.reserve;x.pathChoice=x.pathChoice||null;x.eliteWins=x.eliteWins||0;[...x.team,...x.bench].filter(Boolean).forEach(u=>x.collection[u.id]=Math.max(x.collection[u.id]||0,1));if(x.phase==='battle')x.phase='shop';x.campaign=CAMPAIGNS.some(c=>c.id===x.campaign)?x.campaign:'crown';if(!Number.isInteger(x.round)||x.round<1)x.round=1;if(x.round>journeyLength(x)){x.round=journeyLength(x);x.phase='end'}x.offerLocks=Array.from({length:3},(_,i)=>!!x.offerLocks?.[i]&&!!x.offers?.[i]);x.wins=x.wins||0;x.runId=x.runId||newRunId();migrateUnlocks(x);if(!Array.isArray(x.offers)||x.offers.length!==3)x.offers=shopRoll(x.race,x);else x.offers=x.offers.map(id=>id&&(!TYPES.some(t=>t.id===id)||!canRecruit(type({id}),x))?pick(shopRoll(x.race,x)):id);return normalizeTargeting(x)}catch{return null}}
function currentCardBalance(){return !S||expandedRoster()}
function formationBalanceActive(state=S){return !state||expandedRoster(state)&&[1,2].includes(state.formationBalanceVersion)}
function factionBalanceActive(state=S){return !state||expandedRoster(state)&&state.formationBalanceVersion===2}
// Patch 1 is frozen from the independently confirmed candidate. Missing markers preserve v73 saves.
function testedBalanceActive(state=S){return !state||factionBalanceActive(state)&&[1,2].includes(state.balancePatchVersion)}
function nextBalanceActive(state=S){return !state||factionBalanceActive(state)&&state.balancePatchVersion===2}
const FACTION_CARD_BALANCE={"owl_scout":{"atk":5},"starweaver":{"hp":12},"shadowcat":{"hp":16},"dryad":{"heal":5},"briar_scout":{"atk":5},"stormmatriarch":{"atk":7},"stormbanner":{"atk":4},"boar_berserker":{"hp":19},"bloodaxe":{"hp":17},"skeleton_archer":{"hp":13},"vampire":{"hp":14,"atk":4},"namekeeper":{"heal":5},"knight":{"hp":16},"bannermaid":{"hp":14},"alchemist":{"hp":15},"bladedancer":{"hp":10},"ancientheart":{"atk":5},"banshee":{"hp":14}};
function eliteHp(u){return isElite(type(u))?(currentCardBalance()?2+2*(u.lv||1):4):0}
function eliteAttack(u){return isElite(type(u))?(currentCardBalance()?1+(u.lv||1):2):0}
function developmentShield(u){return type(u).upgradeType==='shield'?(currentCardBalance()?4:2)*upgradeRank(u):0}
function developmentThorns(u){const t=type(u);return t.upgradeType==='thorns'?(t.campaignEnemy&&t.thornsPerRank!==undefined?t.thornsPerRank:currentCardBalance()?3:2)*upgradeRank(u):0}
function unitHealing(u){return Math.round((type(u).heal||0)*(currentCardBalance()?1+((u.lv||1)-1)*.5:1))}
function type(u){if(CAMPAIGN_ENEMIES[u.id])return CAMPAIGN_ENEMIES[u.id];if(EXCLUSIVE_ENEMIES[u.id])return exclusiveEnemyType(u);const boss=Object.values(CAMPAIGN_BOSSES).find(t=>t.id===u.id);if(boss)return campaignBossType(boss);let base=TYPES.find(t=>t.id===u.id);if(!currentCardBalance()&&PRE_EXPANSION_ATTACK[u.id])base={...base,atk:PRE_EXPANSION_ATTACK[u.id]};if(!currentCardBalance()&&u.id==='earthspeaker')base={...base,heal:4};if(!currentCardBalance()&&u.id==='alchemist')base={...base,hp:11,heal:3};if(!currentCardBalance()&&PRE_EXPANSION_HP[u.id])base={...base,hp:PRE_EXPANSION_HP[u.id]};if(formationBalanceActive()&&u.id==='axe_scout')base={...base,hp:15};if(factionBalanceActive()&&FACTION_CARD_BALANCE[u.id])base={...base,...FACTION_CARD_BALANCE[u.id]};if(testedBalanceActive()){const changes={"halberd":{"hp":16,"atk":6},"bloodaxe":{"hp":19},"bone_giant":{"atk":5},"moonblade":{"hp":15},"rootweaver":{"hp":14}};if(changes[u.id])base={...base,...changes[u.id]}}if(testedBalanceActive()){const changes={"alchemist":{"heal":4},"cannoneer":{"hp":10},"fire_spitter":{"hp":11},"shaman":{"hp":12}};if(changes[u.id])base={...base,...changes[u.id]}}return specializedType(u,base)}

// Derived from canonical card data, never from a persisted/cache initiative field.
function initiative(u){if(CAMPAIGN_ENEMIES[u.id])return CAMPAIGN_ENEMIES[u.id].initiative;if(type(u).enemyOnly)return initiative({...u,id:u.enemyBaseId,enemyBaseId:undefined,spec:undefined});if(type(u).boss)return type(u).initiative;const t=TYPES.find(t=>t.id===u.id),rank=Math.min(2,Math.max(0,(u.lv||1)-1)),branch=specializationChoices(u).indexOf(type(u).upgradeType);return Math.max(1,t.initiative+(rank?t.initiativeGrowth[Math.max(0,branch)][rank-1]:0))}
function initiativeBadge(u){return `<span class="initiative-stat" title="Initiative ${initiative(u)}: höher handelt früher" aria-label="Initiative ${initiative(u)}">⌛${initiative(u)}</span>`}
function initiativeDescription(u){if(CAMPAIGN_ENEMIES[u.id])return `Initiative ${initiative(u)} · festes Gegnertempo. Höher handelt früher.`;if(type(u).enemyOnly)return `Initiative ${initiative(u)} · Tempo der ersetzten Einheit. Höher handelt früher.`;if(type(u).boss)return `Initiative ${initiative(u)} · festes Bosstempo. Höher handelt früher.`;const t=TYPES.find(t=>t.id===u.id),delta=initiative(u)-t.initiative;return `Initiative ${initiative(u)} · Basis ${t.initiative}${delta?` · Entwicklung ${delta>0?'+':''}${delta}`:' · unverändertes Tempo'}. Höher handelt früher.`}
function battleActions(allies,foes,round,skipped=new Set()){
 const actions=[];
 for(const [side,units] of [['a',allies],['e',foes]])for(const u of units){
  if(!u||u.hp<=0||(side==='e'&&skipped.has(u)))continue;
  actions.push({u,side,extra:0});
  const rank=upgradeRank(u);
  if(type(u).upgradeType==='haste'&&rank&&(round===1||rank>1&&round%3===0))actions.push({u,side,extra:1});
 }
 const first=round%2?'a':'e';
 return actions.sort((a,b)=>a.extra-b.extra||initiative(b.u)-initiative(a.u)||a.u.slot-b.u.slot||(a.side===b.side?0:a.side===first?-1:1));
}
function hero(){return HEROES.find(h=>h.id===S.hero)||HEROES[0]}
function campaign(){return CAMPAIGNS.find(c=>c.id===(S?.campaign||chosenCampaign))||CAMPAIGNS[0]}
function chapterQuote(){return storyEcho()|| (HERO_BEATS[S.campaign]||HERO_BEATS.crown)[storyChapter()-1]}
function epilogue(){return EPILOGUES[S.campaign]?.[S.race]||'Die Chronik endet, doch das Banner bleibt.'}
function maxhp(u){let h=hero(),roles=S.team.filter(Boolean).map(x=>type(x).role),synergy=S.race==='undead'&&roles.includes('Schutz')&&roles.includes('Magie')?2:0,collection=Object.keys(S.collection||{}).length>=8?2:0;return Math.round(type(u).hp*(1+(u.lv-1)*.85)+(S.boon==='vital'?4:0)+(h.allHp||0)+(u.slot<3?(h.frontHp||0):0)+synergy+collection+eliteHp(u)+bannerBonus(u,S.team).hp)}
// A defensive formation gives its protected rear time to deal useful damage.
function defensiveFormationAttack(u,team=S?.team||[]){return testedBalanceActive()&&u.slot>=3&&team.some(v=>v&&type(v).role==='Unterstützung')&&!team.some(v=>v&&type(v).role==='Heilung')&&team.slice(0,3).filter(v=>v&&['Nahkampf','Schutz'].includes(type(v).role)).length>=2?2:currentCardBalance()&&u.slot>=3&&((team.some(v=>v&&type(v).role==='Schutz')&&(formationBalanceActive()?team.slice(0,3).filter(v=>v&&['Schutz','Unterstützung','Nahkampf'].includes(type(v).role)).length:team.filter(v=>v&&['Schutz','Unterstützung'].includes(type(v).role)).length)>=2&&team.some(v=>v&&type(v).role==='Heilung'))||team.slice(3,6).filter(v=>v&&['Fernkampf','Magie'].includes(type(v).role)).length===3)?3:0}
function attack(u){let h=hero(),roles=S.team.filter(Boolean).map(x=>type(x).role),synergy=S.race==='elves'&&roles.includes('Fernkampf')&&roles.includes('Magie')&&u.slot>=3?1:S.race==='orcs'&&roles.filter(r=>r==='Nahkampf').length>=2?1:0,collection=Object.keys(S.collection||{}).length>=6?1:0;return Math.round(type(u).atk*(1+(u.lv-1)*.8)+(S.boon==='force'?2:0)+(S.armyTraining||0)+(h.allAtk||0)+(u.slot<3?(h.frontAtk||0):(h.backAtk||0))+(S.race==='elves'&&u.slot>=3?S.raceMastery||0:0)+(currentCardBalance()&&S.race==='orcs'&&u.slot<3?S.raceMastery||0:0)+synergy+collection+eliteAttack(u)+bannerBonus(u,S.team).atk+storyBonus(u,'attack')+defensiveFormationAttack(u)+fortressPressure(u))}
// Camp values include persistent formation bonuses; combat stores them once.
function formationAttackBonus(u,team=S.team){return team.reduce((sum,v,i)=>sum+(v&&i!==u.slot&&Math.abs(i%3-u.slot%3)<=1&&type(v).upgradeType==='rally'?upgradeRank(v):0),0)}
function previewAttack(u){return attack(u)+formationAttackBonus(u)}
function upgradeRank(u){return Math.max(0,(u?.lv||1)-1)}
function upgradeLabel(t,lv){if(t.enemyOnly)return exclusiveEnemyRule(t);if(t.boss)return bossRuleText(t);return lv>1?`✦ ${SPECIALIZATION_NAMES[t.upgradeType]} · Stufe ${lv}: ${upgradeEffectAt(t,Math.min(2,lv-1))}`:'Stufe 1: Noch keine Entwicklungsfähigkeit aktiv. Verschmelze zwei gleiche Karten für Stufe 2.'}
function raceTypes(race=S?.race||chosenRace){return TYPES.filter(t=>t.race===race)}
function isElite(t){return t.rarity==='Episch'||t.rarity==='Legendär'}
function expandedRoster(state=S){return !!state&&modernJourney(state)&&!state.tutorial&&state.cardRosterVersion===2}
function legendUnlocked(t){return t.rarity==='Legendär'&&(profile.campaigns[t.race+':embers']||0)>0}
function rewardTypes(){return raceTypes().filter(t=>(!t.expansion||expandedRoster())&&(t.rarity!=='Legendär'||legendUnlocked(t)))}
function recruitCost(t){return t.rarity==='Legendär'?6:t.rarity==='Episch'?(expandedRoster()?5:6):3}
function canRecruit(t,state=S){return !t.boss&&!t.enemyOnly&&(!t.expansion||expandedRoster(state))&&(t.rarity==='Legendär'?legendUnlocked(t):!isElite(t)||!!state?.unlocked?.[t.id])}
function shopRoll(race=S?.race||chosenRace,state=S){let pool=raceTypes(race).filter(t=>canRecruit(t,state));if(expandedRoster(state))pool=pool.flatMap(t=>Array({Gewöhnlich:4,Selten:3,Episch:2,Legendär:1}[t.rarity]).fill(t));return Array.from({length:3},()=>pick(pool).id)}
function migrateUnlocks(state){if(!state.unlocked){state.unlocked={};[...Object.keys(state.collection||{}),...state.team.filter(Boolean).map(u=>u.id),...state.bench.filter(Boolean).map(u=>u.id)].forEach(id=>{if(TYPES.some(t=>t.id===id&&isElite(t)))state.unlocked[id]=true})}return state}
function tacticRoll(){let pool=[...TACTICS];return pool.sort(()=>Math.random()-.5).slice(0,3).map(c=>c.id)}
function activeTacticCount(){return Object.values(S.tacticActive||{}).filter(Boolean).length}
function tacticDeckLimit(){return 5}
function tacticDescription(c,l=S.tacticLevels[c.id]||0){let v=spellValue(c.id,l),values={shield:`Alle erhalten ${v} Schild.`,shot:`${v} Schaden am ungedeckten Gegner mit den wenigsten Leben.`,rally:`Alle erhalten in diesem Zug +${v} Angriff.`,mend:`Heilt den verwundetsten Kämpfer um ${v}.`,pierce:`${v} Schaden, ignoriert Schild und Wache.`};return values[c.id]}
function roleStartShield(){let roles=S.team.filter(Boolean).map(u=>type(u).role);return S.race==='humans'&&roles.includes('Schutz')&&roles.includes('Heilung')?1:0}
function bannerTier(count){return count>=4?4:count>=3?3:count>=2?2:0}
const BANNER_RULES={
 Eisen:{title:'Schildwall',stages:[{shield:2},{shield:2,thorns:1},{shield:4,thorns:2}]},
 Krone:{title:'Königsbann',stages:[{atk:1},{atk:1,ward:1},{atk:2,ward:2}]},
 Zunft:{title:'Schutztränke',stages:[{ward:1},{ward:1,heal:1},{ward:2,heal:2}]},
 Wald:{title:'Jagdzeichen',stages:[{mark:1},{mark:1,thorns:1},{mark:2,thorns:2}]},
 Mond:{title:'Schattentanz',stages:[{dodge:1},{dodge:1,execute:2},{dodge:2,execute:3}]},
 Quelle:{title:'Lebensstrom',stages:[{regen:1},{regen:1,heal:1},{regen:2,heal:2}]},
 Horde:{title:'Überfall',stages:[{charge:2},{charge:2,atk:1},{charge:4,atk:2}]},
 Sturm:{title:'Kettenblitz',stages:[{splash:1},{splash:1,ward:1},{splash:2,ward:2}]},
 Blut:{title:'Blutdurst',stages:[{drain:1},{drain:1,execute:2},{drain:2,execute:4}]},
 Grab:{title:'Knochenpanzer',stages:[{hp:3},{hp:3,thorns:1},{hp:6,thorns:2}]},
 Seele:{title:'Seelenfluch',stages:[{curse:1},{curse:1,ward:1},{curse:2,ward:2}]},
 Dämmerung:{title:'Letztes Aufbäumen',stages:[{guard:1},{guard:1,shield:2},{guard:2,shield:4}]}
};
function bannerEffects(banner,tier){return{atk:0,hp:0,shield:0,regen:0,charge:0,drain:0,thorns:0,ward:0,execute:0,splash:0,heal:0,dodge:0,mark:0,curse:0,guard:0,...(tier>=2?BANNER_RULES[banner]?.stages[Math.min(4,tier)-2]:{}),...(formationBalanceActive()&&banner==='Mond'&&tier>=4?{dodge:1}:{}),...(factionBalanceActive()&&banner==='Krone'&&tier>=4?{ward:2}:{}),...(nextBalanceActive()&&banner==='Eisen'&&tier>=2?{ward:2}:{})}}
function unitBanners(t){if(!t.banner)t=type(t);if(t.boss||t.enemyOnly)return [];return [t.banner,...(DUAL_BANNERS[t.id]||[])]}
function bannerBonus(u,team){let bonus=bannerEffects('',0);for(const banner of unitBanners(u)){let effects=bannerEffects(banner,bannerTier(team.filter(v=>v&&unitBanners(v).includes(banner)).length));for(const key in bonus)bonus[key]+=effects[key]}return bonus}
function bannerDescription(banner,tier){let b=bannerEffects(banner,tier),parts=[];
 if(b.atk)parts.push(`+${b.atk} Angriff`);if(b.hp)parts.push(`+${b.hp} Leben`);if(b.shield)parts.push(`startet mit ${b.shield} Schild`);if(b.regen)parts.push(`heilt sich zu Rundenbeginn um ${b.regen}`);if(b.charge)parts.push(`erster Angriff +${b.charge} Schaden`);if(b.drain)parts.push(`heilt sich nach einem schadenden Treffer um ${b.drain}`);if(b.thorns)parts.push(`wirft nach einem direkten Treffer ${b.thorns} Schaden zurück`);if(b.ward)parts.push(`erhält nach einem nicht ausgewichenen Angriff ${b.ward} Schild`);if(b.execute)parts.push(`+${b.execute} Schaden gegen Ziele unter halbem Leben`);if(b.splash)parts.push(`Angriff trifft ein benachbartes Ziel für ${b.splash} Schaden`);if(b.heal)parts.push(`Heilfähigkeiten heilen +${b.heal}`);if(b.dodge)parts.push(`weicht ${b.dodge} zusätzlichen Angriff${b.dodge===1?'':'en'} pro Kampf aus`);if(b.mark)parts.push(`markiert das Ziel: folgende direkte Treffer +${b.mark} Schaden (höchste Markierung zählt)`);if(b.curse)parts.push(`senkt den Angriff des Ziels bis Rundenende um ${b.curse} (stapelt sich nicht)`);if(b.guard)parts.push(`unter halbem Leben: direkte Treffer verursachen ${b.guard} weniger Schaden`);
 return parts.length?parts.join('; ')+'.':'Noch kein Bannerbonus.'
}
function bannerHitBonus(b,first,wounded){return(first?b.charge:0)+(wounded?b.execute:0)}
function bannerMitigation(u){return u.hp<u.max/2?(u.bannerBonus?.guard||0):0}
function applyBannerHit(actor,target,damage){let b=actor.bannerBonus;if(b.mark)target.mark=Math.max(target.mark||0,b.mark);if(b.curse){let extra=Math.max(0,b.curse-(target.bannerCurse||0));target.turnAtk=(target.turnAtk||0)-extra;target.bannerCurse=Math.max(target.bannerCurse||0,b.curse)}actor.shield+=b.ward;if(b.drain&&damage>0)actor.hp=Math.min(actor.max,actor.hp+b.drain)}
function synergyData(team=S.team){
 let units=team.filter(Boolean).map(type),rules={humans:['Stadtwacht',['Schutz','Heilung'],'Alle Kämpfer starten mit 1 Schild.','+1 🛡'],elves:['Mondpfad',['Fernkampf','Magie'],'Hintere Reihe: +1 Angriff.','hinten +1 ⚔'],orcs:['Horde',['Nahkampf','Nahkampf'],'Alle Kämpfer: +1 Angriff.','+1 ⚔'],undead:['Ahnen',['Schutz','Magie'],'Alle Kämpfer: +2 Leben.','+2 ♥']},[name,required,effect,short]=rules[S.race];
 let pool=units.map(t=>t.role),missing=[];required.forEach(role=>{let i=pool.indexOf(role);if(i<0)missing.push(role);else pool.splice(i,1)});
 let data=[{key:'roles',name:name+' · Rollenbonus',active:!missing.length,count:2-missing.length,tier:missing.length?0:2,effect,short,missing:missing.join(' + '),members:units.filter(t=>required.includes(t.role)).map(t=>t.name)}];
 if(currentCardBalance()){const guards=units.filter(t=>t.role==='Schutz').length,healers=units.filter(t=>t.role==='Heilung').length,supports=units.filter(t=>t.role==='Unterstützung').length,shooters=S.team.slice(3,6).filter(v=>v&&['Fernkampf','Magie'].includes(type(v).role)),frontline=formationBalanceActive()?S.team.slice(0,3).filter(v=>v&&['Schutz','Unterstützung','Nahkampf'].includes(type(v).role)).length:guards+supports,count=Math.max(Math.min(guards?2:1,frontline)+Math.min(1,healers),shooters.length);data.push({key:'defensive',name:(shooters.length===3?'Feuerlinie':'Schutzstaffel')+' · Aufstellung',active:count===3,count,required:3,tier:count===3?3:0,short:'hinten +3 ⚔',effect:formationBalanceActive()?'Eine Schutzkarte, zwei vordere Schutz-/Nahkampf-/Unterstützungskarten insgesamt und Heilung oder drei Fernkampf-/Magiekarten hinten: deine hintere Reihe erhält einmalig +3 Angriff für den Kampf.':'Eine Schutzkarte, eine weitere Schutz-/Unterstützungskarte und Heilung oder drei Fernkampf-/Magiekarten hinten: deine hintere Reihe erhält einmalig +3 Angriff für den Kampf.',missing:formationBalanceActive()?'Schutz + zweite Frontkarte + Heilung oder drei Fernkampf/Magie hinten':'Schutz + Schutz/Unterstützung + Heilung oder drei Fernkampf/Magie hinten',members:units.filter(t=>(formationBalanceActive()?['Schutz','Nahkampf','Unterstützung','Heilung','Fernkampf','Magie']:['Schutz','Heilung','Fernkampf','Magie']).includes(t.role)).map(t=>t.name)})}
 if(testedBalanceActive()){const frontline=team.slice(0,3).filter(v=>v&&['Nahkampf','Schutz'].includes(type(v).role)).length,supports=units.filter(t=>t.role==='Unterstützung').length,healers=units.filter(t=>t.role==='Heilung').length,guards=units.filter(t=>t.role==='Schutz').length,offensive=frontline>=2&&supports>0&&healers===0;data.push({key:'offensive',name:'Sturmstaffel · Aufstellung',active:offensive,count:Math.min(2,frontline)+Math.min(1,supports),required:3,tier:offensive?3:0,short:'hinten +2 ⚔',effect:'Zwei vordere Nahkampf-/Schutzkarten, Unterstützung und keine Heilung: hintere Reihe +2 Angriff. Ersetzt hier Schutzstaffel/Feuerlinie.',missing:'Zwei Frontkämpfer + Unterstützung ohne Heilung',members:units.filter(t=>['Nahkampf','Schutz','Unterstützung'].includes(t.role)).map(t=>t.name)});const fortress=guards>=2&&healers>=2,pressure=['humans','undead'].includes(S.race)?2:1;data.push({key:'fortress',name:'Bollwerk · Aufstellung',active:fortress,count:Math.min(2,guards)+Math.min(2,healers),required:4,tier:fortress?4:0,short:`Schutz +${pressure} ⚔`,effect:`Mindestens zwei Schutzkarten und zwei Heilungen: Schutzkarten erhalten +${pressure} Angriff.`,missing:'Zwei Schutzkarten + zwei Heilungen',members:units.filter(t=>['Schutz','Heilung'].includes(t.role)).map(t=>t.name)});if(offensive){const defensive=data.find(x=>x.key==='defensive');if(defensive)defensive.active=false;}}
 for(let banner of new Set(raceTypes().map(t=>t.banner))){let members=units.filter(t=>unitBanners(t).includes(banner)),tier=bannerTier(members.length),next=tier<2?2:tier<3?3:tier<4?4:null;data.push({key:banner,name:banner,active:tier>0,count:members.length,tier,next,short:`${members.length}/4 · ${BANNER_RULES[banner].title}`,effect:bannerDescription(banner,tier),missing:next?`${next-members.length} weitere Einheit${next-members.length===1?'':'en'} mit Banner ${banner} bis Stufe ${next}`:'Höchste Stufe erreicht',members:members.map(t=>t.name),stages:[2,3,4].map(n=>({n,active:members.length>=n,text:bannerDescription(banner,n)}))})}return data;
}
function synergyText(){return synergyData().filter(x=>x.active).map(x=>`${x.name}: ${x.effect}`).join(' ')||'Noch keine Synergie aktiv.'}
function renderSynergies(){
 $('synergySummary').disabled=S.phase!=='shop';const data=synergyData(),active=data.filter(x=>x.active);
 $('synergySummary').textContent=active.length?active.map(x=>`${x.name} ${x.short}`).join(' · '):'Synergien: noch kein Bonus';$('synergySummary').title=synergyText();
 const card=x=>`<article class="synergy-item ${x.active?'active':''}"><b>${x.active?'✓':'○'} ${x.name} · ${x.count}/${x.stages?4:x.required||2}${x.stages?' · '+BANNER_RULES[x.key].title:''}</b>${x.stages&&x.active?`<small>Aktiv ${x.tier} Einheiten</small>`:''}<p>${x.effect}</p>${x.stages&&x.next?`<small>Nächste Stufe (${x.next}): ${bannerDescription(x.key,x.next)}</small>`:''}<small>${x.stages?x.missing:x.active?'Rollen vollständig':'Fehlt: '+x.missing}</small><details><summary>Einheiten & alle Stufen</summary><p>${x.members.join(', ')||'Noch keine passenden Einheiten'}</p>${(x.stages||[]).map(stage=>`<p>${stage.n} Einheiten: ${stage.text}</p>`).join('')}</details></article>`;
 const relevant=data.filter(x=>x.count>0),inactive=data.filter(x=>!x.count);
 $('synergyDetails').innerHTML=`<details class="journey-bonus-help"><summary>Deine Reiseboni · Ruhm ${S.heroMastery}/2 · Völkerbund ${S.raceMastery}/2</summary><p><b>Heldenfähigkeit:</b> ${heroPowerDescription(hero(),S.heroMastery)}</p><p><b>Volksbonus:</b> ${raceMasteryDescription(S.race,S.raceMastery)}</p><p>Beide gelten bis zum Ende dieser Reise. Erfolge und Kampagnenfreischaltungen bleiben erhalten.</p><button class="btn secondary full" onclick="showPlayHelp('progress')">Reiseboni und Erfolge erklären</button></details>`+'<h3>Deine Synergien</h3><p>Nur aufgestellte Karten zählen. Bei 2, 3 und 4 Einheiten gilt jeweils der höchste Bonus.</p>'+relevant.map(card).join('')+`<details class="inactive-synergies"><summary>Weitere Synergien (${inactive.length})</summary>${inactive.map(card).join('')}</details>`;
}
function recruitHints(t){
 const hints=[],owned=[...S.team,...S.bench].filter(Boolean);
 if(owned.some(u=>u.id===t.id&&u.lv===1))hints.push('✦ Mit vorhandener Stufe 1 verschmelzbar');
 const before=synergyData(),after=synergyData([...S.team,{id:t.id,lv:1}]);
 const gained=after.filter(x=>x.tier>(before.find(b=>b.key===x.key)?.tier||0));
 if(gained.length)hints.push('Beim zusätzlichen Aufstellen: '+gained.map(x=>x.name+' '+x.short).join(' · '));
 const reason=!canStoreCard()?'Kein Platz – erst verschmelzen oder verkaufen':S.gold<recruitCost(t)?'Noch '+(recruitCost(t)-S.gold)+' Gold nötig':'';
 if(reason)hints.push(reason);
 return hints.map(h=>`<small class="recruit-hint">${h}</small>`).join('');
}
function renderCampAdvice(){
 let box=$('campAdvice');if(!box){box=document.createElement('div');box.id='campAdvice';box.setAttribute('aria-live','polite');$('mainAction').insertAdjacentElement('beforebegin',box)}
 box.hidden=S.phase!=='shop';if(box.hidden)return;
 const notes=[],open=fieldLimit()-teamCount();
 if(open>0)notes.push(`${open} freier Truppenplatz${open>1?' – mehr Kämpfer passen aufs Feld.': ' – ein weiterer Kämpfer passt aufs Feld.'}${S.bench.some(Boolean)?' Verstärkung wartet in der Reserve.':''}`);
 if(S.team.some(Boolean)&&!S.team.slice(0,3).some(Boolean))notes.push('Vorne steht niemand. Prüfe deine Aufstellung vor dem Kampf.');
 const plan=mergePlan();
 $('merge').textContent=plan.length?`Alle verschmelzen · ${plan.length} Aufwertung${plan.length===1?'':'en'}`:'Alle verschmelzen';
 document.querySelectorAll('[data-area]').forEach(el=>el.classList.toggle('merge-ready',plan.some(pair=>pair.some(p=>p.where===el.dataset.area&&p.i===+el.dataset.index))));
 box.textContent=notes.join(' ');
}
async function animateAttack(source,target,actor){return cardEffect(actor.id,source,target,'attack')}
function showDamage(target,amount,shield){let label=document.createElement('span');label.className='damage-number';label.textContent=amount?`−${amount}`:`🛡 ${shield}`;target.append(label);setTimeout(()=>label.remove(),650)}
function battleObjective(round){if(finalBoss(round))return `Finale: ${finalBoss(round).name} · Plan: ${BOSS_PLANS[bossPlan()].name}. Erst Leibwache brechen, dann den Boss besiegen.`;if(bossNumber(round))return'Bossziel: Besiege den Wächter.';return'Ziel: Besiege alle Gegner.'}
function heroEvent(){let events={bastion:'Alda lässt die Schildträger enger zusammenrücken.',marshal:'Roderic erkennt eine Lücke in der feindlichen Formation.',treasurer:'Mira zählt die letzten Münzen und verspricht, keine zu verschwenden.',templar:'Cassian entzündet ein kleines Licht gegen die Furcht.',huntress:'Lyra markiert den sichersten Pfad durch das Unterholz.',oracle:'Neris hört im Wind eine Warnung, die noch niemand sonst versteht.',warden:'Faelar legt eine Hand auf den Boden und spürt fremde Schritte.',falcon:'Syla hebt den Blick – irgendwo über den Wolken kreist ein Zeichen.',warchief:'Gorak schlägt einmal auf das Banner. Der Clan antwortet.',stormcaller:'Mazra wartet auf den nächsten Donnerschlag.',ironhide:'Brakka prüft schweigend die Rüstung jedes Kämpfers.',raider:'Urgash verspricht Beute, aber nur für jene, die zurückkehren.',lich:'Morwen hört die Stimmen der Ahnen zwischen den Kapiteln.',bloodlord:'Varek erinnert die Truppe daran, dass jeder Tropfen zählt.',boneseer:'Iskra sieht einen möglichen Tod – und zwingt ihn, den Weg zu ändern.',gravekeeper:'Orrin verschließt das Grab hinter euch, damit nichts folgen kann.'};return events[S.hero]||''}
function buffs(units){let counts={};units.filter(Boolean).forEach(u=>{for(const b of unitBanners(u))counts[b]=(counts[b]||0)+1});return Object.keys(counts).filter(b=>counts[b]>=2)}
function slotUnit(where,index){return S[where][index]}
const ROLE_LABELS={'Schutz':'🛡 Schutz','Nahkampf':'⚔ Nah','Fernkampf':'🏹 Fern','Magie':'✦ Magie','Heilung':'✚ Heilung','Unterstützung':'⚑ Hilfe'};
const ROLE_MARKS={'Schutz':'🛡','Nahkampf':'⚔','Fernkampf':'🏹','Magie':'✦','Heilung':'✚','Unterstützung':'⚑'};
function rarityKey(rarity){return rarity==='Legendär'?'legendary':rarity==='Episch'?'epic':rarity==='Selten'?'rare':'common'}
function startShield(u){let shield=developmentShield(u)+(S.race==='humans'?raceShield(S.raceMastery||0):0)+roleStartShield()+bannerBonus(u,S.team).shield;if(u.slot>=3)shield+=S.team.filter(Boolean).reduce((sum,v)=>sum+(type(v).upgradeType==='aura'?upgradeRank(v):0),0);return shield+storyBonus(u,'shield')}
function combatAttack(u,side){let base=side==='a'?attack(u):enemyAttack(u)+(u.bannerBonus?.atk||0);return Math.max(0,Math.round((base+(u.turnAtk||0)+(u.formationAtk||0)+(u.weatherAtk||0))*exclusiveEnemyAttackFactor(u)))}
function hasRange(u){return ['Fernkampf','Magie','Heilung'].includes(type(u).role)}
function chooseTarget(actor,enemy,isEnemy=false){return resolveUnitTarget(actor,enemy,isEnemy)}
function rangeBadge(u){return `<span class="range-tag" title="${hasRange(u)?'Weite Reichweite: erreicht ungeschützte Ziele in der hinteren Reihe. Wachen schützen weiterhin.':'Kurze Reichweite: greift zuerst die vordere Reihe an; erreicht hinten erst ohne gegnerische Front.'}" aria-label="${hasRange(u)?'Weite':'Kurze'} Reichweite">${hasRange(u)?'🏹':'⚔'}</span>`}
function syncShield(el,value){el.textContent=value>0?'🛡'+value:'';el.hidden=!(value>0)}
function renderCampaignProgress(){let bar=$('campaignProgress');if(!bar){bar=document.createElement('div');bar.id='campaignProgress';bar.className='campaign-track';bar.setAttribute('role','progressbar');document.querySelector('.wrap').prepend(bar)}bar.hidden=!S;if(!S)return;const total=journeyLength(),complete=S.phase==='end'&&!S.defeated&&S.life>0,chapter=Math.min(total,S.round);bar.style.gridTemplateColumns=`repeat(${total},1fr)`;bar.setAttribute('aria-label','Kampagnenfortschritt');bar.setAttribute('aria-valuemin','0');bar.setAttribute('aria-valuemax',String(total));bar.setAttribute('aria-valuenow',complete?total:chapter-1);bar.setAttribute('aria-valuetext',complete?'Kampagne abgeschlossen':`Kapitel ${chapter} von ${total}`);bar.innerHTML=Array.from({length:total},(_,i)=>`<span class="campaign-node ${complete||i<chapter-1?'done':i===chapter-1?'now':''} ${bossNumber(i+1)?'boss':''}"></span>`).join('')}

function cardLevelBadge(u){const lv=Math.max(1,Math.floor(Number(u.lv)||1)),total=Math.max(3,lv),rail=Array.from({length:total},(_,i)=>`<i class="level-crystal ${i<lv?'lit':''}"></i>`).join('');return `<span class="level-crystals ${lv>=3?'tier-high':''}" role="img" aria-label="Stufe ${lv}" title="Stufe ${lv}: ${lv} leuchtende Seitenkristalle"><span class="crystal-rail left" aria-hidden="true">${rail}</span></span>`}
function unitReadout(u,side=null){let t=type(u),atk=side?combatAttack(u,side):previewAttack(u),hp=side?u.hp:maxhp(u),shield=side?u.shield:startShield(u);return `<span class="unit-kind" title="${t.role}">${ROLE_LABELS[t.role]}</span><span class="unit-numbers">${initiativeBadge(u)}<span class="attack-stat" title="Grundschaden; Spezialeffekte kommen hinzu">⚔${atk}</span><span class="health-stat" title="${side?'Aktuelles Leben':'Maximales Leben'}">♥${hp}</span><span class="shield-mark" ${shield>0?'':'hidden'} title="${side?'Aktueller Schild':'Schild zu Kampfbeginn'}">${shield>0?'🛡'+shield:''}</span></span>`}
function slotCard(u,where,i){
 if(!u){let capped=where==='team'&&teamCount()>=fieldLimit();return `<button class="slot card-slot ${capped?'capacity-locked':''}" data-area="${where}" data-index="${i}" aria-label="${where==='bench'?'Reserve':'Feld'} Platz ${i+1}, ${capped?'durch Truppenlimit gesperrt':'frei'}"><span class="muted">${capped?`🔒 Limit ${fieldLimit()}${nextFieldUnlock()?` · +1 ab Kapitel ${nextFieldUnlock()}`:''}`:'Kartenplatz frei'}</span></button>`}
 u.slot=i;let t=type(u),raceName=RACES.find(r=>r.id===t.race)?.name||t.race;
 return `<button data-level="${u.lv}" data-race="${t.race}" data-role="${t.role}" data-rarity="${t.rarity}" title="${raceName} · ${t.role} · ${t.rarity} · Stufe ${u.lv}" class="slot unit-card filled ${t.rarity.toLowerCase()} rarity-${rarityKey(t.rarity)} ${u.lv>1?'upgraded':''} ${where==='team'?(i<3?'front-unit':'back-unit'):''}" data-area="${where}" data-index="${i}" aria-label="${t.name}, ${raceName}, Rolle ${t.role}, ${hasRange(u)?'Weite':'Kurze'} Reichweite, ${t.rarity}, Stufe ${u.lv}, ${where==='bench'?'Reserve':i<3?'Vorne':'Hinten'}, Bahn ${i%3+1}">${cardLevelBadge(u)}<div class="unit"><span class="card-rarity"> ${t.rarity}</span><span class="symbol">${unitArt(t)}</span><span class="name">${t.name}</span>${u.spec?`<span class="spec-label">${SPECIALIZATION_NAMES[u.spec]}</span>`:''}<span class="role">${t.role} · ${unitBanners(t).join(' + ')}</span><small class="card-rule">${t.cardText}<span class="upgrade-rule">${upgradeLabel(t,u.lv)}</span></small>${unitReadout(u)}</div></button>`
}
function render(){applyWorldTheme();let active=!!S;$('intro').classList.toggle('hide',active);$('game').classList.toggle('hide',!active);$('stage').textContent=active?`Kapitel ${S.round}/${journeyLength()}`:'Kapitel –';$('gold').textContent=`◈ ${active?S.gold:0}`;$('hearts').textContent=`♥ ${active?S.life:3}`;renderCampaignProgress();if(!active)return;const recruitmentHeading=$('shop').querySelector('.eyebrow');if(recruitmentHeading)recruitmentHeading.textContent=expandedRoster()?'Rekrutierung · Basis 3 Gold · Episch 5 · Legendär 6':'Rekrutierung · Basis 3 Gold · Elite 6';
 let shop=S.phase==='shop',reward=S.phase==='reward',end=S.phase==='end';
 updateMobilePhase();
 $('reward').classList.toggle('hide',!reward);
 if(!reward)$('reward').replaceChildren();
 $('phase').textContent=shop?'Lager':reward?'Siegesbeute':end?'Die Reise endet':'Kampf';
 $('heading').textContent=shop?chapterName():reward?'Wähle eine Belohnung':(S.life<=0||S.defeated)?'Deine Truppe wurde besiegt':campaign().name+' abgeschlossen';
 $('round').innerHTML=shop?`<details class="troop-limit"><summary>${teamCount()}/${fieldLimit()} auf dem Feld<small>${nextFieldUnlock()?`+1 Platz ab Kapitel ${nextFieldUnlock()}`:'Alle 6 Plätze freigeschaltet'}</small></summary><p>Das Limit steigt automatisch mit deinem Kampagnenfortschritt: ${troopLimitText()}. Gewinne Kämpfe und wähle deine Siegesbeute, um das nächste Kapitel zu erreichen. Reservekarten zählen nicht zum Limit.</p></details>`:'';
 $('message').innerHTML=shop?`<span class="story-beat">${chapterStory()}</span><span class="hero-line"><i>${heroArt(hero())}</i><span><b>${hero().name}</b> „${chapterQuote()}“</span></span><span class="army-limit">⚑ Truppenlimit ${fieldLimit()}/6${nextFieldUnlock()?` · nächster Platz ab Kapitel ${nextFieldUnlock()}`:' · vollständig ausgebaut'}</span>Bannerbonus: ${buffs(S.team).join(', ')||'noch keiner'}. <span class="chronicle-bonuses">Völkerbund ${S.raceMastery}/2 · Heldenruhm ${S.heroMastery}/2 · Zauber ${Object.values(S.tacticLevels).reduce((a,b)=>a+b,0)}</span>`:reward?'Wähle eine Belohnung für deine weitere Kampagne':end&&S.life>0&&!S.defeated?`<span class="epilogue">${epilogue()}</span><span class="chronicle-result">${S.wins} Siege · ${S.eliteWins} gewagte Pfade · ${Object.keys(S.collection).length}/${raceTypes().length} Karten entdeckt</span>`:`Besiegte Begegnungen: ${S.wins}.`;
 let activeHero=hero(),activeRace=RACES.find(r=>r.id===S.race);$('heroBadge').innerHTML=`<div class="hero-badge-head"><span>${heroArt(activeHero)}</span><div><b>${activeHero.name}</b><small>${activeRace.icon} ${activeRace.name}</small><small>${activeHero.passive}</small></div></div>`;$('progressPanel').innerHTML=`<details class="progress-fold"><summary>Chronik & Fortschritt</summary><div class="progress-grid"><span>Kapitel <b>${S.round}/${journeyLength()}</b></span><span>Siege <b>${S.wins}</b></span><span>Karten <b>${Object.keys(S.collection).length}/${raceTypes().length}</b></span><span>Zauber <b>${Object.keys(S.tacticOwned).length}</b></span><span>Mana <b>bis 5/Runde</b></span><span>Synergie <b>${buffs(S.team).length}</b></span></div></details>`;if(shop) $('message').insertAdjacentHTML('beforeend',`<span class="synergy-line">${synergyText()}</span>`);if(shop&&S.round===1)$('message').insertAdjacentHTML('afterbegin',`<span class="race-story"><b>${activeRace.name}:</b> ${RACE_STORY[S.race]} ${CAMPAIGN_RACE_STORY[S.campaign][S.race]}</span>`);
 $('frontBoard').innerHTML=S.team.slice(0,3).map((u,i)=>slotCard(u,'team',i)).join('');
 $('backBoard').innerHTML=S.team.slice(3).map((u,i)=>slotCard(u,'team',i+3)).join('');
 $('benchBoard').innerHTML=S.bench.map((u,i)=>slotCard(u,'bench',i)).join('');
 const reserveRows=Array.from({length:Math.ceil(S.bench.length/3)},(_,r)=>S.bench.slice(r*3,r*3+3).some(Boolean));
 $('benchBoard').style.setProperty('--reserve-row-sizes',reserveRows.map(full=>`minmax(${full?90:44}px,auto)`).join(' '));
 [...$('benchBoard').children].forEach((slot,i)=>slot.classList.toggle('reserve-row-empty',!reserveRows[Math.floor(i/3)]));
 document.querySelectorAll('[data-area]').forEach(b=>b.onclick=()=>selectSlot(b.dataset.area,+b.dataset.index));
 $('shop').classList.toggle('hide',!shop);$('actions').classList.toggle('hide',!shop);$('arena').classList.toggle('hide',S.phase!=='battle');$('battlelog').classList.toggle('hide',S.phase!=='battle');$('battleViewToggle').classList.toggle('hide',S.phase!=='battle');$('game').classList.toggle('battle-mode',S.phase==='battle');$('game').classList.toggle('battle-pop-open',S.phase==='battle');
 $('enemyIntel').classList.toggle('hide',!shop);$('journeyChoice').classList.toggle('hide',!shop);
 if(shop&&bossNumber()>0&&!S.pathChoice)S.pathChoice='boss';
 $('mainAction').classList.toggle('hide',reward);$('mainAction').classList.toggle('combat-result',end);$('mainAction').textContent=shop?(S.pathChoice==='risk'?'Elitekampf beginnen':S.pathChoice==='boss'?'Bosskampf beginnen':'Kampf beginnen'):end?'Neue Reise':'Weiter';$('mainAction').disabled=shop&&(!S.team.some(Boolean)||!S.pathChoice);$('mainAction').onclick=()=>{if(S.phase==='shop')battle();else if(S.phase==='end')beginSetup()};
 $('hint').textContent=shop?'Tippe zwei Karten an, um sie zu tauschen. Markiere eine Karte, um sie zu verkaufen. Deine Bibliothek merkt sich jede entdeckte Karte.':'';
 if(shop){renderJourney();renderIntel()}
 $('offers').innerHTML=S.offers.map((id,i)=>{if(!id)return `<button class="offer sold" disabled><span class="symbol">✓</span><strong>Ausverkauft</strong><small>Neu würfeln, um dieses Angebot zu ersetzen.</small></button>`;let t=type({id});return `<div class="shop-offer ${S.offerLocks?.[i]?'reserved':''}"><button class="offer ${t.rarity.toLowerCase()} rarity-${rarityKey(t.rarity)}" data-race="${t.race}" data-role="${t.role}" data-rarity="${t.rarity}" title="${RACES.find(r=>r.id===t.race)?.name||t.race} · ${t.role} · ${t.rarity}" data-level="1" data-buy="${i}" ${S.gold<recruitCost(t)||!canRecruit(t)||!canStoreCard()?'disabled':''}>${cardLevelBadge({lv:1})}<span class="card-rarity"> ${t.rarity}</span><span class="symbol">${unitArt(t)}</span><strong>${t.name}</strong><small>${t.role} · ${unitBanners(t).join(' + ')}${isElite(t)?' · Elite':''}</small><small>${initiativeBadge({id:t.id,lv:1})} · ♥ ${t.hp+(isElite(t)?4:0)} · ⚔ ${t.atk+(isElite(t)?2:0)}</small>${[...S.team,...S.bench].some(u=>u?.id===t.id&&u.lv===1)?'<small class="fusion-ready">✦ Fusion möglich</small>':''}<span class="badge">Kaufen · ${recruitCost(t)} ◈</span></button><details class="offer-details"><summary>Details</summary><p>${t.cardText}</p><p class="offer-upgrade">${upgradeOverview(t)}</p>${recruitHints(t)}</details><button type="button" class="offer-lock" data-lock-offer="${i}" aria-pressed="${!!S.offerLocks?.[i]}" aria-label="${t.name}: ${S.offerLocks?.[i]?'Reservierung aufheben':'für die nächste Runde reservieren'}">${S.offerLocks?.[i]?'🔒 Reserviert · lösen':'🔓 Reservieren'}</button></div>`}).join('');
 if(!S.tacticOffers.length)S.tacticOffers=tacticRoll();
 $('tacticShop').innerHTML=`<section class="mana-shop tactic-shop" aria-label="Zauber-Shop"><header><span><b>🃏 Zauber-Shop</b><small>${Object.keys(S.tacticOwned).length}/${TACTICS.length} Karten gekauft · ${activeTacticCount()} aktiv</small></span></header><div class="tactic-shop-grid">${TACTICS.filter(c=>S.tacticOffers.includes(c.id)||S.tacticOwned[c.id]).map(c=>{let owned=!!S.tacticOwned[c.id],lv=S.tacticLevels[c.id]||0;return `<div class="tactic-buy"><span class="symbol">${spellArt(c)}</span><b>${c.name}</b><small>Stufe ${lv+1}: ${tacticDescription(c)} · ${c.cost} Mana${owned&&lv<2?`<br>Nächste Stufe: ${tacticDescription(c,lv+1)}`:''}</small><button class="btn secondary" data-tactic-buy="${c.id}" ${owned||S.gold<3?'disabled':''}>${owned?'Gekauft':'Kaufen · 3 ◈'}</button>${owned?`<button class="btn secondary" data-tactic-upgrade="${c.id}" ${lv>=2||S.gold<5?'disabled':''}>${lv>=2?'Max. Stufe':'Aufwerten · 5 ◈'}</button>`:''}</div>`}).join('')}</div><button class="btn secondary full" id="rerollTactics" ${S.gold<2?'disabled':''}>Weitere Zauber zeigen · 2 ◈</button></section>`;
 $('rerollTactics').onclick=()=>{if(S.gold>=2){S.gold-=2;S.tacticOffers=tacticRoll();save();render()}};
 document.querySelectorAll('[data-tactic-buy]').forEach(b=>b.onclick=()=>buyTactic(b.dataset.tacticBuy));document.querySelectorAll('[data-tactic-upgrade]').forEach(b=>b.onclick=()=>upgradeTactic(b.dataset.tacticUpgrade));
 Object.keys(S.tacticOwned).forEach(id=>{let card=document.querySelector(`[data-tactic-buy="${id}"]`)?.parentElement;if(card&&!card.querySelector('[data-tactic-toggle]')){let on=S.tacticActive[id]!==false;card.insertAdjacentHTML('beforeend',`<button class="btn secondary" data-tactic-toggle="${id}">${on?'Im Deck · entfernen':'Ins Deck aufnehmen'}</button>`);card.querySelector('[data-tactic-toggle]').onclick=()=>toggleTactic(id)}});
 document.querySelectorAll('[data-lock-offer]').forEach(b=>b.onclick=()=>toggleOfferLock(+b.dataset.lockOffer));document.querySelectorAll('[data-buy]').forEach(b=>b.onclick=()=>buy(+b.dataset.buy));$('reroll').disabled=S.gold<2||S.offers.every((id,i)=>id&&S.offerLocks?.[i]);$('merge').disabled=!mergePair();if(reward){try{renderRewards()}catch(e){renderRewardFallback(e)}if(!$('reward').innerHTML.trim())renderRewardFallback();$('reward').classList.remove('hide')}
 $('sell').disabled=!selected||!slotUnit(selected.where,selected.i);$('sell').textContent=selected&&slotUnit(selected.where,selected.i)?`Karte verkaufen · ${sellValue(slotUnit(selected.where,selected.i))} ◈`:'Karte verkaufen';renderLibrary();renderSynergies();renderCampAdvice();renderProgression();renderDevelopment();renderStoryDecision();if(typeof showCardDetails==='function')renderSelectedCard();if(typeof learningHints==="function")learningHints();renderTargetOrders();
 if(shop){if(currentStoryDecision())focusNext($('journeyChoice'),'story-choice-'+S.round);else if(!bossNumber()&&!S.pathChoice)focusNext($('journeyChoice'),`path-${S.round}`);else focusNext($('mainAction'),`fight-${S.round}`)}else if(reward)focusNext($('reward'),`reward-${S.round}`);else if(end)focusNext($('mainAction'),`end-${S.round}`);else clearNextStep();
 if(typeof renderTutorial==='function')renderTutorial();
}
function selectSlot(where,i){if(S.phase!=='shop')return;let next={where,i};if(!selected){selected=next}else if(selected.where===where&&selected.i===i){selected=null}else{let a=selected,b=next,copy=[...S.team];if(a.where==='team')copy[a.i]=S[b.where][b.i];if(b.where==='team')copy[b.i]=S[a.where][a.i];if(copy.filter(Boolean).length>fieldLimit()){selected=null;render();$('hint').textContent=`Dein Truppenlimit liegt derzeit bei ${fieldLimit()}. Der nächste Platz wird ab Kapitel ${nextFieldUnlock()} freigeschaltet.`;return}[S[a.where][a.i],S[b.where][b.i]]=[S[b.where][b.i],S[a.where][a.i]];selected=null;save()}document.querySelectorAll('[data-area]').forEach(el=>el.classList.toggle('pick',!!selected&&el.dataset.area===selected.where&&+el.dataset.index===selected.i));$('sell').disabled=!selected||!slotUnit(selected.where,selected.i);$('sell').textContent=selected&&slotUnit(selected.where,selected.i)?`Karte verkaufen · ${sellValue(slotUnit(selected.where,selected.i))} ◈`:'Karte verkaufen';if(!selected)render();renderSelectedCard()}
function buy(i){let id=S.offers[i],t=TYPES.find(t=>t.id===id);if(S.phase!=='shop'||!t||!canRecruit(t)||S.gold<recruitCost(t))return;let place=S.bench.indexOf(null),where='bench';if(place<0&&teamCount()<fieldLimit()){place=S.team.indexOf(null);where='team'}if(place<0)return;S.gold-=recruitCost(t);S[where][place]={id,lv:1};S.collection[id]=(S.collection[id]||0)+1;S.offers[i]=null;if(S.offerLocks)S.offerLocks[i]=false;save();render()}
function buyTactic(id){let cost=3;if(!TACTICS.some(c=>c.id===id))return;if(S.phase!=='shop'||S.gold<cost||S.tacticOwned[id])return;S.gold-=cost;S.tacticOwned[id]=1;S.tacticActive[id]=activeTacticCount()<tacticDeckLimit();save();render()}
function upgradeTactic(id){if(S.phase!=='shop'||S.gold<5||!S.tacticOwned[id]||(S.tacticLevels[id]||0)>=2)return;S.gold-=5;S.tacticLevels[id]=(S.tacticLevels[id]||0)+1;save();render()}
function toggleTactic(id){if(S.phase!=='shop'||!S.tacticOwned[id])return;let next=S.tacticActive[id]===false;if(next&&activeTacticCount()>=tacticDeckLimit()){$('hint').textContent=`Dein Zauberdeck ist auf ${tacticDeckLimit()} Karten begrenzt. Entferne zuerst eine Karte.`;return}S.tacticActive[id]=next;save();render()}
function sellValue(u){return u?Math.max(1,Math.round(2*Math.pow(2,u.lv-1))):0}
function sellSelected(){if(S.phase!=='shop'||!selected)return;let u=slotUnit(selected.where,selected.i);if(!u)return;S.gold+=sellValue(u);S[selected.where][selected.i]=null;selected=null;save();render()}
function renderLibrary(){let cards=raceTypes().map(raw=>{const t=type({id:raw.id,lv:1});let n=S.collection[t.id]||0,open=canRecruit(t),rarity=t.rarity.toLowerCase();return `<article class="library-card ${open?'owned':'locked'} ${rarity} rarity-${rarityKey(t.rarity)}" data-race="${t.race}" data-role="${t.role}" data-rarity="${t.rarity}"><div class="card-art">${unitArt(t)}</div><div class="card-rarity"> ${t.rarity}${isElite(t)?' · Elite':''}</div><b>${t.name}</b><small><span class="role-mark" aria-hidden="true">${ROLE_MARKS[t.role]}</span>${t.role} · ${unitBanners(t).join(' + ')}</small><div class="library-upgrade">${t.cardText}<br>✦ ${upgradeOverview(t)}${open?'':t.expansion&&!expandedRoster()?'<br>🔒 Ab einer neuen Reise verfügbar':t.rarity==='Legendär'?'<br>🔒 Erfolg: vierte Kampagne mit diesem Volk gewinnen':'<br>🔒 Durch Siegesbeute freischaltbar'}</div><div class="card-stats">${initiativeBadge({id:t.id,lv:1})} · ♥ ${t.hp+(isElite(t)?4:0)} · ⚔ ${t.atk+(isElite(t)?2:0)}</div><span class="copies">${open?`${n}× erhalten · Shop ${recruitCost(t)} ◈`:(t.expansion&&!expandedRoster()?'Neue Karte: starte eine neue Reise':isElite(t)?'Stufe I: +4 ♥ · +2 ⚔ Elitebonus':'Noch nicht verfügbar')}</span></article>`}).join('');$('libraryGrid').innerHTML=cards;$('libraryCount').textContent=`${raceTypes().filter(t=>canRecruit(t)).length}/${raceTypes().length} verfügbar`}
function mergePair(state=S){let all=[...state.team.map((u,i)=>({u,where:'team',i})),...state.bench.map((u,i)=>({u,where:'bench',i}))];for(let i=0;i<all.length;i++)for(let j=i+1;j<all.length;j++)if(all[i].u&&all[j].u&&all[i].u.id===all[j].u.id&&all[i].u.lv===all[j].u.lv&&all[i].u.lv<3)return[all[i],all[j]];return null}
function mergePlan(){const state={team:S.team.map(u=>u?{...u}:null),bench:S.bench.map(u=>u?{...u}:null)},plan=[];let pair;while((pair=mergePair(state))){plan.push(pair.map(({where,i})=>({where,i})));const[a,b]=pair;state[a.where][a.i].lv++;state[b.where][b.i]=null}return plan}
function merge(){if(!S||S.phase!=='shop')return;const plan=mergePlan();if(!plan.length)return;for(const[a,b]of plan){S[a.where][a.i].lv++;S[a.where][a.i].spec??=S[b.where][b.i].spec;S[b.where][b.i]=null}selected=null;save();render();$('hint').textContent=`${plan.length} Aufwertung${plan.length===1?'':'en'} abgeschlossen. Alle passenden Karten wurden verschmolzen.`;if(needsSpecialization().length)showSpecializations()}
function roll(){refreshOffers();save();render()}
// Rotate role-compatible new opponents without increasing encounter sizes.
function expansionEnemyPlan(plan,round){
 if(!expandedRoster()||round<5||round%2===0||bossNumber(round))return plan;
 const out=[...plan],slot=[0,4,1,3,2,5][Math.floor((round-5)/2)%6],base=TYPES.find(t=>t.id===out[slot]);
 if(!base)return out;
 const pool=TYPES.filter(t=>t.expansion&&t.rarity!=='Legendär'&&t.race===base.race&&t.role===base.role);
 if(pool.length)out[slot]=pool[Math.floor(round/2)%pool.length].id;
 return out;
}
function enemiesFor(round){
 if(campaignCatalogueActive())return campaignCatalogueEnemies(round);
 if(S?.tutorial){const plans=[['brute',null,null,null,null,null],['brute',null,null,null,'hunter',null],['boneguard','brute',null,null,'hunter',null]];return plans[Math.min(2,round-1)].map(id=>id?{id,lv:1}:null)}
 const plans={
  1:['brute',null,null,null,'hunter',null],2:['thorn','bladedancer',null,null,'druid','archer'],3:['boneguard',null,'boneguard','wraith','necromancer','wraith'],
  4:['knight','guard','knight','crossbow','cleric','crossbow'],5:['troll','brute','brute','shaman','hunter','shaman'],6:['thorn','bladedancer','thorn','archer','druid','archer'],
  7:['boneguard','vampire','boneguard','wraith','necromancer','wraith'],8:['guard','knight','guard','crossbow','cleric','crossbow'],
  9:['troll','vampire','thorn','shaman','necromancer','druid'],10:['knight','brute','bladedancer','crossbow','shaman','archer'],
  11:['boneguard','troll','guard','wraith','hunter','cleric'],12:['vampire','knight','troll','necromancer','shaman','druid']};
 if(modernJourney()){
  const index=storyChapter(round),risky=S.pathChoice==='risk',scaled=encounterScale(round);
  let plan=expansionEnemyPlan(campaignEnemyPlan(plans[index],round),round),cap=scaled<3?2:scaled<5?3:Math.min(6,fieldLimit(round)+(bossNumber(round)?1:0));
  // Keep front and rear represented when limiting a six-slot formation.
  const order=[0,4,1,3,2,5],slots=order.filter(i=>plan[i]).slice(0,cap);
  return exclusiveEnemyFormation(duskEncounter(finalBossFormation(plan.map((id,i)=>{if(!id||!slots.includes(i))return null;const rank=slots.indexOf(i),upgrades=Math.max(0,Math.floor((scaled-5)/2)),thirds=Math.max(0,Math.floor((scaled-16)/2));return{id,lv:thirds>rank?3:upgrades>rank?2:1,elite:!!bossNumber(round)&&rank===0,pathElite:risky}}),round),round),round)
 }
 let hard=campaignTier()>0?1:0,risky=S?.pathChoice==='risk',enemyCap=round%4===0?Math.min(6,fieldLimit(round)+1):fieldLimit(round),seen=0;return finalBossFormation(campaignEnemyPlan(plans[round],round).map((id,i)=>{if(!id)return null;seen++;if(seen>enemyCap)return null;return{id,lv:round>=5&&(i===1||i===3)?2+hard:round===12&&i===0?3+hard:1+hard,elite:round>=4&&(i===3||round>=9&&i===1),pathElite:risky}}),round)
}
function renderJourney(){let boss=bossNumber()>0;const goal=narrativeEncounter();if(boss){const final=finalBoss();$('journeyChoice').innerHTML=`${narrativeMissionMarkup()}<div class="journey-boss"><span>${final?unitArt(final):'☠️'}</span><div><b>${final?final.name:'Kein Weg führt am Wächter vorbei'}</b><small>${final?bossRuleText(final):'Ordne deine Truppe und bereite die Heldenfähigkeit vor.'}</small></div></div>${final?bossPlanMarkup():''}`;$('journeyChoice').querySelectorAll('[data-boss-plan]').forEach(b=>b.onclick=()=>setBossPlan(b.dataset.bossPlan));return}const safe=narrativeEncounter('safe'),risk=narrativeEncounter('risk');$('journeyChoice').innerHTML=`<div class="journey-head"><b>${narrativeEscape(goal?.goal||'Wähle den nächsten Pfad')}</b><small>Wähle, wie deine Truppe dieses Ziel erreicht.</small></div><div class="path-grid"><button class="path-card ${S.pathChoice==='safe'?'chosen':''}" data-path="safe"><span>🛤️</span><b>${narrativeEscape(safe?.name||'Bewachter Pfad')}</b><p class="path-reason">${narrativeEscape(safe?.reason||'')}</p><small>Berechenbare Gegner · normale Beute</small></button><button class="path-card risky ${S.pathChoice==='risk'?'chosen':''}" data-path="risk"><span>⚔️</span><b>${narrativeEscape(risk?.name||'Riskanter Pfad')}</b><p class="path-reason">${narrativeEscape(risk?.reason||'')}</p><small>Stärkere Gegner · +4 Gold bei Sieg</small></button></div>`;document.querySelectorAll('[data-path]').forEach(b=>b.onclick=()=>{S.pathChoice=b.dataset.path;save();render()})}
function enemyPreview(u,i,team){const x={...u,slot:i,bannerBonus:bannerBonus(u,team)};x.max=enemyHealth(x)+x.bannerBonus.hp;x.hp=x.max;x.shield=enemyStartShield(x)+x.bannerBonus.shield;if(i>=3)x.shield+=team.filter(Boolean).reduce((sum,u)=>sum+(type(u).upgradeType==='aura'?upgradeRank(u):0),0);x.formationAtk=team.reduce((sum,u,j)=>sum+(u&&i!==j&&type(u).upgradeType==='rally'&&Math.abs(i%3-j%3)<=1?upgradeRank(u):0),0);return x}
function renderIntel(){const enemies=enemiesFor(S.round),boss=bossNumber()>0,threat=storyChapter()<3?'Hält die Bahnen':storyChapter()<6?'Jagt verwundete Ziele':'Fernkämpfer jagen Heiler';const rule=finalBoss()?bossRuleText(finalBoss()):bossNumber()===1?'Eiserner Eid: Die Front beginnt mit Schild.':bossNumber()===2?'Belagerungsruf: Gegner erhalten jede 3. Runde +2 Angriff.':bossNumber()===3?'Letztes Gefecht: Der Boss erhält unter 50 % Leben einmal +4 Angriff für die nächste Runde und 4 Schild.':'';
 $('enemyIntel').innerHTML=`<details class="intel-fold"><summary>${boss?'Bosskundung':'Gegnerkundung'} · ${enemies.filter(Boolean).length} Gegner · Werte ansehen</summary><div class="intel-head"><b>${boss?'Bosskundung':'Gegnerkundung'}</b><span>${threat}</span></div><div class="intel-grid">${enemies.map((u,i)=>{if(!u)return '<div class="mini-card empty">–</div>';const x=enemyPreview(u,i,enemies);return `<button class="mini-card ${u.elite||u.pathElite?'elite':''}" data-enemy-info="${i}" aria-label="${type(u).name}, ${i<3?'vorne':'hinten'}, Bahn ${i%3+1}, ${combatAttack(x,'e')} Angriff, ${x.hp} Leben">${unitArt(type(u))}${u.bodyguard?'<small class="bodyguard-label">Leibwache</small>':''}${type(u).enemyOnly?`<small>${type(u).name}</small>`:''}<small>${i<3?'V':'H'}${i%3+1} · ⚔${combatAttack(x,'e')}</small><small>${initiativeBadge(x)} ♥${x.hp}${x.shield?' 🛡'+x.shield:''}</small></button>`}).join('')}</div><details class="campaign-rule"><summary>${campaign().icon} ${campaignRule().name}</summary><p>${campaignRule().text}</p>${campaignPressure()?`<p>${campaignDifficulty(campaign())}</p>`:''}</details>${boss?`<div class="boss-rule">${rule}</div>`:S.pathChoice==='risk'?`<small>Elitepfad: +${modernJourney()?10:12} % Gegnerleben, +1 Angriff.</small>`:''}</details>`;
 document.querySelectorAll('[data-enemy-info]').forEach(b=>b.onclick=()=>{const i=+b.dataset.enemyInfo,u=enemies[i],x=enemyPreview(u,i,enemies),t=type(u);const d=openLearning();d.innerHTML=`${unitArt(t,true)}<header><h2>${t.name}</h2><button class="btn secondary" id="intelClose">Schließen</button></header><p>${t.role} · Stufe ${u.lv} · ${i<3?'Vorne':'Hinten'}, Bahn ${i%3+1}</p><p>${initiativeBadge(x)} · ⚔ ${combatAttack(x,'e')} · ♥ ${x.hp}${x.shield?' · 🛡 '+x.shield:''}</p><p>${t.cardText}</p><p>${upgradeLabel(t,u.lv)}</p><p>${campaignRule().text}</p><small>Startwerte vor der ersten Wetterphase. Ziele hängen von deiner Aufstellung ab.</small>`;$('intelClose').onclick=closeLearning});
}
function applySettings(){window.GameAudio?.refresh();if(settings.reducedMotion)clearCardEffects();document.body.classList.toggle('reduced-motion',settings.reducedMotion);document.body.classList.toggle('fast-battle',settings.speed==='fast');$('soundSetting').checked=settings.sound;$('speedSetting').value=settings.speed;$('motionSetting').checked=settings.reducedMotion;localStorage.setItem('bannerwacht-settings',JSON.stringify(settings))}
function beep(kind){if(!settings.sound)return;try{audioContext??=new(window.AudioContext||window.webkitAudioContext)();if(audioContext.state==='suspended')audioContext.resume();let osc=audioContext.createOscillator(),gain=audioContext.createGain(),now=audioContext.currentTime;osc.type=kind==='heal'?'sine':'triangle';osc.frequency.setValueAtTime(kind==='heal'?520:190,now);osc.frequency.exponentialRampToValueAtTime(kind==='heal'?720:95,now+.12);gain.gain.setValueAtTime(.055,now);gain.gain.exponentialRampToValueAtTime(.001,now+.14);osc.connect(gain).connect(audioContext.destination);osc.start(now);osc.stop(now+.15)}catch{}}
function schedule(fn,delay){pendingStep=fn;clearTimeout(timer);if(!paused)timer=setTimeout(()=>{timer=null;pendingStep=null;fn()},delay*(!S?.tutorial&&settings.speed==='fast'?.45:1))}
function closeMenu(){paused=false;$('menu').close();$('resetConfirm').classList.add('hide');if(pendingStep)schedule(pendingStep,120)}
function restart(){if(chosenCampaign&&!campaignUnlocked(chosenCampaign)){showCampaignChoice();return}clearCardEffects();battleToken++;clearTimeout(timer);timer=null;pendingStep=null;paused=false;selected=null;if(!chosenRace||!chosenHero){beginSetup();return}S=fresh();roll()}
function claimReward(apply,chapter){
 if(!S||S.phase!=='reward'||S.round!==chapter)return;
 apply();
 selected=null;
 delete S.rewardSeed;
 S.pathChoice=null;
 if(S.round>=journeyLength())S.phase='end';
 else{S.round++;S.phase='shop';refreshOffers();if(S.tutorial)prepareTutorialChapter()}
 save();
 $('reward').replaceChildren();
 $('reward').classList.add('hide');
 render();
 $('hint').textContent='Belohnung erhalten. Deine Reise geht weiter.';
 focusNext($('heading'),`claimed-${chapter}`,true,0);
}
function renderRewardFallback(){let chapter=S.round;$('reward').innerHTML='<div class="reward-title"><span>⚔ Siegbeute</span><small>Wähle eine Belohnung für deine weitere Kampagne</small></div><button type="button" class="choice reward-card" data-fallback-reward><span class="reward-icon">🪙</span><span><small>Versorgung</small><b>Kriegskasse</b><em>+6 Gold für den nächsten Abschnitt.</em></span></button>';$('reward').classList.remove('hide');$('reward').querySelector('[data-fallback-reward]').onclick=()=>claimReward(()=>{S.gold+=6},chapter)}
function cardRewardSummary(t,space,unlock=false){return `${t.role} · Stufe 1. ${space?'Ein Exemplar für die Reserve oder einen freien Feldplatz.':'Kein Platz: stattdessen +5 Gold.'}${unlock?` Für diese Reise freigeschaltet; im Shop für ${recruitCost(t)} Gold.`:''}`}
function rewardBrief(html){const el=document.createElement('div');el.innerHTML=html;const text=(el.querySelector('strong')?.textContent||el.textContent).trim();return narrativeEscape(text.split(/(?<=\.)\s/)[0])}
function renderRewards(){
 // Keep the offered loot stable while inspecting cards and across reloads.
 if(!Number.isInteger(S.rewardSeed)){S.rewardSeed=Math.floor(Math.random()*4294967296);save()}
 let rewardRandomState=S.rewardSeed>>>0;
 const rewardRandom=()=>{rewardRandomState=(Math.imul(rewardRandomState,1664525)+1013904223)>>>0;return rewardRandomState/4294967296};
 const pick=items=>items[Math.floor(rewardRandom()*items.length)];
 let refs=[...S.team.map((u,i)=>({u,where:'team',i})),...S.bench.map((u,i)=>({u,where:'bench',i}))].filter(x=>x.u),upgradeable=refs.filter(x=>x.u.lv<3),free=()=>{let i=S.bench.indexOf(null);return i>=0?['bench',i]:teamCount()<fieldLimit()&&(i=S.team.indexOf(null))>=0?['team',i]:null},boss=bossNumber()>0;
 let addCard=id=>{S.unlocked??={};if(type({id}).rarity==='Episch')S.unlocked[id]=true;let spot=free();if(!spot){S.gold+=5;return}S[spot[0]][spot[1]]={id,lv:1};S.collection[id]=(S.collection[id]||0)+1};
 let chapter=S.round;
 let army=[];
 if(upgradeable.length){let r=pick(upgradeable),t=type(r.u);army.push({id:'upgrade',icon:'⬆️',tag:'Armee',name:`${t.name} aufwerten`,desc:`${unitUpgradeDescription(r.u)}`,apply:()=>r.u.lv++})}
 let locked= rewardTypes().filter(t=>t.rarity==='Episch'&&!canRecruit(t)),recruit=pick(locked.length?locked:rewardTypes()),newCard=locked.length>0;army.push({id:'recruit',icon:unitArt(recruit),tag:newCard?'Elite-Freischaltung':'Verstärkung',name:newCard?`${recruit.name} freischalten`:`${recruit.name} anwerben`,desc:cardRewardDescription(recruit,!!free()),summary:cardRewardSummary(recruit,!!free(),newCard),apply:()=>addCard(recruit.id)});
 let leadership=[];
 if(S.heroMastery<2)leadership.push({id:'hero',icon:heroArt(hero()),tag:'Führung',name:'Heldenruhm',desc:`${heroRewardDescription()}`,apply:()=>S.heroMastery++});
 if(S.raceMastery<2){let race=RACES.find(r=>r.id===S.race),texts={humans:'Alle Kämpfer beginnen mit Schild.',elves:'Heilung und hintere Reihe werden gestärkt.',orcs:'Der erste Angriff jedes Kämpfers wird wuchtiger.',undead:'Treffer stellen etwas Leben wieder her.'};leadership.push({id:'race',icon:factionArt(race),tag:'Völkerbund',name:`Segen der ${race.name}`,desc:`${raceRewardDescription()}`,apply:()=>S.raceMastery++})}
 let availableTactics=TACTICS.filter(c=>S.tacticOwned[c.id]&&(S.tacticLevels[c.id]||0)<2);if(availableTactics.length){let c=pick(availableTactics),lv=S.tacticLevels[c.id]||0;leadership.push({id:'tactic',icon:spellArt(c),tag:'Zauberkarte',name:`${c.name} verbessern`,desc:`Jetzt: ${tacticDescription(c,lv)} Danach: ${tacticDescription(c,lv+1)} Kosten bleiben ${c.cost} Mana. Gilt für diese Reise.`,apply:()=>S.tacticLevels[c.id]=lv+1})}
 let reserveReward=pick(rewardTypes().filter(t=>t.rarity!=='Gewöhnlich')),freeSpell=pick(TACTICS.filter(c=>!S.tacticOwned[c.id]));let supplies=[{id:'treasure',icon:'🪙',tag:'Versorgung',name:'Kriegskasse',desc:'+7 Gold für Rekrutierung, Zauber und Neuwürfe.',apply:()=>S.gold+=7},{id:'recover',icon:'❤️',tag:'Versorgung',name:'Rast am Lagerfeuer',desc:S.life<5?'+1 Herz und +3 Gold.':'Volle Herzen: stattdessen +8 Gold.',apply:()=>{if(S.life<5){S.life++;S.gold+=3}else S.gold+=8}},{id:'choice',icon:unitArt(reserveReward),tag:'Sammlung',name:'Veteranenreserve',desc:cardRewardDescription(reserveReward,!!free()),summary:cardRewardSummary(reserveReward,!!free()),apply:()=>addCard(reserveReward.id)},{id:'study',icon:'📖',tag:'Zauberwissen',name:freeSpell?`${freeSpell.name} entdecken`:'Zauberwissen teilen',desc:freeSpell?`Du erhältst ${freeSpell.name} kostenlos. ${tacticDescription(freeSpell,0)} Kosten: ${freeSpell.cost} Mana. ${activeTacticCount()<tacticDeckLimit()?'Wird direkt ins Zauberdeck aufgenommen.':'Das Zauberdeck ist voll; du kannst den Zauber im Lager aktivieren.'}`:'Alle Zauber entdeckt: stattdessen +6 Gold.',apply:()=>{if(!freeSpell){S.gold+=6;return}S.tacticOwned[freeSpell.id]=1;S.tacticActive[freeSpell.id]=activeTacticCount()<tacticDeckLimit()}},...(S.armyTraining<3?[{id:'training',icon:'⚔️',tag:'Ausbildung',name:'Drilllager',desc:`Alle eigenen Kämpfer erhalten dauerhaft +1 Angriff für diese Kampagne (${S.armyTraining||0}/3 → ${(S.armyTraining||0)+1}/3).`,apply:()=>S.armyTraining=Math.min(3,(S.armyTraining||0)+1)}]:[])];
 let choices;
 if(boss){let elite=upgradeable.map(r=>({r,key:rewardRandom()})).sort((a,b)=>a.key-b.key).slice(0,2).map(x=>x.r),rareCard=pick(rewardTypes().filter(t=>t.rarity!=='Gewöhnlich'));choices=[{id:'bossforge',icon:'🏆',tag:'Bosstrophäe',name:'Schmiede des Siegers',summary:elite.length?`${elite.length} Karten steigen eine Stufe auf: ${elite.map(r=>type(r.u).name).join(', ')}.`:'Alle Karten voll entwickelt: +12 Gold.',desc:elite.length?`<strong>${elite.length} vorhandene Karte${elite.length>1?'n':''} steigt eine Stufe auf.</strong>`+elite.map(r=>`<span class="reward-effect"><b>${type(r.u).icon} ${type(r.u).name}</b>${unitUpgradeDescription(r.u)}</span>`).join(''):'Alle Karten sind voll entwickelt: stattdessen +12 Gold.',apply:()=>elite.length?elite.forEach(r=>r.u.lv++):S.gold+=12},{id:'bosschest',icon:'👑',tag:'Bosstrophäe',name:'Eroberte Schatzkammer',summary:`+10 Gold und ${rareCard.name} auf Stufe 1.${!free()?' Kein Platz: zusätzlich +5 Gold.':''}${isElite(rareCard)?' Freischaltung gilt für diese Reise.':''}`,desc:`<strong>+10 Gold sofort</strong><span class="reward-effect">${rareCard.icon} ${rareCard.name} · Stufe 1${!free()?' → kein Platz: zusätzlich +5 Gold':''}</span>`+cardRewardDescription(rareCard,!!free()),apply:()=>{S.gold+=10;addCard(rareCard.id)}},{id:'bosslegacy',icon:'🌟',tag:'Bosstrophäe',name:'Legendärer Schwur',summary:S.raceMastery>=2&&S.heroMastery>=2?'+12 Gold (beide Stufen maximal).':`Heldenruhm ${S.heroMastery} → ${Math.min(2,S.heroMastery+1)} und Völkerbund ${S.raceMastery} → ${Math.min(2,S.raceMastery+1)}. Gilt für diese Reise; keine legendäre Kartenfreischaltung.`,desc:'<p>Verstärkt diese Reise; schaltet keine legendäre Karte frei.</p>'+ (S.raceMastery>=2&&S.heroMastery>=2?'+12 Gold (beide Stufen bereits maximal).':[S.heroMastery<2?heroRewardDescription():'',S.raceMastery<2?raceRewardDescription():''].filter(Boolean).map(text=>`<span class="reward-effect">${text}</span>`).join('')),apply:()=>{if(S.raceMastery>=2&&S.heroMastery>=2)S.gold+=12;else{S.raceMastery=Math.min(2,S.raceMastery+1);S.heroMastery=Math.min(2,S.heroMastery+1)}}}]}else{let lead=leadership.length?pick(leadership):pick(army),supply=pick(supplies.filter(s=>s.id!==lead.id));choices=[locked.length?army.find(r=>r.id==='recruit'):pick(army),lead,supply]}
 $('reward').innerHTML=`<div class="reward-title"><span>${boss?'🏆 Bosstrophäe':'⚔ Siegbeute'}</span><small>Wähle eine Belohnung für deine weitere Kampagne</small></div>${choices.map((r,i)=>`<article class="${boss?'boss-trophy':'choice reward-card'}"><header><span class="reward-icon">${rewardArt(r)}</span><div><small>${r.tag}</small><b>${r.name}</b></div></header>${r.summary?`<p class="reward-summary">${r.summary}</p><details class="reward-details"><summary>Werte und Entwicklung</summary><div>${r.desc}</div></details>`:r.desc.length>260?`<div class="reward-summary">${rewardBrief(r.desc)}</div><details class="reward-details"><summary>Alle Wirkungen</summary><div>${r.desc}</div></details>`:`<div class="reward-summary">${r.desc}</div>`}<button type="button" class="btn full" data-reward-index="${i}">${r.name} wählen</button></article>`).join('')}`;
 $('reward').querySelectorAll('[data-reward-index]').forEach(b=>b.onclick=()=>{let reward=choices[+b.dataset.rewardIndex];claimReward(reward.apply,chapter)})
}
function battle(){if(S?.tutorial&&!tutorialBattleReady())return;if(S.phase!=='shop'||timer||pendingStep||currentStoryDecision())return;const encounterContext=narrativeEncounter();S.phase='battle';window.GameAudio?.refresh();updateMobilePhase();selected=null;let token=++battleToken;
 let allies=S.team.map((u,i)=>{if(!u)return null;let x={...u,slot:i};x.max=maxhp(x);x.hp=x.max;x.upgrade=upgradeRank(x);x.shield=storyBonus(x,'shield')+developmentShield(x)+(S.race==='humans'?raceShield(S.raceMastery||0):0)+roleStartShield();x.dodges=type(x).upgradeType==='dodge'?(currentCardBalance()?Math.min(1,x.upgrade):x.upgrade):0;x.revives=type(x).upgradeType==='revive'&&x.upgrade?1:0;x.attackCount=0;x.dodgeShieldGranted=false;x.orcFirstHitUsed=false;return x}),foes=enemiesFor(S.round).map((u,i)=>{if(!u)return null;let x={...u,slot:i};x.max=enemyHealth(x);x.hp=x.max;x.upgrade=upgradeRank(x);x.shield=enemyStartShield(x);x.dodges=type(x).upgradeType==='dodge'?(currentCardBalance()?Math.min(1,x.upgrade):x.upgrade):0;x.revives=type(x).upgradeType==='revive'&&x.upgrade?1:0;x.attackCount=0;x.dodgeShieldGranted=false;x.orcFirstHitUsed=false;return x});
 for(let side of [allies,foes])side.filter(Boolean).forEach(u=>{u.bannerBonus=bannerBonus(u,side);u.shield+=u.bannerBonus.shield;u.dodges+=u.bannerBonus.dodge;if(side===foes){u.max+=u.bannerBonus.hp;u.hp=u.max}});
 for(const u of [...allies,...foes].filter(Boolean))u.metrics={damage:0,heal:0,blocked:0,taken:0};
 let roundNo=0,logs=[],enemySkip=false,skippedFoes=new Set(),oracleHeal=true,mana=1,maxMana=1,waitingForPlayer=false,hand=[],usedCards=new Set(),bossEnraged=false,objectiveCleared=false,selectedAction=null,spellMetrics={heal:0};
 function applyFormationUpgrades(side){side.filter(Boolean).forEach(u=>{let t=type(u),r=u.upgrade;if(!r)return;if(t.upgradeType==='aura')side.filter(v=>v&&v.slot>=3).forEach(v=>v.shield+=r);if(t.upgradeType==='rally')side.filter(v=>v&&v!==u&&Math.abs(v.slot%3-u.slot%3)<=1).forEach(v=>v.formationAtk=(v.formationAtk||0)+r)})}
 applyFormationUpgrades(allies);applyFormationUpgrades(foes);
 $('shop').classList.add('hide');$('actions').classList.add('hide');$('mainAction').classList.add('hide');$('game').classList.add('battle-mode','battle-pop-open');$('hint').textContent='';$('phase').textContent='Kampf';$('heading').textContent=`Begegnung ${S.round}`;$('message').innerHTML='<span class="battle-steps"><b>Dein Ablauf:</b> Das Schlachtfeld bleibt geöffnet, damit du jeden Angriff sehen kannst.</span>';$('arena').classList.remove('hide');$('battlelog').classList.remove('hide');$('battleViewToggle').classList.remove('hide');$('battleViewToggle').textContent='⌃ Kampf minimieren';focusNext($('arena'),`arena-${S.round}`);
 $('message').insertAdjacentHTML('beforeend',`<span class="objective-line">${battleObjective(S.round)}</span>`);
 const encounterLabel=document.querySelector('#arena .arena-label.top');if(encounterLabel){encounterLabel.textContent=encounterContext?`Gegner · ${encounterContext.name}`:'Gegner';encounterLabel.title=encounterContext?.reason||''}
 function alive(side){return side.filter(u=>u&&u.hp>0)}

 function fighter(u,side){if(!u)return'<div class="battle-cell"></div>';let t=type(u);return `<div class="battle-cell" data-cell="${side}${u.slot}"><div data-level="${u.lv}" data-race="${t.race}" data-rarity="${t.rarity}" data-boss-campaign="${t.boss||u.elite?S.campaign:''}" class="fighter rarity-${rarityKey(t.rarity)} ${t.boss||u.elite?'boss-frame':''} ${t.boss?'campaign-boss':u.bodyguard?'boss-bodyguard':''} ${u.hp<=0?'out':''} ${weatherLane(roundNo)===u.slot%3?'frosted':''}" role="button" tabindex="0" data-inspect="${side}${u.slot}" aria-label="${t.name}, Stufe ${u.lv}, ${t.role}">${cardLevelBadge(u)}<span class="figure">${unitArt(t)}</span><span class="f-name">${t.name.replace(/Armbrustschützin/g,'Armbrust<wbr>schützin')}</span>${unitReadout(u,side)}<div class="f-bar"><i style="width:${Math.max(0,u.hp/u.max*100)}%"></i></div></div></div>`}

 function draw(){let rows=[['e',foes.slice(3)],['e',foes.slice(0,3)],['',Array(3).fill(null)],['a',allies.slice(0,3)],['a',allies.slice(3)]];$('battleGrid').innerHTML=rows.map(([side,units],i)=>`<div class="battle-row ${i===2?'empty':''}">${units.map(u=>fighter(u,side)).join('')}</div>`).join('');document.querySelectorAll('[data-inspect]').forEach(b=>{b.onclick=()=>inspectFighter(b.dataset.inspect);b.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();inspectFighter(b.dataset.inspect)}}});$('battlelog').innerHTML=logs.slice(-9).map(s=>`<div>${s}</div>`).join('')}
 function end(){if(token!==battleToken||S.phase!=='battle')return;const unusedHero=!!heroPower;clearCardEffects();clearTimeout(timer);timer=null;pendingStep=null;heroPower=null;$('heroPower').classList.add('hide');$('tacticHand').classList.add('hide');let won=!alive(foes).length,risky=S.pathChoice==='risk';if(won){S.wins++;if(risky)S.eliteWins++;S.gold+=victoryGold()+(risky?4:0)+(S.boon==='coin'?2:0)+(hero().goldWin||0);S.phase=(S.round===journeyLength())?'end':'reward'}else{S.life--;S.phase=S.life<=0?'end':'shop';if(S.life>0)recoverDefeat()}
  $('battleNote').textContent=won?'🏆 Sieg!':'💔 Niederlage';
  if(won){S.recovery=null;S.defeated=false;if(S.phase==='end')recordCampaignVictory(S)}
  if(S.phase==='end')S.defeated=!won;S.lastBattle={...battleFindings(allies,foes,won,roundNo,unusedHero),spellHealing:spellMetrics.heal,encounter:encounterContext,won,round:roundNo,survivors:alive(allies).length,total:allies.filter(Boolean).length,tip:!S.team.slice(0,3).some(Boolean)?'Deine Front war leer. Stelle Schutzkämpfer nach vorne.':teamCount()<fieldLimit()?'Du hattest freie Truppenplätze. Zusätzliche Kämpfer können helfen.':!buffs(S.team).length?'Kein Bannerbonus aktiv. Zwei gleiche Banner stärken deine Truppe.':won?'Deine Aufstellung hat gewonnen. Prüfe vor dem nächsten Kampf die neue Gegnerkundung.':'Prüfe Aufwertungen und gekaufte Zauber; ein sicherer Pfad ist leichter.'};save();render();
  if(!won)$('hint').textContent=S.life>0?recoveryDescription():'Keine Herzen mehr. Deine dauerhaften Erfolge bleiben erhalten.';
 }
 async function strike(actor,target,side){if(token!==battleToken)return;let own=side==='a'?allies:foes,other=side==='a'?foes:allies,bonus=actor.bannerBonus;
  if(side==='e'){const effect=enemySpecialEffect(actor,other,roundNo);if(effect){await effect;if(token!==battleToken)return}}
  if(side==='e'&&exclusiveEnemyAction(actor,other,roundNo,logs)){draw();$('battlelog').innerHTML=logs.slice(-9).map(s=>`<div>${s}</div>`).join('');return}
  if(bossSkill(actor,own,other,roundNo,logs)){draw();target=chooseTarget(actor,other,side==='e');if(!target)return}
  let healer=type(actor).heal&&roundNo%2===0?chooseAllyTarget(actor,own):null;
  if(healer){let amount=unitHealing(actor)+bonus.heal+(type(actor).upgradeType==='healing'?2*actor.upgrade:0)+(side==='a'&&S.race==='elves'?S.raceMastery||0:0)+(side==='a'&&hero().healBoost&&oracleHeal?hero().healBoost:0);if(side==='a'&&hero().healBoost)oracleHeal=false;await cardEffect(actor.id,document.querySelector(`[data-cell="${side}${actor.slot}"] .fighter`),document.querySelector(`[data-cell="${side}${healer.slot}"] .fighter`),'heal');if(token!==battleToken)return;amount=healUnit(healer,amount,roundNo,actor);let cell=document.querySelector(`[data-cell="${side}${healer.slot}"]`);cell?.querySelector('.fighter')?.classList.add('healing');if(cell){cell.querySelector('.f-bar i').style.width=healer.hp/healer.max*100+'%';cell.querySelector('.health-stat').textContent='♥'+healer.hp;}$('battleNote').textContent=`🌿 ${type(healer).name} +${amount}`;logs.push(`${type(actor).name} heilt ${type(healer).name} um ${amount}.`);if(!currentCardBalance())return}
  let source=document.querySelector(`[data-cell="${side}${actor.slot}"] .fighter`),destination=document.querySelector(`[data-cell="${side==='a'?'e':'a'}${target.slot}"] .fighter`);
  if(source&&destination){await animateAttack(source,destination,actor);if(token!==battleToken)return}
  const strikeBase=combatAttack(actor,side);actor.attackCount=(actor.attackCount||0)+1;if(target.dodges>0){target.dodges--;if(currentCardBalance()&&type(target).upgradeType==='dodge'&&target.upgrade>=2&&!target.dodgeShieldGranted){target.shield+=4;target.dodgeShieldGranted=true;}unitEffect(target,side==='a'?'e':'a','dodge');logs.push(`${type(target).name} weicht aus.`);$('battleNote').textContent=`💨 ${type(target).name} weicht aus`;draw();return}
  let base=strikeBase;if(currentCardBalance()&&actor.hasteExtra)base=Math.round(base*2/3);let up=type(actor).upgradeType;if(up==='charge'&&actor.attackCount===1)base+=3*actor.upgrade;if(side==='a'&&S.race==='orcs'&&(currentCardBalance()?!actor.orcFirstHitUsed:actor.attackCount===1)){base+=2*(S.raceMastery||0);actor.orcFirstHitUsed=true;};if(up==='execute'&&target.hp/target.max<.5)base+=3*actor.upgrade;let damage=Math.max(0,base+(target.mark||0)+bannerHitBonus(bonus,actor.attackCount===1,target.hp<target.max/2)-bannerMitigation(target));let absorbed=Math.min(target.shield||0,damage);target.shield=(target.shield||0)-absorbed;damage-=absorbed;
  actor.metrics.damage+=Math.min(target.hp,damage);target.metrics.taken+=Math.min(target.hp,damage);target.metrics.blocked+=absorbed;target.hp=Math.max(0,target.hp-damage);if(!target.hp&&target.revives>0){target.revives--;unitEffect(target,side==='a'?'e':'a','revive');target.hp=4*target.upgrade;logs.push(`${type(target).name} kehrt durch seinen Aufstieg zurück!`)}if(destination){destination.classList.remove('hurt');void destination.offsetWidth;battleImpact(destination,actor.id,damage,absorbed,!target.hp);showDamage(destination,damage,absorbed);destination.querySelector('.f-bar i').style.width=target.hp/target.max*100+'%';let mark=destination.querySelector('.shield-mark');if(mark)syncShield(mark,target.shield);if(!target.hp)destination.classList.add('out')}
  $('battleNote').textContent=`${type(actor).icon} ${type(actor).name} → ${type(target).name} −${damage}`;logs.push(`${type(actor).name} trifft ${type(target).name} (${damage}).`);
  const beforeSelfHeal=actor.hp;applyBannerHit(actor,target,damage);const gained=actor.hp-beforeSelfHeal;actor.hp=beforeSelfHeal;healUnit(actor,gained,roundNo);if(bonus.ward)unitEffect(actor,side,'shield');if(up==='lifesteal'&&actor.upgrade)unitEffect(actor,side,'heal');if(up==='ward'&&actor.upgrade)unitEffect(actor,side,'shield');if(type(target).upgradeType==='thorns'&&target.upgrade)unitEffect(target,side==='a'?'e':'a','thorns');if(up==='mark')target.mark=Math.max(target.mark||0,actor.upgrade);if(up==='curse'||up==='bind')target.turnAtk=(target.turnAtk||0)-actor.upgrade;if(bonus.drain&&damage>0){unitEffect(actor,side,'heal');logs.push(`${type(actor).name}: Banner heilt ${bonus.drain} Leben.`)}if(up==='lifesteal')healUnit(actor,2*actor.upgrade,roundNo);if(side==='a'&&S.race==='undead'&&S.raceMastery)healUnit(actor,S.raceMastery,roundNo);let thorns=developmentThorns(target)+target.bannerBonus.thorns;if(thorns){damageUnit(actor,thorns,target,true);unitEffect(target,side==='a'?'e':'a','thorns');logs.push(`${type(target).name} wirft ${thorns} Dornenschaden zurück.`)}if(up==='ward')actor.shield+=2*actor.upgrade;
  let splash=up==='cleave'?2*actor.upgrade:up==='blast'&&actor.attackCount%3===0?3*actor.upgrade:up==='chain'?2*actor.upgrade:0;splash=Math.max(splash,bonus.splash);if(splash){let adjacent=splashTarget({...actor,attackCount:actor.attackCount-1},target,other,side==='e');if(adjacent){let extra=splash,blocked=Math.min(adjacent.shield||0,extra);adjacent.shield=(adjacent.shield||0)-blocked;extra-=blocked;actor.metrics.damage+=Math.min(adjacent.hp,extra);adjacent.metrics.taken+=Math.min(adjacent.hp,extra);adjacent.metrics.blocked+=blocked;adjacent.hp=Math.max(0,adjacent.hp-extra);let cell=document.querySelector(`[data-cell="${side==='a'?'e':'a'}${adjacent.slot}"] .fighter`);if(cell){cell.querySelector('.f-bar i').style.width=adjacent.hp/adjacent.max*100+'%';if(!adjacent.hp)cell.classList.add('out')}logs.push(`${type(actor).name} trifft ein weiteres Ziel (${extra}).`)}}
 for(let [tag,units] of [['a',allies],['e',foes]])for(let u of units.filter(Boolean)){let cell=document.querySelector(`[data-cell="${tag}${u.slot}"] .fighter`);if(cell){cell.querySelector('.f-bar i').style.width=Math.max(0,u.hp/u.max*100)+'%';syncShield(cell.querySelector('.shield-mark'),u.shield);cell.querySelector('.attack-stat').textContent='⚔'+combatAttack(u,tag);cell.querySelector('.health-stat').textContent='♥'+u.hp;cell.classList.toggle('out',u.hp<=0)}}
 $('battlelog').innerHTML=logs.slice(-9).map(s=>`<div>${s}</div>`).join('');$('battlelog').scrollTop=$('battlelog').scrollHeight
 }
 let actions=[];
 function drawHand(){let pool=TACTICS.filter(c=>S.tacticOwned[c.id]&&S.tacticActive[c.id]!==false&&!usedCards.has(c.id));if(pool.length<3){usedCards.clear();pool=TACTICS.filter(c=>S.tacticOwned[c.id]&&S.tacticActive[c.id]!==false)}if(!pool.length){hand=[];return}let playable=pool.filter(c=>c.cost<=mana),first=playable.length?pick(playable):pick(pool),rest=pool.filter(c=>c.id!==first.id).sort(()=>Math.random()-.5).slice(0,2);hand=[first,...rest].sort(()=>Math.random()-.5)}
 function tacticText(c){return tacticDescription(c)}
 function actionPreview(id){const h=hero(),l=S.tacticLevels[id]||0,live=alive(allies);let targets=[],amount=0,kind='damage';
  if(id==='hero'){kind=h.powerType;if(kind==='damage'){amount=heroValue('damage',S.heroMastery);targets=[heroTarget()].filter(Boolean)}else if(kind==='heal'){amount=heroValue('heal',S.heroMastery);targets=live}else if(kind==='shield'){amount=5+2*S.heroMastery;targets=live}else{targets=heroSkipTargets();kind='skip'}}
  else if(id==='shot'){amount=spellValue('shot',l);targets=[bossTargetPool(foes).sort((a,b)=>a.hp-b.hp)[0]].filter(Boolean)}
  else if(id==='pierce'){amount=spellValue('pierce',l);targets=[alive(foes).filter(u=>u.slot>=3).sort((a,b)=>a.hp-b.hp)[0]||alive(foes).sort((a,b)=>a.hp-b.hp)[0]].filter(Boolean)}
  else if(id==='mend'){kind='heal';amount=spellValue('mend',l);targets=[live.sort((a,b)=>a.hp/a.max-b.hp/b.max)[0]].filter(Boolean)}
  else if(id==='shield'){kind='shield';amount=2+l;targets=live}
  else if(id==='rally'){kind='attack';amount=2+l;targets=live}
  const text=kind==='damage'?targets.map(u=>`${type(u).name}: ♥ ${u.hp} → ${Math.max(0,u.hp-amount)} · ${amount} direkter Schaden`).join(' · '):kind==='heal'?targets.map(u=>`${type(u).name}: ♥ ${u.hp} → ${Math.min(u.max,u.hp+healAmount(amount,roundNo))}`).join(' · '):kind==='shield'?`Alle Verbündeten: +${amount} Schild.`:kind==='attack'?`Alle Verbündeten: +${amount} Angriff für diese Runde.`:kind==='skip'?`${targets.length} Gegner setzen aus: ${targets.map(u=>type(u).name).join(', ')}.${S.heroMastery?' Deine Truppe erhält '+S.heroMastery+' Schild.':''}`:`Mana: ${mana} → ${mana+amount}/5`;
  return{targets,text,side:kind==='damage'||kind==='skip'?'e':'a'};
 }
 function heroSkipTargets(){return heroTargetOrder(foes,'skip').slice(0,heroValue('skip',S.heroMastery))}
 function heroTarget(){return heroTargetOrder(foes,'damage')[0]}
 function canPlay(c){return !usedCards.has(c.id)&&c.cost<=mana}
 function inspectFighter(key){if(!waitingForPlayer)return;selectedAction={unit:key};renderTactics()}
 function markPreview(targets,side){document.querySelectorAll('.preview-target,.preview-source').forEach(el=>el.classList.remove('preview-target','preview-source'));targets.forEach(u=>document.querySelector(`[data-cell="${side}${u.slot}"] .fighter`)?.classList.add('preview-target'))}
 function inspectText(key){const side=key[0],u=(side==='a'?allies:foes)[+key.slice(1)];if(!u||u.hp<=0)return 'Diese Einheit ist bereits ausgeschieden.';const own=side==='a'?allies:foes,enemy=side==='a'?foes:allies;const healing=type(u).heal&&roundNo%2===0?chooseAllyTarget(u,own):null;const target=healing||chooseTarget(u,enemy,side==='e');if(!target)return 'Kein Ziel mehr.';markPreview([target],healing?side:side==='a'?'e':'a');document.querySelector(`[data-cell="${side}${u.slot}"] .fighter`)?.classList.add('preview-source');if(healing){const amount=healAmount(unitHealing(u)+u.bannerBonus.heal+(type(u).upgradeType==='healing'?2*u.upgrade:0)+(side==='a'&&S.race==='elves'?S.raceMastery:0)+(side==='a'&&hero().healBoost&&oracleHeal?hero().healBoost:0),roundNo);return `${type(u).name} · Initiative ${initiative(u)} → ${type(target).name}: bis zu ${amount} Heilung${currentCardBalance()?' und anschließend ein regulärer Angriff':''}.`}let amount=combatAttack(u,side)+(type(u).upgradeType==='charge'&&!u.attackCount?3*u.upgrade:0)+(side==='a'&&S.race==='orcs'&&(currentCardBalance()?!u.orcFirstHitUsed:!u.attackCount)?2*S.raceMastery:0)+(type(u).upgradeType==='execute'&&target.hp<target.max/2?3*u.upgrade:0)+(target.mark||0)+bannerHitBonus(u.bannerBonus,!u.attackCount,target.hp<target.max/2)-bannerMitigation(target);amount=Math.max(0,amount);return `${type(u).enemyOnly?exclusiveEnemyStatus(u,roundNo)+' ':type(u).boss?bossRuleText(type(u))+' ':''}${type(u).name} · Initiative ${initiative(u)} → ${type(target).name}: ${target.dodges>0?'Ziel weicht aus':Math.min(target.hp,Math.max(0,amount-target.shield))+' Lebensschaden'+(target.shield?' · '+Math.min(target.shield,amount)+' Schild abgefangen':'')}. Aktuelles Ziel; vorherige Angriffe können es verändern.`}
 function timeline(remaining=null){let line=$('battleTimeline');if(!line){line=document.createElement('div');line.id='battleTimeline';$('arena').prepend(line)}const order=(remaining??battleActions(allies,foes,roundNo,skippedFoes)).filter(a=>a.u.hp>0);line.innerHTML=`<b>Runde ${roundNo} · ${enemySkip?`${skippedFoes.size} Gegner setzen aus`:'Initiative: hoch → niedrig'}${finalBoss()?` · Leibwache ${bossGuards(foes).length}/2`:''}</b><div class="initiative-order">${order.slice(0,6).map(({u,side},i)=>`<button data-plan-unit="${side}${u.slot}" class="${side==='a'?'ally':'enemy'}" aria-label="${i+1}. ${side==='a'?'Deine Einheit':'Gegner'}: ${type(u).name}, Initiative ${initiative(u)}, ${u.slot<3?'vorne':'hinten'}, Bahn ${u.slot%3+1}">${i+1} ${type(u).icon}<small>⌛${initiative(u)}</small></button>`).join('')}${order.length>6?`<button id="moreInitiative" aria-label="Vollständige Zugfolge anzeigen">+${order.length-6}</button>`:''}</div>${battleWeather(roundNo)?`<small>${battleWeather(roundNo)}</small>`:''}${alive(foes).filter(u=>type(u).enemyOnly&&exclusiveEnemyStatus(u,roundNo)).map(u=>`<small>${type(u).name}: ${exclusiveEnemyStatus(u,roundNo)}</small>`).join('')}`;if($('moreInitiative'))$('moreInitiative').onclick=()=>{const d=openLearning();d.innerHTML=`<header><h2>Angriffsfolge · Runde ${roundNo}</h2><button id="orderClose" class="btn secondary">Schließen</button></header><ol>${order.map(({u,side})=>`<li>${side==='a'?'Deine Truppe':'Gegner'} · ${type(u).icon} ${type(u).name} · ⌛${initiative(u)} · ${u.slot<3?'Vorne':'Hinten'} ${u.slot%3+1}</li>`).join('')}</ol><p>Höhere Initiative zuerst. Bei Gleichstand: V1–V3, H1–H3; gleicher Platz: ungerade Runden eigene Truppe, gerade Gegner. Zusatzangriffe folgen nach allen regulären Aktionen. Gefallene werden übersprungen; Heilung kann Angriffe ersetzen.</p>`;$('orderClose').onclick=closeLearning};line.querySelectorAll('[data-plan-unit]').forEach(b=>b.onclick=()=>inspectFighter(b.dataset.planUnit));}
 function renderTactics(){if(token!==battleToken)return;waitingForPlayer=true;$('heroPower').disabled=!heroPower;timeline();$('tacticHand').classList.remove('hide');const possible=!!heroPower||hand.some(canPlay);let preview='';markPreview([],'a');if(selectedAction){if(selectedAction.unit)preview=inspectText(selectedAction.unit);else{const p=actionPreview(selectedAction.id);preview=p.text;markPreview(p.targets,p.side)}}
  const spellsExpanded=$('spellToggle')?.getAttribute('aria-expanded')==='true'||!!S.tutorial;
  const heroButton=$('heroPower');heroButton.remove();
  $('tacticHand').innerHTML=`<div class="turn-head"><span><b>${possible?'Dein Zug':'Keine Aktion verfügbar'} · Runde ${roundNo}</b><small class="turn-help">${possible?'Zauber antippen → sofort gespielt. Heldenfähigkeit mit Vorschau.':'Der Kampf geht automatisch weiter.'}</small></span><span>💧 ${mana}/5</span></div><button type="button" id="spellToggle" aria-controls="battleSpells" aria-expanded="${spellsExpanded}">Zauber · ${hand.filter(canPlay).length} spielbar</button><div class="tactic-cards" id="battleSpells">${hand.map(c=>{let l=S.tacticLevels[c.id]||0;return `<button class="tactic-card ${l?'improved':''}" data-tactic="${c.id}" aria-pressed="${selectedAction?.id===c.id}" ${canPlay(c)?'':'disabled'}><i>${c.cost}</i><span class="spell-art">${spellArt(c)}</span><b>${c.name}${l?' +'+l:''}</b><small>${tacticText(c)}</small></button>`}).join('')}</div>${preview?`<div class="action-preview" role="status">${preview}</div><div class="preview-actions">${selectedAction.id?'<button class="btn" id="castAction">'+(selectedAction.id==='hero'?'Heldenfähigkeit einsetzen':'Zauber ausspielen')+'</button>':''}<button class="btn secondary" id="cancelAction">Zurück</button></div>`:''}<button class="btn full" id="endTurn">${possible?'Zug beenden':'Jetzt weiterkämpfen'}</button>`;
  $('endTurn').before(heroButton);
  $('tacticHand').classList.toggle('spell-list-open',spellsExpanded);
  $('spellToggle').onclick=()=>{const open=$('tacticHand').classList.toggle('spell-list-open');$('spellToggle').setAttribute('aria-expanded',String(open))};
  document.querySelectorAll('[data-tactic]').forEach(b=>b.onclick=()=>{const c=hand.find(c=>c.id===b.dataset.tactic);if(!c||!canPlay(c))return;playTactic(c.id)});$('endTurn').onclick=finishTurn;if($('cancelAction'))$('cancelAction').onclick=()=>{selectedAction=null;renderTactics()};if($('castAction'))$('castAction').onclick=()=>{let id=selectedAction?.id;selectedAction=null;if(id==='hero')heroPower?.();else if(id)playTactic(id)};
  $('heroPower').onclick=()=>{if(waitingForPlayer&&heroPower){selectedAction={id:'hero'};renderTactics()}};
  if(S.tutorial)renderTutorial();focusNext($('tacticHand'),`turn-${roundNo}`,false);if(!possible)schedule(finishTurn,1400);
 }

 function playTactic(id){let card=TACTICS.find(c=>c.id===id),l=S.tacticLevels[id]||0;if(!card||!waitingForPlayer||!hand.some(c=>c.id===id)||!canPlay(card))return;mana-=card.cost;usedCards.add(id);if(S.tutorial){S.tutorial.spellUsed=true;save()}const commandFx=(u,side)=>{let el=document.querySelector(`[data-cell="${side}${u.slot}"] .fighter`);cardEffect(id,side==='e'?document.querySelector('[data-cell^="a"] .fighter'):el,el,side==='e'?'attack':id==='shield'?'shield':'support')};if(id==='shield'){alive(allies).forEach(u=>commandFx(u,'a'));alive(allies).forEach(u=>u.shield=(u.shield||0)+2+l);logs.push(`Schildformation: Alle erhalten ${2+l} Schild.`)}else if(id==='shot'){let amount=spellValue('shot',l),target=bossTargetPool(foes).sort((a,b)=>a.hp-b.hp)[0];if(target){commandFx(target,'e');damageUnit(target,amount,null,true);logs.push(`Fokusfeuer trifft ${type(target).name} für ${amount}.`)}}else if(id==='rally'){alive(allies).forEach(u=>commandFx(u,'a'));alive(allies).forEach(u=>u.turnAtk=2+l);logs.push(`Bannerflamme: +${2+l} Angriff in diesem Zug.`)}else if(id==='mend'){let amount=spellValue('mend',l),target=alive(allies).sort((a,b)=>a.hp/a.max-b.hp/b.max)[0];if(target){commandFx(target,'a');amount=healUnit(target,amount,roundNo,{metrics:spellMetrics});logs.push(`Feldheilung heilt ${type(target).name} um ${amount}.`)}}else if(id==='pierce'){let amount=spellValue('pierce',l),target=alive(foes).filter(u=>u.slot>=3).sort((a,b)=>a.hp-b.hp)[0]||alive(foes).sort((a,b)=>a.hp-b.hp)[0];if(target){commandFx(target,'e');damageUnit(target,amount,null,true);logs.push(`Durchbruch trifft ${type(target).name} für ${amount}.`)}}draw();renderTactics();if(!alive(foes).length){waitingForPlayer=false;$('tacticHand').classList.add('hide');schedule(end,900)}}
 function finishTurn(){if(S?.tutorial&&S.round===2&&!S.tutorial.spellUsed)return;if(!waitingForPlayer||token!==battleToken)return;clearTimeout(timer);timer=null;pendingStep=null;waitingForPlayer=false;selectedAction=null;markPreview([],'a');$('heroPower').disabled=true;$('tacticHand').classList.add('hide');actions=battleActions(allies,foes,roundNo,skippedFoes);enemySkip=false;skippedFoes.clear();next()}
 function next(){if(token!==battleToken)return;if(!actions.length){if(roundNo>0)applyEndWeather([...allies,...foes],roundNo,logs);[...alive(allies),...alive(foes)].forEach(u=>{u.turnAtk=0;u.bannerCurse=0});if(!alive(allies).length||!alive(foes).length||roundNo>=40){end();return}roundNo++;[...alive(allies),...alive(foes)].forEach(u=>{let regen=(type(u).upgradeType==='regen'?2*u.upgrade:0)+u.bannerBonus.regen;if(regen){if(u.hp<u.max)unitEffect(u,allies.includes(u)?'a':'e','heal');healUnit(u,regen,roundNo)}});applyRoundWeather([...allies,...foes],roundNo);applyExclusiveEnemyRound(foes,roundNo,logs);maxMana=Math.min(5,roundNo);mana=maxMana;usedCards.clear();drawHand();draw();if(bossNumber()===2&&roundNo%3===0){alive(foes).forEach(u=>u.turnAtk=2);logs.push('Bossregel: Belagerungsruf verleiht Gegnern +2 Angriff.')}if(bossNumber()===3&&!finalBoss()&&!bossEnraged){let boss=alive(foes).find(u=>u.elite)||alive(foes)[0];if(boss&&boss.hp/boss.max<.5){boss.turnAtk=4;boss.shield=(boss.shield||0)+4;bossEnraged=true;logs.push('Bossregel: Der Heerführer wird wütend!')}}$('battleNote').textContent=`Runde ${roundNo} · ${'Befehlsphase'}`;focusNext($('arena'),`arena-turn-${roundNo}`,true,20);schedule(renderTactics,420);return}
  let action=actions.shift();if(!action||!action.u.hp){timeline(actions);schedule(next,40);return}timeline([action,...actions]);let target=chooseTarget(action.u,action.side==='a'?foes:allies,action.side==='e');if(!target){end();return}
  action.u.hasteExtra=!!action.extra;strike(action.u,target,action.side).then(()=>{if(token!==battleToken)return;timeline(actions);schedule(next,settings.reducedMotion?120:settings.speed==='fast'?180:620)})
 }
 heroPower=()=>{if(token!==battleToken||!waitingForPlayer)return;let h=hero(),m=S.heroMastery||0;const heroFx=(u,side)=>{let el=document.querySelector(`[data-cell="${side}${u.slot}"] .fighter`);cardEffect(h.id,side==='e'?document.querySelector('[data-cell^="a"] .fighter'):el,el,h.powerType==='damage'?'attack':h.powerType)};if(h.powerType==='shield'){alive(allies).forEach(u=>heroFx(u,'a'));let amount=5+2*m;alive(allies).forEach(u=>u.shield+=amount);logs.push(`${h.name} verleiht allen +${amount} Schild.`)}else if(h.powerType==='damage'){let amount=heroValue('damage',m),target=heroTarget();if(target){heroFx(target,'e');damageUnit(target,amount,null,true);logs.push(`${h.name} trifft ${type(target).name} für ${amount}.`)}}else if(h.powerType==='heal'){alive(allies).forEach(u=>heroFx(u,'a'));let amount=heroValue('heal',m);alive(allies).forEach(u=>healUnit(u,amount,roundNo,{metrics:spellMetrics}));logs.push(`${h.name} heilt die Truppe um ${amount}.`)}else{const stopped=heroSkipTargets();stopped.forEach(u=>heroFx(u,'e'));skippedFoes=new Set(stopped);enemySkip=true;if(m)alive(allies).forEach(u=>u.shield+=m);logs.push(`${h.name} lähmt ${stopped.length} Gegner für eine Runde${m?' und verleiht Schild':''}.`)}draw();$('battleNote').textContent=`${h.icon} ${h.power}!`;$('battlelog').innerHTML=logs.slice(-9).map(s=>`<div>${s}</div>`).join('');$('heroPower').disabled=true;heroPower=null;selectedAction=null;renderTactics();if(!alive(foes).length){waitingForPlayer=false;$('tacticHand').classList.add('hide');schedule(end,settings.reducedMotion?100:1500)}};
 let battleHero=hero();$('heroPower').title=heroPowerDescription(battleHero,S.heroMastery)+' Einmal pro Kampf.';$('heroPower').classList.remove('hide');$('heroPower').disabled=true;$('heroPower').innerHTML=`${heroArt(battleHero,'inline')} ${battleHero.power} · ${heroPowerSummary(battleHero,S.heroMastery)} · 1×`;
 draw();[...alive(allies),...alive(foes)].filter(u=>u.shield>0||u.formationAtk).forEach(u=>unitEffect(u,allies.includes(u)?'a':'e',u.shield?'shield':'support'));$('battleNote').textContent='⚔ Der Kampf beginnt';schedule(next,500)
}
let mobileTab='route',mobilePhaseKey='';
function updateMobilePhase(){
 if(!$('mobileDock'))return;
 document.body.classList.toggle('playing',!!S);
 if(S?.tutorial&&S.phase==='shop'&&$('mobileFormation')?.classList.contains('formation-collapsed'))$('formationToggle').click();
 $('game').dataset.phase=S?.phase||'setup';
 document.body.dataset.phase=$('game').dataset.phase;
 let key=S?`${S.round}-${S.phase}`:'setup';
 if(key!==mobilePhaseKey){mobilePhaseKey=key;mobileTab='route';if(window.matchMedia('(max-width:760px)').matches&&['reward','end'].includes(S?.phase)&&!$('mobileFormation').classList.contains('formation-collapsed'))$('formationToggle').click()}
 $('mobileDock').dataset.tab=mobileTab;
 $('mobileFormation').classList.toggle('formation-compact',window.matchMedia('(max-width:760px)').matches&&S?.phase==='shop'&&!S.tutorial&&mobileTab!=='army');
 document.querySelectorAll('[data-mobile-tab]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mobileTab===mobileTab)));
}
function setupMobileLayout(){
 let css=document.createElement('link');css.rel='stylesheet';css.href='mobile.css?v=69';document.head.append(css);let strategyCss=document.createElement('link');strategyCss.rel='stylesheet';strategyCss.href='strategy.css?v=98';document.head.append(strategyCss);
 const wrap=(id,nodes,parent=$('game'))=>{let el=document.createElement('div');el.id=id;nodes.filter(Boolean).forEach(n=>el.append(n));parent.append(el);return el};
 const frontLabel=$('frontBoard').previousElementSibling,backLabel=$('backBoard').previousElementSibling,benchLabel=$('benchBoard').previousElementSibling;
 frontLabel.previousElementSibling.classList.add('formation-title');
 const formation=wrap('mobileFormation',[frontLabel,$('frontBoard'),backLabel,$('backBoard')]);
 frontLabel.innerHTML='<span>Vorne</span><button id="formationToggle" type="button" aria-expanded="true" aria-controls="frontBoard backBoard">Zuklappen</button>';
 $('formationToggle').onclick=()=>{const collapsed=formation.classList.toggle('formation-collapsed');$('formationToggle').setAttribute('aria-expanded',String(!collapsed));$('formationToggle').textContent=collapsed?'Aufstellung zeigen':'Zuklappen';frontLabel.querySelector('span').textContent=collapsed?'Formation':'Vorne'};frontLabel.classList.add('formation-label');frontLabel.insertAdjacentHTML('beforeend','<button id="synergySummary" type="button" aria-label="Synergien und fehlende Kämpfer anzeigen"></button>');
 const dock=wrap('mobileDock',[]);
 dock.insertAdjacentHTML('beforeend','<nav id="mobileTabs" aria-label="Lagerbereiche"><button data-mobile-tab="route">Pfad</button><button data-mobile-tab="army">Reserve</button><button data-mobile-tab="shop">Taverne</button><button data-mobile-tab="commands">Magie</button><button data-mobile-tab="story">Chronik</button></nav>');
 wrap('mobileRoute',[$('journeyChoice'),$('enemyIntel')],dock);
 const library=document.querySelector('.library-fold');
 const bonuses=wrap('synergyDetails',[],dock);
 $('mobileTabs').insertAdjacentHTML('beforeend','<button data-mobile-tab="synergy">Boni</button>');
 $('synergySummary').onclick=()=>{mobileTab='synergy';updateMobilePhase();if(!window.matchMedia('(max-width:760px)').matches)$('mobileTabs').scrollIntoView({behavior:'smooth',block:'nearest'})};
 wrap('mobileCommands',[$('tacticShop')],dock);
 wrap('mobileArmy',[benchLabel,$('benchBoard'),$('actions'),$('hint')],dock);
 const progress=document.createElement('details');progress.className='journey-summary';progress.innerHTML='<summary>Reiseboni und Fortschritt</summary>';progress.append($('progressPanel'));wrap('mobileStory',[$('heroBadge'),progress,$('message'),library],dock);
 dock.append($('shop'),$('reward'));
 $('offers').insertAdjacentElement('afterend',$('reroll'));
 $('shop').querySelector('.eyebrow').textContent='Rekrutierung · Basis 3 Gold · Elite 6 Gold';
 $('reroll').textContent='Rekrutierung neu würfeln · 2 ◈';
 const controls=wrap('battleControls',[$('heroPower'),$('battleViewToggle')]);
 dock.append(controls,$('tacticHand'),$('battlelog'),$('mainAction'));
 $('game').insertBefore(formation,dock);
 $('mobileTabs').addEventListener('click',e=>{let b=e.target.closest('[data-mobile-tab]');if(!b)return;mobileTab=b.dataset.mobileTab;updateMobilePhase()});
 $('game').addEventListener('click',e=>{if(!e.target.closest('[data-area]')||S?.phase!=='shop')return;if(selected){if(formation.classList.contains('formation-collapsed'))$('formationToggle').click();mobileTab='army';updateMobilePhase();let u=slotUnit(selected.where,selected.i);if(u){let t=type(u);$('hint').textContent=`${t.name} · ${t.role} · ${upgradeLabel(t,u.lv)} Wähle einen Platz zum Tauschen.`}}});
}
function setupUI(){
 document.head.insertAdjacentHTML('beforeend',`<style>.card-rule{display:block;min-height:5.7em;margin:5px 0;padding:5px;border-radius:6px;background:#0d2530;color:#d8e4df;font-size:.58rem;line-height:1.25}.upgrade-rule{display:block;margin-top:4px;padding-top:4px;border-top:1px solid #4c6670;color:#f1cf79}.unit-card.upgraded{box-shadow:inset 0 0 0 2px #102631,0 0 12px #e8c35d88}.offer-upgrade{min-height:3.6em;margin-top:5px;padding-top:4px;border-top:1px solid #57717a;color:#efd079!important;font-size:.6rem!important}.library-card{min-height:215px}.library-upgrade{min-height:4.6em;margin:5px 0 18px;color:#eacb75;font-size:.56rem;line-height:1.25}.campaign-pick{display:grid;gap:12px}.campaign-card{min-height:150px;padding:16px;text-align:left;border:2px solid #94794a;border-radius:16px;background:linear-gradient(145deg,#3b5360,#172f3a);color:#f7edd2}.campaign-card>span{font-size:2.2rem;float:left;margin-right:12px}.campaign-card b,.campaign-card small,.campaign-card em{display:block}.campaign-card b{font:800 1.08rem Georgia,serif;color:#f1d17b}.campaign-card small{margin:8px 0;color:#d4dfdc;line-height:1.4}.campaign-card em{font-style:normal;color:#a9c7cb;font-size:.75rem}.race-card .lore{min-height:5.5em;color:#b9ccca;font-size:.72rem}.tactic-hand{padding:12px;margin:10px 0;border:1px solid #68838a;border-radius:14px;background:#102a35}.turn-head{display:flex;justify-content:space-between;margin-bottom:9px;color:#f0d47f}.tactic-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:9px}.tactic-card{position:relative;min-height:126px;padding:8px 5px;border:2px solid #698a95;border-radius:12px;background:linear-gradient(155deg,#365968,#172e39);color:#f7efd7}.tactic-card>i{position:absolute;left:-5px;top:-7px;width:25px;height:25px;display:grid;place-items:center;border-radius:50%;background:#367bb0;border:2px solid #b8dff4;font-style:normal;font-weight:900}.tactic-card>span,.tactic-card>b,.tactic-card>small{display:block}.tactic-card>span{font-size:1.6rem}.tactic-card>b{font-size:.72rem;color:#efd079}.tactic-card>small{font-size:.59rem;line-height:1.25;color:#d1dfdd;margin-top:6px}@media(max-width:400px){.library-card{min-height:220px}}</style>`);
 document.head.insertAdjacentHTML('beforeend',`<style>.chronicle-bonuses{display:block;margin-top:7px;color:#e9ca76;font-size:.78rem}.reward-title{padding:10px 4px 5px}.reward-title span,.reward-title small{display:block}.reward-title span{font:800 1.15rem Georgia,serif;color:#f2d27d}.reward-title small{margin-top:3px;color:#aec4c7}.reward-card{display:grid;grid-template-columns:48px 1fr;gap:10px;align-items:center;min-height:112px;border-width:2px;background:linear-gradient(145deg,#315461,#162f3a)}.reward-card>span{text-align:left}.reward-card small,.reward-card b,.reward-card em{display:block}.reward-card small{text-transform:uppercase;letter-spacing:.08em;font-size:.64rem;color:#9fc3c7}.reward-card b{margin:3px 0;color:#f1d17b;font:800 1rem Georgia,serif}.reward-card em{font-style:normal;font-size:.78rem;line-height:1.35;color:#d7e1de}.reward-icon{font-size:2rem;text-align:center!important}.boss-reward{border-color:#d5aa52;background:linear-gradient(145deg,#51452f,#203842);box-shadow:0 0 13px #d4a74333}.tactic-card.improved{border-color:#e4bf60;box-shadow:0 0 9px #e4bf6044}</style>`);
 document.head.insertAdjacentHTML('beforeend','<style>.reward-card{cursor:pointer;pointer-events:auto}.reward-card:hover,.reward-card:focus-visible{border-color:#f1cc6b;box-shadow:0 0 0 3px #765d2c,0 0 18px #e7bd5b77;transform:translateY(-2px)}</style>');
 document.head.insertAdjacentHTML('beforeend',`<style>.hero-line{display:grid;grid-template-columns:34px 1fr;gap:8px;align-items:center;margin:10px 0;padding:9px;border-radius:10px;background:#102b35;color:#d9e3df;font-size:.82rem;line-height:1.35}.hero-line i{font-style:normal;font-size:1.5rem}.hero-line b{display:block;color:#edce78}.journey-choice{margin:10px 0;padding:11px;border:1px solid #6c8790;border-radius:13px;background:#112b35}.journey-head{display:flex;justify-content:space-between;gap:8px;margin-bottom:8px}.journey-head small{color:#abc1c4;text-align:right}.path-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.path-card{min-height:90px;padding:9px;border:2px solid #60828b;border-radius:11px;background:#244653;color:#f5ecd7}.path-card span,.path-card b,.path-card small{display:block}.path-card span{font-size:1.5rem}.path-card small{margin-top:5px;color:#bfd0ce;font-size:.68rem}.path-card.risky{border-color:#a86c59;background:#4a3438}.path-card.chosen{border-color:#f0cc70;box-shadow:0 0 0 2px #735d2e,0 0 12px #efc96755;transform:translateY(-2px)}.journey-boss{display:grid;grid-template-columns:42px 1fr;gap:8px;align-items:center}.journey-boss>span{font-size:2rem}.journey-boss b,.journey-boss small{display:block}.journey-boss small{color:#c8d6d3;margin-top:4px}.library-fold{margin-top:14px;border:1px solid #506d76;border-radius:12px;background:#122c36}.library-fold summary{display:flex;justify-content:space-between;align-items:center;padding:12px;cursor:pointer;list-style:none}.library-fold summary::-webkit-details-marker{display:none}.library-fold summary b,.library-fold summary small{display:block}.library-fold summary b{color:#e6c873}.library-fold summary small{color:#a9bec2}.library-fold .library-grid{padding:0 9px 10px}.epilogue{display:block;padding:14px;border-left:3px solid #e2bf66;background:#132d37;color:#e9e2cb;font:italic 1rem/1.55 Georgia,serif}.chronicle-result{display:block;margin-top:10px;color:#e3c66f}.combat-result{position:sticky;bottom:8px;z-index:20;box-shadow:0 8px 25px #07151dcc}@media(max-width:400px){.path-grid{grid-template-columns:1fr}.journey-head{display:block}.journey-head small{text-align:left;display:block;margin-top:3px}}</style>`);
 document.head.insertAdjacentHTML('beforeend',`<style>.army-limit{display:block;margin:9px 0;padding:7px 9px;border:1px solid #806d43;border-radius:9px;background:#302f2b;color:#f0d17b;font-size:.78rem}.capacity-locked{border-style:solid;border-color:#435b63;background:repeating-linear-gradient(135deg,#102832,#102832 8px,#152f39 8px,#152f39 16px);opacity:.68}.capacity-locked .muted{color:#b5c3c3}.bench{grid-template-columns:repeat(3,1fr)}</style>`);
 document.head.insertAdjacentHTML('beforeend',`<style>.battle-mode .row-label,.battle-mode #frontBoard,.battle-mode #backBoard,.battle-mode #benchBoard,.battle-mode #actions,.battle-mode #shop{display:none}.battle-mode .arena{height:390px}.battle-steps{display:block;padding:8px 10px;border-left:3px solid #efca6b;background:#142e38;color:#dce8e2;font-size:.82rem}.battle-steps b{color:#f0d17a}.turn-help{display:block;margin-top:3px;color:#b8ced0;font-size:.68rem}.offer.sold{border-style:dashed;color:#9db3b7;background:#17313a}.offer.sold .symbol{color:#82d0a0}.next-step{outline:3px solid #f1c85b;outline-offset:3px;box-shadow:0 0 0 4px #725728,0 0 18px #f1c85b99!important;animation:nextPulse 1.5s ease-in-out infinite}@keyframes nextPulse{50%{box-shadow:0 0 0 4px #8d6a2b,0 0 25px #f1c85bbb!important}}.reduced-motion .next-step{animation:none!important}@media(max-width:400px){.battle-mode .arena{height:350px}.battle-mode .arena-grid{inset:18px 5px}.battle-mode .battle-cell .figure{font-size:1.6rem}.battle-mode .tactic-card{min-height:108px}}</style>`);
 $('message').insertAdjacentHTML('beforebegin','<div class="hero-badge" id="heroBadge"></div>');
 $('arena').insertAdjacentHTML('beforebegin','<button class="btn secondary battle-view-toggle hide" id="battleViewToggle">⚔ Kampf ansehen</button>');
 $('arena').insertAdjacentHTML('beforeend','<button class="btn hero-power hide" id="heroPower"></button>');
 $('arena').insertAdjacentHTML('afterend','<div id="journeyChoice" class="journey-choice hide"></div><div id="enemyIntel" class="intel"></div><div id="tacticHand" class="tactic-hand hide"></div>');
 $('enemyIntel').insertAdjacentElement('afterend',$('mainAction'));
 $('heroBadge').insertAdjacentHTML('afterend','<div id="progressPanel"></div>');
 $('offers').insertAdjacentHTML('afterend','<div id="tacticShop"></div>');
 document.head.insertAdjacentHTML('beforeend','<style>.mana-deck{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:10px 0;padding:10px;border:1px solid #52717a;border-radius:12px;background:#122e39}.mana-deck b,.mana-deck small{display:block}.mana-deck b{color:#72c8ed}.mana-deck small{margin-top:3px;color:#b8cccd;font-size:.7rem}.mana-shop{margin:10px 0;border:1px solid #52717a;border-radius:12px;background:#102b35}.mana-shop>header{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:10px}.mana-shop>header b,.mana-shop>header small{display:block}.mana-shop>header b{color:#72c8ed}.mana-shop>header small{margin-top:3px;color:#b8cccd;font-size:.68rem}.tactic-shop-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:7px;padding:0 8px 8px}.tactic-buy{display:grid;gap:4px;padding:8px;border:1px solid #5d7b82;border-radius:9px;background:#1a3945}.tactic-buy>b{color:#efd079;font-size:.75rem}.tactic-buy>small{min-height:2.4em;color:#c4d4d2;font-size:.63rem}.tactic-buy>.symbol{font-size:1.5rem}.battle-speed{position:absolute;right:8px;top:8px;z-index:6;font-size:.68rem;padding:6px 8px}.tactic-hand{position:relative}.tactic-card:disabled{filter:saturate(.45);opacity:.58}.battle-note{transition:transform .2s,background .2s}.battle-note.flash{transform:scale(1.04);background:#375766}.battle-view-toggle{position:sticky;top:8px;z-index:45;margin:5px 0}.battle-pop-open .arena{position:fixed;z-index:40;top:58px;left:50%;transform:translateX(-50%);width:min(720px,calc(100vw - 20px));height:min(520px,calc(100vh - 76px);margin:0;padding:12px;border:3px solid #e2bf66;border-radius:18px;background:#102832;box-shadow:0 18px 60px #02090dcc}.battle-pop-open:after{content:"";position:fixed;z-index:35;inset:0;background:#03131acc}.battle-pop-open .battle-view-toggle{position:fixed;z-index:60;top:68px;right:calc(50% - min(360px,50vw - 10px));margin:0}.battle-pop-open .arena-grid{inset:38px 18px 32px}.battle-pop-open .hero-power{bottom:18px}@media(max-width:600px){.tactic-shop-grid{grid-template-columns:1fr}.battle-pop-open .arena{top:50px;height:min(500px,calc(100vh - 64px));width:calc(100vw - 12px)}.battle-pop-open .battle-view-toggle{top:58px;right:18px}.battle-pop-open .arena-grid{inset:42px 8px 30px}}</style>');
 document.head.insertAdjacentHTML('beforeend','<style>.battle-pop-open .arena{height:min(520px,calc(100vh - 76px));margin:0;padding:12px}</style>');
 document.head.insertAdjacentHTML('beforeend','<style>.battle-pop-open #tacticHand{display:block!important;position:fixed;z-index:61;left:50%;bottom:8px;transform:translateX(-50%);width:min(720px,calc(100vw - 12px));max-height:245px;overflow:auto;margin:0;border:2px solid #e2bf66;box-shadow:0 10px 36px #02090dcc}.battle-pop-open #tacticHand .next-step{outline-color:#f6d574}.battle-pop-open #battleFast{z-index:62}.battle-pop-open #heroPower{z-index:62}@media(max-width:600px){.battle-pop-open .arena{height:calc(100vh - 285px);min-height:270px}.battle-pop-open #tacticHand{max-height:250px}.battle-pop-open .arena-grid{inset:34px 7px 26px}}</style>');
 document.head.insertAdjacentHTML('beforeend','<style>.race-story{display:block;margin:9px 0;padding:9px 10px;border-left:3px solid #79bfa0;background:#15333a;color:#d4e4dd;font-size:.78rem;line-height:1.4}.race-story b{color:#efd079}</style>');
 document.head.insertAdjacentHTML('beforeend','<style>.battle-pop-open #tacticHand.hide{display:none!important}</style>');
 document.head.insertAdjacentHTML('beforeend','<style>.progress-fold{margin:8px 0;border:1px solid #506d76;border-radius:11px;background:#122d37}.progress-fold summary{padding:8px 10px;color:#e7c971;cursor:pointer}.progress-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:5px;padding:0 9px 9px}.progress-grid span{padding:6px;border-radius:7px;background:#1b3a44;color:#bcd0cc;font-size:.65rem}.progress-grid b{display:block;color:#f0d17a;font-size:.82rem}.synergy-line{display:block;margin-top:7px;color:#9de1b2;font-size:.75rem}@media(max-width:400px){.progress-grid{grid-template-columns:repeat(2,1fr)}}</style>');
 document.head.insertAdjacentHTML('beforeend','<style>.objective-line{display:block;margin-top:7px;padding:7px 9px;border-left:3px solid #e2bf66;background:#203943;color:#f0d17a;font-size:.76rem}.deck-off{opacity:.55;border-style:dashed}</style>');
 document.querySelector('.panel .eyebrow[style]')?.replaceChildren(document.createTextNode('Deine Kartenaufstellung · vorne deckt hinten'));
}
function beginSetup(){clearCardEffects();battleToken++;clearTimeout(timer);timer=null;pendingStep=null;heroPower=null;paused=false;selected=null;$('tacticHand').classList.add('hide');$('heroPower').classList.add('hide');$('game').classList.remove('battle-mode','battle-pop-open');S=null;renderCampaignProgress();updateMobilePhase();chosenRace=null;chosenHero=null;chosenCampaign=null;heroChoices=[];$('game').classList.add('hide');$('intro').classList.remove('hide');showRaceChoice()}
function showRaceChoice(){chosenRace=null;chosenCampaign=null;applyWorldTheme();applyCosmetic();$('intro').innerHTML=`<div class="eyebrow">Neue Chronik</div><button class="back-link" onclick="showTrophies()">🏆 Erfolge & Freischaltungen</button><button class="btn full" onclick="startTutorial()">${campaignArt({id:"tutorial",name:"Übungslager"},"inline")} Tutorial-Kampagne · Spielen lernen</button><h1>Wähle dein Fantasy-Volk</h1><p>Jedes Volk besitzt eine eigene Geschichte, fünfzehn Kämpferkarten und einen klaren Spielstil.</p>${window.BANNERWACHT_PROGRESS_RESET_APPLIED?'<p role="status">Zum Start der Vollversion wurden Test-Spielstände, Freischaltungen und Erfolge einmalig zurückgesetzt.</p>':''}<div class="race-pick">${RACES.map(r=>`<button class="race-card" data-race="${r.id}" style="--race:${r.color}"><span>${factionArt(r,"portrait")}</span><b>${r.name}</b>${["elves","orcs"].includes(r.id)?'<small class="race-difficulty">Schwer</small>':''}<small>${r.text}</small><small class="lore">${r.lore}</small></button>`).join('')}</div>`;document.querySelectorAll('[data-race]').forEach(b=>b.onclick=()=>{chosenRace=b.dataset.race;heroChoices=[...HEROES.filter(h=>h.race===chosenRace&&heroUnlocked(h))].sort(()=>Math.random()-.5).slice(0,3);showHeroChoice()})}
function showHeroChoice(){applyWorldTheme();let race=RACES.find(r=>r.id===chosenRace);$('intro').innerHTML=`<button class="back-link" id="raceBack">← Volk ändern</button><div class="eyebrow">${race.icon} ${race.name}</div><h1>Wähle aus drei zufälligen Helden</h1><p>Jeder Held bringt Herkunft, einen dauerhaften Armee-Bonus und eine besondere Fähigkeit mit.</p><div class="hero-pick">${heroChoices.map(h=>`<button class="hero-card" data-hero="${h.id}"><span class="symbol">${heroArt(h,"portrait")}</span><strong>${h.name}</strong><small>${h.title}</small><small>${h.name} wurde durch ${race.name} geprägt und verfolgt ein eigenes Ziel.</small><em>${h.power}</em><small>${h.text}</small><span class="passive">${h.passive}</span></button>`).join('')}</div><button class="btn full" id="start" disabled>Held auswählen</button>`;$('raceBack').onclick=showRaceChoice;document.querySelectorAll('[data-hero]').forEach(b=>b.onclick=()=>{chosenHero=b.dataset.hero;document.querySelectorAll('[data-hero]').forEach(x=>x.classList.toggle('chosen',x===b));$('start').disabled=false;$('start').textContent='Kampagne wählen'});$('start').onclick=()=>{if(chosenHero)showCampaignChoice()}}
function showCampaignChoice(){$('intro').innerHTML=`<button class="back-link" id="heroBack">← Held ändern</button><div class="eyebrow">Sechs Kampagnen · 12 bis 24 Kapitel</div><h1>Wähle deine Chronik</h1><button class="btn full" onclick="startTutorial()">${campaignArt({id:"tutorial",name:"Übungslager"},"inline")} Tutorial-Kampagne · 3 geführte Abschnitte</button><p>Jedes Volk schaltet seine sechs Kampagnen einzeln und nacheinander frei. Ein Sieg in der vierten Kampagne schaltet seine legendäre Karte dauerhaft frei.</p><div class="campaign-pick">${CAMPAIGNS.map(c=>{let open=campaignUnlocked(c.id);return `<button class="campaign-card ${open?'':'campaign-locked'}" data-campaign="${c.id}" ${open?'':'disabled'}>${campaignArt(c)}<span class="campaign-status">${open?'':'🔒'}</span><b>${c.name}</b><small>${c.text}</small><em>${campaignDifficulty(c)}</em><small class="campaign-unlock">${open?((profile.campaigns[chosenRace+':'+c.id]||0)>0?'🏆 Bereits abgeschlossen · erneut spielen':'✓ Freigeschaltet'):'Noch abschließen: '+campaignRequirement(c)}</small><em>${campaignLength(c.id)} Kapitel · Bosse in Kapitel ${bossChapters({journeyLength:campaignLength(c.id)}).join(", ")}</em></button>`}).join('')}</div>`;$('heroBack').onclick=showHeroChoice;document.querySelectorAll('[data-campaign]').forEach(b=>b.onclick=()=>{if(!campaignUnlocked(b.dataset.campaign))return;chosenCampaign=b.dataset.campaign;restart()})}

setupUI();
setupMobileLayout();
$('merge').onclick=merge;$('sell').onclick=sellSelected;$('reroll').onclick=()=>{if(S.phase==='shop'&&!S.offers.every((id,i)=>id&&S.offerLocks?.[i])&&(S.freeReroll||S.gold>=2)){if(S.freeReroll)S.freeReroll=false;else S.gold-=2;roll()}};
$('menuResume').insertAdjacentHTML('beforebegin','<button class="btn secondary full" id="trophiesOpen">🏆 Erfolge & Kartenstile</button>');$('trophiesOpen').onclick=()=>{closeMenu();showTrophies()};
$('menuOpen').onclick=()=>{paused=true;clearTimeout(timer);timer=null;$('menu').showModal()};$('menuClose').onclick=closeMenu;$('menuResume').onclick=closeMenu;$('menu').addEventListener('cancel',e=>{e.preventDefault();closeMenu()});
$('soundSetting').onchange=e=>{settings.sound=e.target.checked;applySettings();if(settings.sound)beep('heal')};$('speedSetting').onchange=e=>{settings.speed=e.target.value;applySettings()};$('motionSetting').onchange=e=>{settings.reducedMotion=e.target.checked;applySettings()};
$('resetAsk').onclick=()=>{$('resetConfirm').classList.remove('hide');$('resetYes').focus()};$('resetCancel').onclick=()=>{$('resetConfirm').classList.add('hide');$('resetAsk').focus()};$('resetYes').onclick=()=>{if(S?.tutorial){closeMenu();exitTutorial();return}localStorage.removeItem('bannerwacht-v2');closeMenu();beginSetup()};
$('heroPower').onclick=()=>heroPower?.();
$('battleViewToggle').onclick=()=>{let open=$('game').classList.toggle('battle-pop-open');$('battleViewToggle').textContent=open?'⌃ Kampf minimieren':'⚔ Kampf ansehen'};
applySettings();S=load();if(S){if(S.defeated===false&&recordCampaignVictory(S))save();chosenRace=S.race;chosenHero=S.hero;render()}else beginSetup();

function fortressPressure(u){const team=S.team.filter(Boolean);return testedBalanceActive()&&type(u).role==='Schutz'&&team.filter(v=>type(v).role==='Schutz').length>=2&&team.filter(v=>type(v).role==='Heilung').length>=2?(['humans','undead'].includes(S.race)?2:1):0}
