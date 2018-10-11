
const sync = require('../../hooks/sync');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: 
    [ sync.preSave],
    update: 
    [ sync.preSave],
    patch: 
    [ sync.preSave],
    remove: 
    [ sync.preSave]
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
