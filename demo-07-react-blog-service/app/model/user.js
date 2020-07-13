"use strict";

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema(
    {
      username: { type: String, required: true }, // 用户名
      password: { type: String, required: true }, // 密码
      phone: String,
      email: String,
      create_time: { type: Number, default: Date.now },
      role_id: String
    }
  );

  return mongoose.model("User", UserSchema, "users");
  // 我的理解：User是指定查找的入口，随便取；AUserSchema是参数；user是你数据集合表的名称
};
