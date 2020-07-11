import { post } from './axios'

export const LoginIn = (params) => {
  post('/loginIn', params).then(response => {
    console.log(response)
  })
}