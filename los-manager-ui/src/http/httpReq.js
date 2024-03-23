import axios from "axios";

const testDemo = axios.create({
    baseURL: 'http://localhost:9001/los',
    timeout: 5000
})

// 拦截器

//axios 请求拦截器
testDemo.interceptors.request.use(config => {
    return config
},error => Promise.reject(error))

// axios 响应拦截器
testDemo.interceptors.response.use(res => res.data
,error => Promise.reject(error))

export default testDemo