const SOURCES={
 ct:'https://www.tesla.com/cybertruck/design',ctspec:'https://www.tesla.com/cybertruck',ctlaunch:'https://www.investing.com/news/stock-market-news/tesla-to-deliver-cybertrucks-after-musk-tempers-expectations-3246654',ct2019:'https://insideevs.com/news/744506/tesla-cybertruck-foundation-series-inventory/',ct25:'https://www.reuters.com/business/autos-transportation/tesla-raises-prices-cybertrucks-us-2026-08-25/',ctfoundation:'https://insideevs.com/news/744506/tesla-cybertruck-foundation-series-inventory/',
 m3:'https://www.cars.com/research/tesla-model_3/',my:'https://www.cars.com/research/tesla-model_y/',ms:'https://www.cars.com/research/tesla-model_s/',mx:'https://www.cars.com/research/tesla-model_x/',
 m3spec:'https://www.tesla.com/model3',m3price:'https://www.cars.com/research/tesla-model_3-2026/trims/',myspec:'https://www.tesla.com/modely',myprice:'https://www.tesla.com/en_pr/modely/design?redirect=no',myrange:'https://www.cars.com/articles/whats-the-tesla-model-ys-range-523951/',sxspec:'https://www.cars.com/articles/discontinued-tesla-model-s-model-x-now-significantly-more-expensive-523441/',history3:'https://www.jdpower.com/cars/history/tesla/model-3',raven:'https://ev-inventory.com/model-history/MX',refresh3:'https://en.wikipedia.org/wiki/Tesla_Model_3',refreshy:'https://ir.tesla.com/_flysystem/s3/sec/000162828025002993/tsla-20250129-gen.pdf',refreshsx:'https://www.reuters.com/business/autos-transportation/tesla-upgrades-its-model-s-x-cars-us-raises-prices-by-5000-2025-06-13/',ctbase:'https://www.caranddriver.com/news/a70434823/tesla-cybertruck-base-awd-details/'
};
const MODELS=[
 {id:'ct',name:'Cybertruck',body:'Electric pickup',signature:'Stainless steel. A completely different direction.',photo:'cybertruck-production',era:'Production design · 2023–2026',trims26:[['Dual Motor AWD',74990,325,'4.1','Dual-motor AWD','Adaptive damping; simpler cabin'],['Premium AWD',84990,325,'4.1','Dual-motor AWD','Air suspension; premium cabin'],['Cyberbeast',99990,320,'2.6*','Tri-motor AWD','Highest performance; air suspension']],specSources:['ct','ctspec','ctbase'],years:[
 [2019,39900,69900,'Concept reveal','Single / Dual / Tri Motor (proposed)','Concept revealed; pricing and specifications were targets, not production promises.','ct2019'],
 [2020,null,null,'Development','Not in production','Development continued. No retail production model for this year.','ctlaunch'],
 [2021,null,null,'Development','Not in production','Preproduction development. No delivered retail model-year lineup.','ctlaunch'],
 [2022,null,null,'Preproduction','Not in production','Factory preparations; still no customer production deliveries.','ctlaunch'],
 [2023,99990,119990,'First deliveries','Foundation AWD / Foundation Cyberbeast','Deliveries began November 30; Foundation packages added $20,000.','ctfoundation'],
 [2024,79990,99990,'Production expands','AWD / Cyberbeast','Non-Foundation orders opened; Foundation editions cost $20,000 more.','ctfoundation'],
 [2025,69990,114990,'Lineup changes','Long Range RWD / AWD / Cyberbeast','Short-lived RWD variant; Cyberbeast price rose in August.','ct25'],
 [2026,74990,99990,'Three-trim lineup','Dual Motor AWD / Premium AWD / Cyberbeast','Base AWD added; August price increase affects both dual-motor trims.','ct']
 ]},
 {id:'mx',name:'Model X',body:'Luxury SUV',signature:'Falcon wing doors. Family space. Plaid power.',photo:'model-x',era:'Refreshed design · 2025–2026',trims26:[['AWD',114990,352,'3.8','Dual-motor AWD','Up to seven seats, configuration dependent'],['Plaid',129990,335,'2.5*','Tri-motor AWD','Six-seat layout; performance focus']],specSources:['sxspec','mx'],years:[
 [2019,81000,138000,'Raven update','Long Range / Performance','Raven brought improved efficiency and adaptive suspension.','mx'],
 [2020,79990,99990,'Range refinement','Long Range Plus / Performance','Long Range Plus improved the range-focused configuration.','mx'],
 [2021,79990,119990,'Refresh transition','Long Range / Plaid','New interior and Plaid announced; inspect individual build dates.','mx'],
 [2022,120990,138990,'Refreshed generation','Long Range / Plaid','Horizontal touchscreen and rear screen define the refreshed cabin.','mx'],
 [2023,79990,94990,'Pricing reset','AWD / Plaid','Major price reductions changed the luxury-SUV comparison.','mx'],
 [2024,79990,94990,'Refreshed generation','AWD / Plaid','AWD and Plaid continue; seating depends on configuration.','mx'],
 [2025,84990,99990,'Rolling update','AWD / Plaid','June update added a front camera and ambient lighting.','mx'],
 [2026,114990,129990,'Final model year','AWD / Plaid','Production ended; remaining inventory pricing varies by vehicle.','mx']
 ]},
 {id:'my',name:'Model Y',body:'Midsize SUV',signature:'The versatile all-rounder, reimagined.',photo:'model-y-refresh',era:'Refreshed design · introduced 2025',trims26:[['Rear-Wheel Drive',39990,321,'6.8','Single-motor RWD','Entry equipment package'],['All-Wheel Drive',41990,294,'4.6','Dual-motor AWD','Entry package with AWD'],['Premium RWD',45990,357,'5.4','Single-motor RWD','Longest-range configuration'],['Premium AWD',49990,327,'4.6','Dual-motor AWD','Premium comfort with AWD'],['Performance',57990,306,'3.3*','Dual-motor AWD','Performance tuning; 21-inch wheels']],specSources:['myprice','myrange','myspec'],years:[
 [2019,null,null,'Reveal','Announced; not yet delivered','Unveiled in 2019; customer deliveries began in 2020.','my'],
 [2020,49990,59990,'First deliveries','Long Range AWD / Performance','Original Model Y enters production with two AWD configurations.','my'],
 [2021,39990,63990,'Seating expansion','Standard Range / Long Range / Performance','Optional third row adds seven-seat flexibility.','my'],
 [2022,65990,69990,'Production scales','Long Range AWD / Performance','Original design continues as production scales.','my'],
 [2023,43990,52490,'Pricing reset','AWD / Long Range / Performance','Lower prices broaden the lineup’s appeal.','my'],
 [2024,42990,51490,'Original design','RWD / Long Range / Performance','Final full year of the original exterior design.','my'],
 [2025,44990,51490,'Refresh transition','Long Range / Performance; Launch Series separately','New design arrives during 2025; old and refreshed vehicles coexist.','my'],
 [2026,39990,59990,'Refreshed generation','RWD / AWD / Premium / Performance','Standard, Premium and Performance span the refreshed lineup.','my']
 ]},
 {id:'ms',name:'Model S',body:'Luxury liftback',signature:'The original flagship. The benchmark Plaid.',photo:'model-s',era:'Refreshed design · 2025–2026',trims26:[['AWD',109990,410,'3.1','Dual-motor AWD','Range-focused flagship; five seats'],['Plaid',124990,368,'1.99*','Tri-motor AWD','Flagship acceleration; five seats']],specSources:['sxspec','ms'],years:[
 [2019,75000,133000,'Raven update','Long Range / Performance','Efficiency and adaptive-suspension improvements arrive.','ms'],
 [2020,69420,91990,'Long Range Plus','Long Range Plus / Performance','Range-focused evolution of the original interior generation.','ms'],
 [2021,69420,149990,'Plaid arrives','Long Range / Plaid','Major cabin refresh; Plaid replaces Performance at the top.','ms'],
 [2022,104990,135990,'Refreshed generation','Long Range / Plaid','Refreshed cabin and tri-motor Plaid continue.','ms'],
 [2023,74990,89990,'Pricing reset','AWD / Plaid','Price cuts; a round steering wheel becomes available.','ms'],
 [2024,74990,89990,'Refreshed generation','AWD / Plaid','Range-focused AWD and faster Plaid remain distinct.','ms'],
 [2025,79990,94990,'Rolling update','AWD / Plaid','June update adds lighting and a front camera.','ms'],
 [2026,109990,124990,'Final model year','AWD / Plaid','Production ended; availability depends on remaining inventory.','ms']
 ]},
 {id:'m3',name:'Model 3',body:'Sports sedan',signature:'Minimalist design. Maximum everyday efficiency.',photo:'model-3-refresh',era:'Highland refresh · U.S. launch 2024',trims26:[['Rear-Wheel Drive',36990,321,'6.2','Single-motor RWD','Entry equipment package'],['Premium RWD',42490,363,'5.8','Single-motor RWD','Longest-range configuration'],['Premium AWD',47490,346,'4.2','Dual-motor AWD','Premium package with AWD'],['Performance',54990,309,'2.9*','Dual-motor AWD','Adaptive suspension; sport seats']],specSources:['m3spec','m3price'],years:[
 [2019,35000,56990,'Original generation','Standard Range / Long Range / Performance','Standard Range lowers the sedan’s entry price.','m3'],
 [2020,35000,54990,'Original generation','Standard Range Plus / Long Range / Performance','Original exterior; updates arrive incrementally.','m3'],
 [2021,44990,58990,'Efficiency refresh','Standard Range Plus / Long Range / Performance','Heat pump, powered trunk and redesigned center console.','m3'],
 [2022,46990,62990,'Incremental updates','RWD / Long Range / Performance','Core lineup continues with rolling hardware changes.','m3'],
 [2023,38990,50990,'Original U.S. design','RWD / Long Range / Performance','Highland appears overseas; U.S. refresh follows in 2024.','m3'],
 [2024,38990,54990,'Highland refresh','RWD / Long Range / Performance','Restyled body, ventilated seats and rear touchscreen.','m3'],
 [2025,36990,54990,'Refreshed generation','RWD / Premium / Performance','Refreshed design continues; trim names evolve.','m3'],
 [2026,36990,54990,'Expanded lineup','RWD / Premium RWD / Premium AWD / Performance','Entry RWD sits below Premium and Performance versions.','m3']
 ]}
];

Object.assign(SOURCES,{"cc": "https://www.tesla.com/support/robotaxi", "ccspec": "https://www.tesla.com/robotaxi/riderguides/cybercab/en_us/GUID-3229BCDF-16D8-447B-BCED-77E3E067AFBB.html", "ccoverview": "https://www.tesla.com/robotaxi/riderguides/cybercab/en_us/GUID-669E83C2-E7DE-40F4-9DBD-C9A32E7F6DFF.html", "ccproduction": "https://ir.tesla.com/_flysystem/s3/sec/000162828026049213/tsla-20260722-gen.pdf", "ccreveal": "https://ir.tesla.com/_flysystem/s3/sec/000162828024043432/tsla-20241023-gen.pdf"});
MODELS.push({"id": "cc", "name": "Cybercab", "body": "Two-seat robotaxi", "signature": "Purpose-built for autonomous rides. Two seats. No steering wheel or pedals.", "photo": "cybercab", "era": "Cybercab \u00b7 revealed 2024; production reported 2026", "trims26": [["Robotaxi fleet", null, null, null, "Electric autonomous vehicle", "Two seats; no steering wheel or pedals"]], "specSources": ["cc", "ccspec", "ccoverview", "ccproduction"], "years": [[2019, null, null, "Before reveal", "Not yet unveiled", "Cybercab had not yet been unveiled. Gallery photos are from the 2024+ design and are labeled individually.", "cc"], [2020, null, null, "Before reveal", "Not yet unveiled", "Cybercab had not yet been unveiled. Gallery photos are from the 2024+ design and are labeled individually.", "cc"], [2021, null, null, "Before reveal", "Not yet unveiled", "Cybercab had not yet been unveiled. Gallery photos are from the 2024+ design and are labeled individually.", "cc"], [2022, null, null, "Before reveal", "Not yet unveiled", "Cybercab had not yet been unveiled. Gallery photos are from the 2024+ design and are labeled individually.", "cc"], [2023, null, null, "Before reveal", "Not yet unveiled", "Cybercab had not yet been unveiled. Gallery photos are from the 2024+ design and are labeled individually.", "cc"], [2024, null, null, "Unveiled", "Two-seat robotaxi concept", "Revealed at the October 2024 We, Robot event. Tesla presented a purpose-built two-seat vehicle without a steering wheel or pedals.", "ccreveal"], [2025, null, null, "Development era", "Development vehicles", "Between the 2024 reveal and the production start reported in Tesla\u2019s Q2 2026 update. Display photographs are labeled by source and date.", "cc"], [2026, null, null, "Production & service rollout", "Robotaxi fleet", "Tesla reported Cybercab production in its Q2 2026 update. Current Robotaxi support lists Cybercab and Model Y in the fleet. Cybercab service availability depends on local rollout and vehicle assignment.", "ccproduction"]]});

