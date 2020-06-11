"use strict";
const Controller = require("egg").Controller;

class AdminController extends Controller {
  async newOne() {
    const { ctx } = this;
    const res = await ctx.service.admin.getArticleOne();
    ctx.body = res; // 返回值显示
    // ctx.body = '<h1>test</h1>'; // 返回值显示
  }

}
module.exports = AdminController;
