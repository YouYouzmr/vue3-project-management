import axios from "axios"
import { Message } from "element-plus"
import store from "@/store"
import { getToken } from "@/utils/auth"

// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 5000 // 请求超时
})

// request拦截器
service.interceptors.request.use(config => {
    // Do something before request is sent
    if(store.getters.token) {
        // 每次请求都携带Token
        config.headers["X-Token"] = getToken();
    }

    return config
}, error => {
    // Do something with request error
    console.log(error)
    Promise.reject(error)
})

service.interceptors.response.use(res=> {
    const res = res.data
    if(res.code != '0') {
        Message({
            message: res.msg,
            type: 'error',
            duration: 5*1000
        })

        // 判断登录超时
        if(res.code="999") {
            Message.confirm('登录超时，可继续停留了当前页面，或者重新登录', '确定登出', {
                confirmButtonText: '重新登录',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                store.dispath("Logout").then(() => {
                    location.reload()
                })
            })
        }
    } else {
        return res.data
    }
}, error=> {
    // Do something with request error
    console.log(error)
    Message({
        message: res.msg,
        type: 'error',
        duration: 5*1000
    })
    return Promise.reject(error)
})

export default service