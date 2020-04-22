"use strict";

const Service = require("egg").Service;

class ArticleListService extends Service {
  async getArticleList() {
    const { ctx, app } = this;
    try {

      let params = ctx.params;
      // console.log(params)
      const results = await ctx.model.ArticleList.find({
        // Article为modal/article.js里面命名的名字
        id: parseInt(params.id)
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
  async getArticleListAll() {
    const { ctx, app } = this;
    try {
      const results = await ctx.model.ArticleList.find({
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
module.exports = ArticleListService;
