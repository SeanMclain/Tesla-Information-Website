let researchTopic='optimus';
const RESEARCH_LABELS={optimus:'Optimus',facilities:'Facilities & buildings',designs:'Famous designs',autonomy:'Autonomy and FSD',batteries:'Batteries',energy:'Energy',charging:'Charging'};
const CLAIM_TAGS={company_claim:['official_company','Company source'],regulator_finding:['regulator_government','Regulator'],independent_reporting:['independent_reporting','Independent reporting'],patent_claim:['patent_record','Patent record'],measured_spec:['measured_spec','Measured spec']};
function claimMarkup(claims){
 if(!claims||!claims.length)return '';
 return `<ul class="claim-list">${claims.map(c=>{const tag=CLAIM_TAGS[c.tag]||['untagged',c.tag||'Untagged'];return `<li><span class="claim-value">${galleryEscape(String(c.value))}</span><span class="claim-name">${galleryEscape(c.name||'')}</span><span class="claim-badge" data-source-class="${galleryEscape(tag[0])}">${galleryEscape(tag[1])}</span><span class="claim-asof">As of ${galleryEscape(c.as_of||'unspecified')}</span><span class="claim-status">${c.inherited?'Inherited':'Rechecked'}</span></li>`}).join('')}</ul>`;
}
function videoMarkup(p){if(!p.video)return '';const id=String(p.video).replace(/[^A-Za-z0-9_-]/g,'');if(!id)return '';return `<figure class="research-video"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${galleryEscape(p.videoTitle||p.title)}" loading="lazy" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe><figcaption>${galleryEscape(p.videoLabel||'Video')}</figcaption></figure>`;}
function renderResearch(){
 const notes={
  optimus:'Two Elon Musk lines from the October 10, 2024 We, Robot night sit beside Gen 1, Gen 2, and the Q2 2026 factory update. Quotes and stage targets are not commercial availability, and they are not a Cybercab purchase price.',
  autonomy:'FSD (Supervised) is Tesla’s customer driver aid. It is not Robotaxi and it does not make the vehicle autonomous. Videos stay on YouTube. A driver recording is not a Tesla test.',
  batteries:'Patent text describes a claimed invention, not a confirmed production cell. Installed capacity is not actual output.',
  energy:'Deployment totals and installed-capacity rows are dated company disclosures. A later row does not erase an earlier one. The Q3 2026 financial update was not published on the October 2 snapshot date.',
  charging:'The checked connector count is the Q2 2026 operational table. Later support-page totals stay inherited until that page is rechecked.',
  designs:'Semi and both Roadsters include corpus milestones. Target specifications are not delivered-vehicle tests. Historical vehicle years in the archive are unchanged.'
 };
 const topicButtons=Object.entries(RESEARCH_LABELS).map(([id,label])=>`<a href="#research-${id}" data-topic="${id}" class="${id===researchTopic?'active':''}" aria-current="${id===researchTopic?'true':'false'}">${label}</a>`).join('');
$('researchIndex').innerHTML=topicButtons;
$('researchTabs').innerHTML=Object.entries(RESEARCH_LABELS).map(([id,label])=>`<button type="button" data-topic="${id}" class="${id===researchTopic?'active':''}" aria-pressed="${id===researchTopic}">${label}</button>`).join('');
$('research').dataset.topic=researchTopic;
 $('researchContent').innerHTML=`${notes[researchTopic]?`<p class="research-note">${notes[researchTopic]}</p>`:''}<div class="research-grid">${RESEARCH[researchTopic].map(p=>`<article class="research-card" id="card-${p.id}">${p.image?`<button class="research-photo" data-photo="${p.id}" aria-label="Expand ${galleryEscape(p.title)} photo"><img src="${p.image}" alt="${galleryEscape(p.title)}" loading="lazy" decoding="async"></button>`:''}<div class="research-body"><p class="research-date">${galleryEscape(p.date)}</p><h3>${galleryEscape(p.title)}</h3>${videoMarkup(p)}${p.quote?`<blockquote class="musk-quote"><p>${galleryEscape(p.quote)}</p><footer>${galleryEscape(p.quoteAttribution||'Elon Musk')}</footer></blockquote>`:''}<p>${galleryEscape(p.summary)}</p>${claimMarkup(p.claims)}<a class="source" href="${p.source}" target="_blank" rel="noopener">${p.id.startsWith('optimus-gen')?'Watch / read the demonstration':'Research source'}</a>${p.image&&p.photoSource?`<a class="source" href="${p.photoSource}" target="_blank" rel="noopener">Photo credit</a>`:''}${p.model?`<button class="jump design-jump" data-vehicle="${p.model}">Explore vehicle photos</button>`:''}</div></article>`).join('')}</div>`;
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
function chooseResearch(id,focusTabs){if(!RESEARCH_LABELS[id])return;researchTopic=id;renderResearch();const target=focusTabs?$('researchTabs').querySelector(`[data-topic="${researchTopic}"]`):$('researchIndex').querySelector(`[data-topic="${researchTopic}"]`);target?.focus();}
$('researchTabs').addEventListener('click',e=>{const b=e.target.closest('[data-topic]');if(b)chooseResearch(b.dataset.topic,true);});
$('researchIndex').addEventListener('click',e=>{const a=e.target.closest('[data-topic]');if(!a)return;e.preventDefault();chooseResearch(a.dataset.topic,false);$('researchContent').scrollIntoView({block:'start'});});
$('researchContent').addEventListener('click',e=>{const b=e.target.closest('[data-vehicle]');if(b){selected=b.dataset.vehicle;year=2026;historyMode='push';render();$('explore').scrollIntoView();}const pic=e.target.closest('[data-photo]');if(pic){const p=RESEARCH[researchTopic].find(x=>x.id===pic.dataset.photo);openPhotoViewer([{src:p.image,title:p.title,era:p.photoCaption||p.date,source:p.photoSource||p.source}],0,pic);}});
renderResearch();
