// Initializes the `changeFeed` service on path `/change-feed`
const createService = require('feathers-mongoose');
const createModel = require('../../models/change-feed.model');
const hooks = require('./change-feed.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/change-feed', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('change-feed');

  service.hooks(hooks);
};
