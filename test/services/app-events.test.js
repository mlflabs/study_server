const assert = require('assert');
const app = require('../../src/app');

describe('\'appEvents\' service', () => {
  it('registered the service', () => {
    const service = app.service('app-events');

    assert.ok(service, 'Registered the service');
  });
});
