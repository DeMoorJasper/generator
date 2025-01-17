import { Generator } from '#dev';
import assert from 'assert';

const generator = new Generator({
  mapUrl: import.meta.url,
  defaultProvider: 'unpkg',
  env: ['production', 'browser']
});

await generator.install('lit@2.0.0-rc.1');
const json = generator.getMap();
assert.strictEqual(json.imports.lit, 'https://unpkg.com/lit@2.0.0-rc.1/index.js');
const scope = json.scopes['https://unpkg.com/'];
assert.ok(scope['@lit/reactive-element']);
assert.ok(scope['lit-element/lit-element.js']);
assert.ok(scope['lit-html']);
