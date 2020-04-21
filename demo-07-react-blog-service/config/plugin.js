"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mongoose: {
    enable: true,
    package: "egg-mongoose"
  },
  // egg cors 跨域配置
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};