"use strict";

const Service = require("egg").Service;

class ArticleService extends Service {
  async getArticleOne() {
    const { ctx, app } = this;
    try {
      let params = ctx.params;
      // console.log(params)
      const results = await ctx.model.Article.find({
        // Article为modal/article.js里面命名的名字
        _id: params.id
      });
      // console.log(results)
      if (results.length > 0) {
        return {
          "results": true,
          data: results
        };
      }

    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
  async getArticleAll() {
    const { ctx, app } = this;
    try {
      const results = await ctx.model.Article.find({
      });
      // console.log(results)
      if (results.length > 0) {
        return {
          "results": true,
          data: results
        };
      }

    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
}
module.exports = ArticleService;
