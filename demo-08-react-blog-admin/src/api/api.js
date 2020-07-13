// import { post } from './axios'
import axios from 'axios'

export const LoginIn = (params) => {
  console.log(axios.defaults)
  axios.post('http://127.0.0.1:7001/login', params)
    .then(response => {
      console.log(response)
    }).catch(function (error) {
      console.log(error);
    });
}