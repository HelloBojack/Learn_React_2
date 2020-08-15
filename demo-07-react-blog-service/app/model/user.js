"use strict";
const dayjs = require('dayjs')

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema(
    {
      username: { type: String, required: true }, // 用户名
      password: { type: String, required: true }, // 密码
      nick: { type: String, default: '' }, // 昵称
      avatar: { type: String, default: '' },// 头像
      intro: { type: String, default: '' },// 简介
      phone: { type: String, default: '' },// 手机号
      email: { type: String, default: '' },// 邮箱
      createTime: { type: Date, default: () => dayjs(new Date()).add('8', 'hour').format('YYYY-MM-DD HH:mm:ss') },
      updateTime: { type: Date, default: () => dayjs(new Date()).add('8', 'hour').format('YYYY-MM-DD HH:mm:ss') },
      role: { type: String, default: '' }, // 权限角色
      delete: { type: Boolean, default: false }, // 是否禁用
    },
    {
      versionKey: false,
      timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
    }
  );

  return mongoose.model("User", UserSchema, "users");
  // 我的理解：User是指定查找的入口，随便取；AUserSchema是参数；user是你数据集合表的名称
};
