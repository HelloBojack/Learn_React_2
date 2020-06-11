module.exports = app => {
  const { router, controller } = app;
  // 获取某个指定文章
  router.get("/article/:id", controller.article.findOne);
  // 获取所有文章
  router.get("/articleAll", controller.article.findAll);
};