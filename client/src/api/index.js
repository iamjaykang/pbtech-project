import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3080/api',
})

export const getAllLaptops = () => api.get(`/laptops1`)
export const getAllLaptops2 = () => api.get(`/laptops2`)
export const getAllLaptops3 = () => api.get(`/laptops3`)
export const getAllLaptops4 = () => api.get(`/laptops4`)

const apis = {
    getAllLaptops,
    getAllLaptops2,
    getAllLaptops3,
    getAllLaptops4,
}

export default apis