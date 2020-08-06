"use strict";

const Service = require("egg").Service;

class AdminService extends Service {
  async postArticleOne() {
    const { ctx, app } = this;
    try {
      let params = ctx.request.body;
      var article = new ctx.model.Article({
        title: params.title,
        pic: params.pic,
        content: params.content,
        intro: params.intro,
        tags: params.tags,
        visibility: params.visibility
      })
      var results = await article.save();
      return {
        "result": true,
        "msg": "添加文章成功"
      };
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }

  async deleteArticleOne() {
    const { ctx, app } = this;
    try {
      let params = ctx.params;
      let articleOne = await this.ctx.model.Article.find({ _id: params.id });
      if (articleOne.length > 0) {
        const results = await this.ctx.model.Article.updateOne({ _id: params.id }, { "visibility": 0 })
        // const results = await this.ctx.model.Article.deleteOne({_id: params.id})
        return {
          "result": true,
          "data": {
            _id: params.id
          },
          "msg": "隐藏文章成功"
        };
      }
      else {
        return {
          "result": false,
          "data": {
            _id: params.id
          },
          "msg": "隐藏文章失败，无该文章id"
        };
      }
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }

  async updateArticleOne() {
    const { ctx, app } = this;
    try {
      let params = ctx.request.body;
      let id = ctx.params.id
      let articleOne = await this.ctx.model.Article.find({ _id: id });
      if (articleOne.length > 0) {
        const results = await this.ctx.model.Article.updateOne({ _id: id }, params)
        let articleOneAfter = await this.ctx.model.Article.find({ _id: id });
        return {
          "result": true,
          "data": articleOneAfter,
          "msg": "编辑文章成功"
        };
      }
      else {
        return {
          "result": false,
          "msg": "编辑文章失败，无该文章id"
        };
      }
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }

  async getArticleAll() {
    const { ctx, app } = this;
    try {
      let totalNum = await this.ctx.model.Article.find({}).countDocuments();
      const results = await ctx.model.Article.find({});
      if (results.length > 0) {
        return {
          "result": true,
          "totalNum": totalNum,
          "data": results
        };
      }

    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
  async getArticleAllPage() {
    const { ctx, app } = this;
    try {
      let params = ctx.request.body;
      let { pageNo, pageSize } = params;
      console.log(params)

      let totalNum = await ctx.model.Article.find({}).countDocuments();
      console.log(totalNum)
      let results = await ctx.model.Article.find({}).skip((pageNo - 1) * pageSize).limit(Number(pageSize));

      if (results.length > 0) {
        return {
          "result": true,
          // "params": params,
          // "query": query,
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
module.exports = AdminService;
