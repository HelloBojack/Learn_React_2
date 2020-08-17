"use strict";
const Controller = require("egg").Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    // console.log(123123)
    // ctx.body = "<h1>login Page</h1>";
    const res = await ctx.service.user.login();
    ctx.body = res;
  }
  async logon() {
    const { ctx } = this;
    // console.log(123123)
    // ctx.body = "<h1>login Page</h1>";
    const res = await ctx.service.user.logon();
    ctx.body = res;
  }

  async getUserList() {
    const { ctx } = this;
    // console.log(123123)
    // ctx.body = "<h1>login Page</h1>";
    const res = await ctx.service.user.getUserList();
    ctx.body = res;
  }

}
module.exports = UserController;
