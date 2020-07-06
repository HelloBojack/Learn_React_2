"use strict";

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 下面得操作是连接数据库
  const ArticleSchema = new Schema(
    {
      // 修改和新增用到，规定字段得类型和其他条件等
      title: { type: String, },
      tags: { type: String },
      browseNum: { type: Number, default: 0 },
      likeNum: { type: Number, default: 0 },
      commentNum: { type: Number, default: 0 },
      pic: { type: String },
      content: { type: String },
      intro: { type: String },
      visibility: {
        type: Number,
        default: 1
      },
    },
    { versionKey: false }
  );

  return mongoose.model("Article", ArticleSchema, "article"); // 我的理解：Article是指定查找的入口，随便取；ArticleSchema是参数；article是你数据集合表的名称
};
