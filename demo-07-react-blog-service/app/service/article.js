"use strict";

const Service = require("egg").Service;

class ArticleService extends Service {
  async getArticleOne() {
    const { ctx, app } = this;
    try {
      let params = ctx.params;
      const results = await ctx.model.Article.find({
        // Article为modal/article.js里面命名的名字
        _id: params.id
      });
      if (results.length > 0) {
        return {
          "results": true,
          "data": results,
          "msg": "获取文章成功"
        };
      }

    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
  async getArticlePage() {
    const { ctx, app } = this;
    try {
      let params = ctx.request.body;
      let { pageNo, pageSize } = params;
      let totalNum = await this.ctx.model.Article.find({ "visibility": 1 }).countDocuments();
      const results = await this.ctx.model.Article.find({ "visibility": 1 }).skip((pageNo - 1) * pageSize).limit(pageSize);
      if (results.length > 0) {
        return {
          "results": true,
          "totalNum": totalNum,
          "data": results,
          "msg": "获取文章成功"
        };
      }

    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }

}
module.exports = ArticleService;
