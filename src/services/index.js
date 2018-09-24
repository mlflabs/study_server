const events = require('./events/events.service.js');
const users = require('./users/users.service.js');
const groups = require('./groups/groups.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(events);
  app.configure(users);
  app.configure(groups);
};
