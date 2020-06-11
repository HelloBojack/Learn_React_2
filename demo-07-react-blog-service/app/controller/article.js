"use strict";
const Controller = require("egg").Controller;

class ArticleController extends Controller {
  async findOne() {
    const { ctx } = this;
    const res = await ctx.service.article.getArticleOne();
    ctx.body = res; // 返回值显示
    // ctx.body = '<h1>test</h1>'; // 返回值显示
  }
  async findAll() {
    const { ctx } = this;
    const res = await ctx.service.article.getArticleAll();
    ctx.body = res; // 返回值显示
    // ctx.body = '<h1>test</h1>'; // 返回值显示
  }
}
module.exports = ArticleController;
