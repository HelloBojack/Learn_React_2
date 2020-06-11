"use strict";
const Controller = require("egg").Controller;

class AdminController extends Controller {
  async newOne() {
    const { ctx } = this;
    const res = await ctx.service.admin.postArticleOne();
    ctx.body = res;
  }
  async deleteOne() {
    const { ctx } = this;
    const res = await ctx.service.admin.deleteArticleOne();
    ctx.body = res;
  }
  async updateOne() {
    const { ctx } = this;
    const res = await ctx.service.admin.updateArticleOne();
    ctx.body = res;
  }
}
module.exports = AdminController;
