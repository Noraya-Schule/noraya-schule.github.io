function validateBannerwachtBackup(text) {
  if(typeof text!=='string'||text.length>1000000)throw new Error('Die Sicherung ist zu groß oder ungültig.');
  const parsed=JSON.parse(text), s=parsed.storage;
  const epoch=window.BANNERWACHT_PROGRESS_EPOCH||'legacy';
  if(epoch!=='legacy'&&parsed.progressEpoch!==epoch)throw new Error('Diese Sicherung stammt aus der Testphase und kann in der Vollversion nicht wiederhergestellt werden.');
  const keys=['bannerwacht-v2','bannerwacht-profile-v1','bannerwacht-settings','bannerwacht-tutorial-seen'];
  if(parsed.format!=='bannerwacht-save'||parsed.version!==1||!s||Array.isArray(s)||Object.keys(s).length!==keys.length||!keys.every(k=>Object.hasOwn(s,k)&&(s[k]===null||typeof s[k]==='string')))throw new Error('Keine unterstützte Bannerwacht-Sicherung.');
  // All imported values are data. Never allow markup strings into game templates.
  for(const k of keys)if(s[k]!==null&&(/[<>]|__proto__|constructor|prototype/.test(s[k])))throw new Error('Ungültige Daten in der Sicherung.');
  if(s['bannerwacht-v2']){
    const run=JSON.parse(s['bannerwacht-v2']);
    if(!run||!['humans','elves','orcs','undead'].includes(run.race)||!Number.isInteger(run.round)||run.round<1||run.round>([12,16,24].includes(run.journeyLength)?run.journeyLength:12)||!Array.isArray(run.team)||run.team.length!==6||!Array.isArray(run.bench)||run.bench.length!==9)throw new Error('Ungültiger Kampagnen-Spielstand.');
    if(!HEROES.some(h=>h.id===run.hero&&h.race===run.race)||!CAMPAIGNS.some(c=>c.id===run.campaign)||!Number.isFinite(run.gold)||run.gold<0||!Number.isFinite(run.life)||run.life<0)throw new Error('Ungültige Kampagnendaten.');
    if(!['shop','battle','reward','end'].includes(run.phase))throw new Error('Ungültige Spielphase.');
    for(const u of [...run.team,...run.bench])if(u!==null&&(!u||!TYPES.some(t=>t.id===u.id)||!Number.isInteger(u.lv)||u.lv<1||u.lv>3||(u.spec&&!/^[a-z]+$/.test(u.spec))))throw new Error('Ungültige Einheit.');
  }
  if(s['bannerwacht-profile-v1']){const p=JSON.parse(s['bannerwacht-profile-v1']);if(!p||p.version!==1||(p.skin&&!/^[a-z0-9_-]+$/.test(p.skin)))throw new Error('Ungültiges Profil.');}
  if(s['bannerwacht-settings']){const p=JSON.parse(s['bannerwacht-settings']);if(!p||typeof p!=='object'||Array.isArray(p))throw new Error('Ungültige Einstellungen.');}
  if(s['bannerwacht-tutorial-seen']!==null&&s['bannerwacht-tutorial-seen']!=='1')throw new Error('Ungültiger Tutorialstatus.');
  return s;
}
