"use strict";

const Service = require("egg").Service;

class AdminService extends Service {
  async postArticleOne() {
    const { ctx, app } = this;
    try {
      let params = ctx.request.body;
      console.log(params)
      var article = new ctx.model.Article({
        title: params.title
      })
      var results = await article.save();

      return {
        "results": true,
        "data": "添加文章成功"
      };
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }

  async deleteArticleOne() {
    const { ctx, app } = this;
    try {
      let params = ctx.params;

      var results = await this.ctx.model.Article.deleteOne({
        _id: params.id
      })
      return {
        "results": true,
        "data": "删除文章成功"
      };
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }

}
module.exports = AdminService;
