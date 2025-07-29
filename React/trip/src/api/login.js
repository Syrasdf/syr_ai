// search 模块
import axios from './config'

export const getSuggest = async (ke) => {
  return axios.post('/login', data)
}

export const register = (data) => {
  return axios.post('/register', data)
}

export const logout = () => {
  return axios.post('/logout')
}