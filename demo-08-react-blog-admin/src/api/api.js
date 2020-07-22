import { post, get } from './axios'

export const LoginIn = params => post('/login', params)

export const getWeather = () => get('https://api.help.bj.cn/apis/weather6d/?id=101070201')