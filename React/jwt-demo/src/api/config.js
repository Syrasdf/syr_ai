import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5174';

// 拦截器
axios.interceptors.request.use((config) => {
  // const token = localStorage.getItem('token');
  let token = localStorage.getItem('token') || "";
  config.headers.Authorization = token;
    // console.log('////');
    config.headers.Authorization = ''
    config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  })
// 响应拦截器
axios.interceptors.response.use(res => {
  console.log('|||||');
  return res;
})


export default axios;