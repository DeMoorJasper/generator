import { Generator } from '#dev';
import assert from 'assert';

const generator = new Generator({
  mapUrl: import.meta.url,
  defaultProvider: 'jspm',
  env: ['production', 'browser']
});

await generator.install('react@16');
const json = generator.getMap();
assert.strictEqual(json.imports.react, 'https://ga.jspm.io/npm:react@16.14.0/index.js');