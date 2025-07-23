// 标准的http请求，vue/react 都可以用
import axios from 'axios';
// mock 地址
// axios.defaults.baseURL = 'http://localhost:5178';
// 线上地址有了
axios.defaults.baseURL = 'https://api.github.com';
export default axios;

//http://api.github.com/users/shunwuyu
