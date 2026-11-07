// The build helper keeps this version in sync with VERSION before packaging.
(() => {
  const version = '2.0.1';
  const firstFullVersion = '2.0.0';
  const epoch = 'full-release-1';
  const marker = 'bannerwacht-progress-epoch';
  const atLeast = (a,b) => {
    const left=a.split('.').map(Number),right=b.split('.').map(Number);
    for(let i=0;i<3;i++){if(left[i]!==right[i])return left[i]>right[i];}
    return true;
  };
  const active=atLeast(version,firstFullVersion);
  window.BANNERWACHT_PROGRESS_EPOCH=active?epoch:'legacy';
  if(!active||localStorage.getItem(marker)===epoch)return;
  // Keep user settings and unrelated application data; reset all game progress.
  const progress=['bannerwacht-v1','bannerwacht-v2','bannerwacht-tutorial','bannerwacht-profile-v1','bannerwacht-tutorial-seen'];
  const hadProgress=progress.some(key=>localStorage.getItem(key)!==null);
  for(const key of progress)localStorage.removeItem(key);
  // Mark completion only after every progress key has been removed.
  localStorage.setItem(marker,epoch);
  window.BANNERWACHT_PROGRESS_RESET_APPLIED=hadProgress;
})();
