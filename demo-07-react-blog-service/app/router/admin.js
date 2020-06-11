module.exports = app => {
  const { router, controller } = app;
  // 新建一个文章
  router.post("/article", controller.articleList.newOne);
};