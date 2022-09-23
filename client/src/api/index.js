import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3080/api',
})

export const getAllLaptops = () => api.get(`/laptops1`)

const apis = {
    getAllLaptops,
}

export default apis