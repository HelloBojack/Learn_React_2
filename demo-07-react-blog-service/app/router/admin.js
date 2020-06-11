module.exports = app => {
  const { router, controller } = app;
  // 新建一个文章
  router.post("/article", controller.admin.newOne);
  // 删除一个文章
  router.delete("/article/:id", controller.admin.deleteOne);
  // 更新一个文章
  router.put("/article/:id", controller.admin.updateOne);
};