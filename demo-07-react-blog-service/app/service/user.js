"use strict";

const Service = require("egg").Service;

class UserService extends Service {
  async login() {
    const { ctx, app } = this;
    try {
      const { username, password } = ctx.request.body;
      let result = await ctx.model.User.findOne({ username });
      if (result) {
        ctx.cookies.set('userid', result._id, { maxAge: 1000 * 60 * 60 * 24 })
        //   if (user.role_id) {
        //     RoleModel.findOne({ _id: user.role_id })
        //       .then(role => {
        //         user._doc.role = role
        //         console.log('role user', user)
        //         // res.send({ status: 0, data: user })
        return {
          "result": true,
          "msg": "登陆成功",
          "data": result
        }
        // })

      }
      else {
        //     user._doc.role = { menus: [] }
        //     // 返回登陆成功信息(包含user)
        //     return {
        //       "result": true,
        //       "msg": "登陆成功",
        //       "data": user
        //     }
        //   }
        return {
          "result": false,
          "msg": "登陆失败",
        }
      }
    } catch (err) {
      console.log(err)
      return {
        "result": false,
        "msg": "登陆失败",
      }
    }
  }

  async logon() {
    const { ctx, app } = this;
    try {
      const params = ctx.request.body;
      const { username, password } = params;
      if (await ctx.model.User.findOne({ username })) {
        return {
          "result": false,
          "msg": "注册失败，已存在该帐号",
        }
      }

      let user = new ctx.model.User(params)
      var result = await user.save();
      if (result) {
        return {
          "result": true,
          "msg": "注册成功",
        }
      }
      else {
        return {
          "result": false,
          "msg": "注册失败",
        }
      }
    } catch (err) {
      console.log(err)
      return {
        "result": false,
        "msg": "注册失败",
      }
    }
  }


  async getUserList() {
    const { ctx, app } = this;
    console.log(ctx)
    try {
      let params = ctx.request.body;
      let { pageNo, pageSize } = params;
      let totalNum = await ctx.model.User.find().countDocuments();
      const results = await ctx.model.User.find().skip((pageNo - 1) * pageSize).limit(Number(pageSize));
      if (results.length > 0) {
        return {
          "result": true,
          "totalNum": totalNum,
          "data": results,
          "msg": "获取文章成功"
        };
      }

    } catch (err) {
      console.log(err)
      ctx.body = JSON.stringify(err);
    }
  }

}
module.exports = UserService;
