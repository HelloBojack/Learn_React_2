module.exports = app => {
  const { router, controller } = app;
  // 登录
  router.post("/login", controller.user.login);
};