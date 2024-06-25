import axios from 'axios'
import { getToken } from '@/utils/auth'
const service = axios.create({
  baseURL: 'https://api-hmzs.itheima.net/tj',
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.dir(error)

    if (error.response.stats === 401) {
      this.$store.commit('removeToken')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
    return Promise.reject(error)
  }
)

export default service
