const { authenticate } = require('@feathersjs/authentication').hooks;
//const { restrictToOwner } = require('feathers-authentication-hooks');
const sync = require('../../hooks/sync');
//const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [],// authenticate('jwt') 
    find: [],
    get: [],
    create: 
    [
      authenticate('jwt'), 
      sync.preSave, 
      sync.addAuthor
    ],
    update: 
    [ authenticate('jwt'), 
      sync.preSave],
    patch: 
    [ authenticate('jwt'), 
      sync.preSave],
    remove: 
    [ authenticate('jwt'), 
      sync.preSave]
  },

  after: {
    all: [],
    find: [sync.addQueryDate],
    get: [],
    create: [async (c)=>await sync.addToChangeLog(c)],
    update: [async (c)=>await sync.addToChangeLog(c)], 
    patch: [async (c)=>await sync.addToChangeLog(c)],
    remove: [async (c)=>await sync.addToChangeLog(c)]
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
