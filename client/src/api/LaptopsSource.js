import axios from 'axios'

export const LaptopsSource = axios.create({
    baseURL: 'http://localhost:3080/api',
})