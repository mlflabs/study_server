const { authenticate } = require('@feathersjs/authentication').hooks;
//const { restrictToOwner } = require('feathers-authentication-hooks');
const sync = require('../../hooks/sync');
//const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [],// authenticate('jwt') 
    find: [],
    get: [],
    create: [authenticate('jwt'), sync.preSave, sync.addAuthor],
    update: [authenticate('jwt'), sync.preSave],
    patch: [authenticate('jwt'),  sync.preSave],
    remove: [authenticate('jwt'), sync.preSave]
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
