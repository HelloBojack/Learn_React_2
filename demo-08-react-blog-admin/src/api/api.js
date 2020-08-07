import { post, get, put } from './axios'

export const LoginIn = params => post('/login', params)


export const getArticleList = params => post('/articleAllPage', params)
export const hiddenArticleItem = params => put(`/article/${params}`)

export const getWeather = () => get('https://api.help.bj.cn/apis/weather6d/?id=101070201')