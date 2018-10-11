const assert = require('assert');
const app = require('../../src/app');

describe('\'changeFeed\' service', () => {
  it('registered the service', () => {
    const service = app.service('change-feed');

    assert.ok(service, 'Registered the service');
  });
});
