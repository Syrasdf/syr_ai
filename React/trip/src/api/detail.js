import axios from 'axios'

export const getDetail = async (id) => {
    return axios.get(`/api/detail/${id}`)
}

export default getDetail;