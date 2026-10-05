import fs from 'fs';
import path from 'path';
import vm from 'vm';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const errors = [];

function load(file, names) {
  const code = fs.readFileSync(path.join(root, file), 'utf8');
  const context = {Object, console};
  vm.createContext(context);
  return vm.runInContext(`${code}\n;({${names.join(',')}})`, context);
}

const {MODELS, SOURCES} = load('data.js', ['MODELS', 'SOURCES']);
const {GALLERIES} = load('galleries-data.js', ['GALLERIES']);
const {RESEARCH} = load('research-data.js', ['RESEARCH']);

const ids = MODELS.map(model => model.id);
const expected = ['ct', 'mx', 'my', 'ms', 'm3', 'cc'];
if (new Set(ids).size !== ids.length) errors.push('model ids are not unique');
for (const id of expected) if (!ids.includes(id)) errors.push(`missing model id ${id}`);

for (const model of MODELS) {
  if (!Array.isArray(model.years) || !model.years.length) errors.push(`${model.id} has no year rows`);
  for (const row of model.years || []) {
    if (row.length !== 7) errors.push(`${model.id} year row length ${row.length}`);
    const [year, , , , , , sourceKey] = row;
    if (year < 2019 || year > 2026) errors.push(`${model.id} year ${year} is outside 2019–2026`);
    if (!SOURCES[sourceKey]) errors.push(`${model.id} ${year} source key ${sourceKey} is missing`);
  }
  for (const trim of model.trims26 || []) {
    if (trim.length < 6) errors.push(`${model.id} trim row is short: ${trim[0]}`);
  }
}

for (const [key, photos] of Object.entries(GALLERIES)) {
  if (!Array.isArray(photos) || !photos.length) errors.push(`gallery ${key} is empty`);
  photos.forEach((photo, index) => {
    for (const field of ['src', 'thumb']) {
      const file = photo[field];
      if (!file) errors.push(`${key}[${index}] missing ${field}`);
      else if (!fs.existsSync(path.join(root, file))) errors.push(`${key}[${index}] missing file ${file}`);
    }
  });
}

for (const [topic, cards] of Object.entries(RESEARCH)) {
  for (const card of cards) {
    if (card.image && !fs.existsSync(path.join(root, card.image))) errors.push(`${topic} ${card.id} missing ${card.image}`);
    for (const claim of card.claims || []) {
      if (!claim.tag) errors.push(`${card.id} claim missing tag`);
      if (!claim.as_of) errors.push(`${card.id} claim missing as_of`);
      if (typeof claim.inherited !== 'boolean') errors.push(`${card.id} claim missing inherited flag`);
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`archive ok: ${MODELS.length} models, ${Object.keys(GALLERIES).length} galleries, ${Object.keys(RESEARCH).length} research topics`);
