import axios from "./config";

// todos接口
export const getTodos = () => {
    return axios.get('http://localhost:5178/api/todos');
}

export const getRepos = () => {
    return axios.get('/api/repos');
}