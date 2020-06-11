"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  require('./router/index')(app)
  require('./router/default')(app)
  require('./router/admin')(app)
};