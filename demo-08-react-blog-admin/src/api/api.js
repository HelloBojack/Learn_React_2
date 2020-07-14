import { post } from './axios'
// import axios from './axios'
// import http from './axios'

export const LoginIn = params => post('/login', params)
