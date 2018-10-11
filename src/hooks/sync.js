const { BadRequest } = require('@feathersjs/errors');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  preSave(context) {
    console.log('====PRESAVE ', context.path, context.method);
    context.data.meta_dirty = false;
    context.data.updatedAt = Date.now();
    delete context.data.meta_newid;

    // console.log('Pre-save Sync: ', context.data);
    return context;
  },
  addAuthor(context) {
   
    context.data.author = context.params.user.name;
    //console.log('New event by User: ', context.params.user.name);
    
    // console.log('Pre-save Sync: ', context.data);

    return context;
  },

  addQueryDate(c) {
    c.result.date = Date.now();
    return c;
  },

  async addToChangeLog(c) {
    console.log('%%%%%% Adding Change to ChangeFeed ', c.method+'--'+c.path);

    //lets just skip some system paths
    if(c.method == 'authentication') return c;
    //TODO: make sure that the doc wasn't previously modified
    if(c.method !== 'create'){ //if no id, then its a new doc
      const oldDoc = await c.app.service(c.path).find({
        query: {
          group: c.id
        }
      });

      //how do we determine if we should save this doc
      //TODO, if not save, tell the user...
      //for now just save it
      
    }

    const changefeed = await c.app.service('change-feed').create({
      date: Date.now(),
      col: c.path,
      action: c.method,
      isDelete: c.data.meta_removed,
      user: c.params.user.name,
      doc: c.data

    });

    console.log('Changefeed: ', changefeed);
  },

  async canDeleteGroups(context) {
    console.log('----CANDELETEHOOK');
    if(context.id || context.data.meta_removed){
      const results = await context.app.service('events').find({
        query: {
          group: context.id
        }
      });
      if(results.total > 0){
        throw new BadRequest('Cannot delete group, group contains child events.');
      }
      console.log('Results: ',results);

    }
    
    return context;
  }

}; 




//const { errors } = require('feathers-errors')

/*
// eslint-disable-next-line no-unused-vars
//module.exports = function (options = {}) {
  //return context => {
    //const name = context.data.name

    //if (name === undefined || name.trim() === '') {
    //  throw new errors.BadRequest('Name cannot be empty');
    //}
  //};
//};
*/