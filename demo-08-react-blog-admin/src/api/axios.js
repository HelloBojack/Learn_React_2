import axios from 'axios';
import qs from 'qs';

import { message } from 'antd'
// axios.get(url, {
//   params: {
//   }
// }).then(response => {

// }).catch(error => {

// })
// 为什么要封装axios
// 增加统一管理，更加方便地进行开发
// 1. 接口url前缀，区分开发环境和生产环境
// 2. 跨域 
// 3. 接口参数要求
// 4. 失败原因

// 根据环境变量设置接口前缀
switch (process.env.NODE_ENV) {
  case "production":
    axios.defaults.baseURL = "http://39.100.20.241:7001/"
    break
  case "test":
    axios.defaults.baseURL = ""
    break
  case "development":
    axios.defaults.baseURL = "http://127.0.0.1:7001/"
    break
  default:
    axios.defaults.baseURL = "http://127.0.0.1:7001/"
    break
}
// 设置超时时间&跨域是否携带cookie
axios.defaults.timeout = 10000; // 10s
// axios.defaults.withCredentials = true;
// // 设置服务器要求格式，POST请求头&请求数据格式
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// // axios.defaults.transformRequest = date => qs.stringify(data)
// axios.defaults.transformRequest = function (data) {
//   data = qs.stringify(data);
//   // data = JSON.stringify(data);
//   return data;
// };
// 设置请求拦截器，携带token
// Token校验（JWT）
// 接收到服务器返回的Token，存储到redux/vuex/localstroge/cookie
// 每次请求需要带上Token
axios.interceptors.request.use(config => {
  let token = localStorage.getItem('token')
  token && (config.headers.Authorization = token)
  return config
}, error => {
  return Promise.reject(error)
})
// 设置响应拦截器
axios.defaults.validateStatus = status => {
  // 校验状态码
  return /^(2|3)\d{2}$/.test(status)
}
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  let { response } = error
  if (response) {
    // 返回结果
    switch (response.status) {
      case 401:
        // 未登录
        // 提示未登录，跳转登录页
        console.log(401)
        break
      case 403:
        // Toke过期
        // 重置token，跳转登录页
        console.log(403)
        break
      case 404:
        // 
        console.log(404)
        break
      default:
        break
    }
  }
  else {
    // 无返回结果
    // 服务器炸了
    // 客户端断网
    if (!window.navigator.onLine) {
      // 跳转断网页面
      console.log('offLine')
    }
    return Promise.reject(error)
  }
})


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        // reject(err)
        message.error('请求出错：' + err.message)
      })
  })
}
// export function get(url, params) {
//   return new Promise((resolve, reject) => {
//     axios.get(url, {
//       params: params
//     }).then(response => {
//       resolve(response.data);
//     }).catch(err => {
//       reject(err)
//     })
//   });
// }

// export function get(url, params = {}) {
//   return new Promise((resolve, reject) => {
//     axios.get(url, {
//       params: params
//     })
//       .then(response => {
//         resolve(response.data);
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
      .then(response => {
        // console.log(res)
        resolve(response);
      })
      .catch(err => {
        // console.log(err)
        // reject(err)
        message.error('请求出错：' + err.message)
      })
  });
}

export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, qs.stringify(params))
      .then(response => {
        // console.log(res)
        resolve(response);
      })
      .catch(err => {
        // console.log(err)
        // reject(err)
        message.error('请求出错：' + err.message)
      })
  });
}