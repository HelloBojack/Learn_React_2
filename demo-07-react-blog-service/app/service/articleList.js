"use strict";

const Service = require("egg").Service;

class ArticleListService extends Service {
  /**
   * 根据ID获取单个项目
   */
  async getProjectById() {
    const { ctx, app } = this;
    try {
      const results = await ctx.model.ArticleList.find({
        // Article为modal/article.js里面命名的名字
      });
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
