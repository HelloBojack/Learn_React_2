"use strict";
const Controller = require("egg").Controller;

class ArticleController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.article.getProjectById();
    ctx.body = res; // 返回值显示
    // ctx.body = '<h1>test</h1>'; // 返回值显示
  }
}
module.exports = ArticleController;
