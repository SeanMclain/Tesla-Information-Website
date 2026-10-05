let researchTopic='optimus';
const RESEARCH_LABELS={optimus:'Optimus',facilities:'Facilities & buildings',designs:'Famous designs',autonomy:'Autonomy and FSD',batteries:'Batteries',energy:'Energy',charging:'Charging'};
const CLAIM_TAGS={company_claim:['official_company','Company source'],regulator_finding:['regulator_government','Regulator'],independent_reporting:['independent_reporting','Independent reporting'],patent_claim:['patent_record','Patent record'],measured_spec:['measured_spec','Measured spec']};
function claimMarkup(claims){
 if(!claims||!claims.length)return '';
 return `<ul class="claim-list">${claims.map(c=>{const tag=CLAIM_TAGS[c.tag]||['untagged',c.tag||'Untagged'];return `<li><span class="claim-value">${galleryEscape(String(c.value))}</span><span class="claim-name">${galleryEscape(c.name||'')}</span><span class="claim-badge" data-source-class="${galleryEscape(tag[0])}">${galleryEscape(tag[1])}</span><span class="claim-asof">As of ${galleryEscape(c.as_of||'unspecified')}</span><span class="claim-status">${c.inherited?'Inherited':'Rechecked'}</span></li>`}).join('')}</ul>`;
}
function renderResearch(){
 const notes={
  optimus:'A historical comparison of Gen 1 and Gen 2 prototypes, plus the Q2 2026 line-installation update. Demonstrations and factory installation do not establish commercial availability.',
  autonomy:'FSD (Supervised) requires an attentive driver. Company claims sit beside regulator findings and independent reporting. Inherited figures were not rechecked on the live page. The October 2, 2026 snapshot date is unchanged.',
  batteries:'Patent text describes a claimed invention, not a confirmed production cell. Installed capacity is not actual output.',
  energy:'Deployment totals and installed-capacity rows are dated company disclosures. A later row does not erase an earlier one. The Q3 2026 financial update was not published on the October 2 snapshot date.',
  charging:'The checked connector count is the Q2 2026 operational table. Later support-page totals stay inherited until that page is rechecked.',
  designs:'Semi and both Roadsters include corpus milestones. Target specifications are not delivered-vehicle tests. Historical vehicle years in the archive are unchanged.'
 };
 $('researchTabs').innerHTML=Object.entries(RESEARCH_LABELS).map(([id,label])=>`<button type="button" data-topic="${id}" class="${id===researchTopic?'active':''}" aria-pressed="${id===researchTopic}">${label}</button>`).join('');
 $('researchContent').innerHTML=`${notes[researchTopic]?`<p class="research-note">${notes[researchTopic]}</p>`:''}<div class="research-grid">${RESEARCH[researchTopic].map(p=>`<article class="research-card">${p.image?`<button class="research-photo" data-photo="${p.id}" aria-label="Expand ${galleryEscape(p.title)} photo"><img src="${p.image}" alt="${galleryEscape(p.title)}" loading="lazy" decoding="async"></button>`:''}<div class="research-body"><p class="research-date">${galleryEscape(p.date)}</p><h3>${galleryEscape(p.title)}</h3><p>${galleryEscape(p.summary)}</p>${claimMarkup(p.claims)}<a class="source" href="${p.source}" target="_blank" rel="noopener">${p.id.startsWith('optimus-gen')?'Watch / read the demonstration':'Research source'}</a>${p.image&&p.photoSource?`<a class="source" href="${p.photoSource}" target="_blank" rel="noopener">Photo credit</a>`:''}${p.model?`<button class="jump design-jump" data-vehicle="${p.model}">Explore vehicle photos</button>`:''}</div></article>`).join('')}</div>`;
 $('researchContent').querySelectorAll('.research-photo img').forEach(img=>{
  const photo=RESEARCH[researchTopic].find(x=>x.id===img.closest('[data-photo]')?.dataset.photo);
  if(!photo)return;
  img.addEventListener('error',()=>{
   const button=img.closest('.research-photo');
   if(!button||button.dataset.unavailable)return;
   button.dataset.unavailable='1';
   const panel=unavailableNode({title:photo.title,era:photo.date,source:photo.photoSource||photo.source});
   panel.classList.add('research-unavailable');
   button.replaceWith(panel);
  });
  if(img.complete&&img.naturalWidth===0)img.dispatchEvent(new Event('error'));
 });
}
$('researchTabs').addEventListener('click',e=>{const b=e.target.closest('[data-topic]');if(b){researchTopic=b.dataset.topic;renderResearch();$('researchTabs').querySelector(`[data-topic="${researchTopic}"]`).focus();}});
$('researchContent').addEventListener('click',e=>{const b=e.target.closest('[data-vehicle]');if(b){selected=b.dataset.vehicle;year=2026;historyMode='push';render();$('explore').scrollIntoView();}const pic=e.target.closest('[data-photo]');if(pic){const p=RESEARCH[researchTopic].find(x=>x.id===pic.dataset.photo);openPhotoViewer([{src:p.image,title:p.title,era:p.photoCaption||p.date,source:p.photoSource||p.source}],0,pic);}});
renderResearch();
