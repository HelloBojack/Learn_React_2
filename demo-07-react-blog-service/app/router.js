"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get("/", controller.home.index);
  router.get("/articleList/:id", controller.articleList.findOne);
  router.get("/articleListAll", controller.articleList.findAll);
};
