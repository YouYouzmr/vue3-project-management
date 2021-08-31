import axios from "axios"
import { ElMessageBox } from "element-plus"

// 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // api的base_url
    dataType: 'JSON',
    widthCredentials: true
})

// request拦截器
service.interceptors.request.use(config => {
    config.data = Object.assign(config.data, {
        channelNo: process.env.VUE_APP_CHANNEL_NO
    })
    // file upload
    if (config.file) {
        config.headers = {
            "Content-Type": "multipart/form-data"
        }
        config.baseURL += process.env.VUE_APP_FILE_URL
    }
    else {
        config.headers = {
            "Content-Type": "application/json; charset=utf-8"
        }
        config.baseURL += process.env.VUE_APP_BASE_URL
    }

    return config
}, error => {
    // Do something with request error
    Promise.reject(error)
})

service.interceptors.response.use(response => {
    // 网络服务异常
    if(response.status >= 500) {
        ElMessageBox.alert("网络服务异常",  "提示")
    } else if(response.status >= 400) {
        ElMessageBox.alert("status 在400 - 417之间", "提示")
    } else if (response.status >= 200) {
        const res = response.data
        if (res.code != '0') {
            ElMessageBox.alert(res.msg, "提示")

            // 判断登录超时
            if (res.code === "999") {
                ElMessageBox.confirm('登录超时，可继续停留了当前页面，或者重新登录', '确定登出', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    // store.dispath("Logout").then(() => {
                    //     location.reload()
                    // })
                })
            }
        } else {
            return res.data
        }
    } else {
        ElMessageBox.alert({
            message: JSON.stringify(response),
            type: 'error',
            duration: 5 * 1000
        })
    }
}, error => {
    // Do something with request error
    ElMessageBox.alert({
        message: JSON.stringify(error),
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error)
})

export default service