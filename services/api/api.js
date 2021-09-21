import axios from 'axios'

const api = axios.create({
  baseURL: process.env.SISTEMA_JAVA_DAC_API_URL,
})

export default api
