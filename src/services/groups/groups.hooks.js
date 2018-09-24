const { authenticate } = require('@feathersjs/authentication').hooks;
const sync = require('../../hooks/sync');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ authenticate('jwt'), sync.preSave ],
    update: [ authenticate('jwt'), sync.preSave ],
    patch: [ authenticate('jwt'), sync.preSave ],
    remove: [ authenticate('jwt'), sync.preSave ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
