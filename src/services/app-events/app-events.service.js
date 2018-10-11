// Initializes the `appEvents` service on path `/app-events`
const createService = require('feathers-mongoose');
const createModel = require('../../models/app-events.model');
const hooks = require('./app-events.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/app-events', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('app-events');

  service.hooks(hooks);
};
