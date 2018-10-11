const events = require('./events/events.service.js');
const users = require('./users/users.service.js');
const groups = require('./groups/groups.service.js');
const blog = require('./blog/blog.service.js');
const post = require('./post/post.service.js');
const appEvents = require('./app-events/app-events.service.js');
const test = require('./test/test.service.js');
const changeFeed = require('./change-feed/change-feed.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(events);
  app.configure(users);
  app.configure(groups);
  app.configure(blog);
  app.configure(post);
  app.configure(appEvents);
  app.configure(test);
  app.configure(changeFeed);
};
