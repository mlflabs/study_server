const { authenticate } = require('@feathersjs/authentication').hooks;
const sync = require('../../hooks/sync');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: 
    [ authenticate('jwt'), 
      sync.preSave, 
      sync.addAuthor],
    update: 
    [ authenticate('jwt'), 
      async (c)=>await sync.canDeleteGroups(c),
      sync.preSave],
    patch: 
    [ authenticate('jwt'), 
      sync.canDeleteGroups, 
      sync.preSave],
    remove: 
    [ authenticate('jwt'), 
      sync.preSave,
      async (c)=>await sync.addToChangeLog(c),  ]
  },

  after: {
    all: [],
    find: [sync.addQueryDate],
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
    create: [async (c)=>await sync.addToChangeLog(c)],
    update: [async (c)=>await sync.addToChangeLog(c)],
    patch: [async (c)=>await sync.addToChangeLog(c)],
    remove: [async (c)=>await sync.addToChangeLog(c)]
  }
};
