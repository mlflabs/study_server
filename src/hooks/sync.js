

module.exports = {
  // eslint-disable-next-line no-unused-vars
  preSave(context) {
   
    context.data._dirty = false;
    context.data.updatedAt = Date.now;
    // context.data._newid = false;

    // console.log('Pre-save Sync: ', context.data);

    return context;
  },

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