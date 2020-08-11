import { post, get, put } from './axios'

export const LoginIn = params => post('/login', params)


export const getArticleList = params => post('/articleAllPage', params)
export const updateArticleItem = params => put(`/article/${params._id}`, params)
export const newArticleItem = params => post('/article', params)

export const getWeather = () => get('https://api.help.bj.cn/apis/weather6d/?id=101070201')