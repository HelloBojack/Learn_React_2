module.exports = app => {
  const { router, controller } = app;
  // 登录
  router.post("/login", controller.user.login);
  // 注册
  router.post("/logon", controller.user.logon);
  // 获取所有角色
  router.post("/getUserList", controller.user.getUserList);
};