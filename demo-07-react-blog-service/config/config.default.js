/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '127.0.0.1'
    }
  }


  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1585133800307_2974";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // egg cors 跨域配置
  config.cors = {
    origin: '*',
    // origin: 'http://localhost:3000', //只允许这个域进行访问接口
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
  };

  config.security = {
    // 关闭csrf验证
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    // 白名单
    domainWhiteList: ['*']
  };
  // 连接mongodb
  config.mongoose = {
    client: {
      url: "mongodb://127.0.0.1:27017/react_blog",
      options: {
        useNewUrlParser: true, useUnifiedTopology: true
      }
    }
  };
  return {
    ...config,
    ...userConfig
  };
};
