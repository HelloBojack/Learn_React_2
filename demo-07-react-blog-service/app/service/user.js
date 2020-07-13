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
      // else {
      //     user._doc.role = { menus: [] }
      //     // 返回登陆成功信息(包含user)
      //     return {
      //       "result": true,
      //       "msg": "登陆成功",
      //       "data": user
      //     }
      //   }
      // }
    } catch (err) {
      console.log(err)
      return {
        "result": false,
        "msg": "登陆失败",
      }
    }
  }


}
module.exports = UserService;
