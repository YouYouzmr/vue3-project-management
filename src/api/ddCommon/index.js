import request from "@/utils/request";
import { ElMessageBox } from "element-plus"
import * as dd from 'dingtalk-jsapi';

// 钉钉免登
export function login() {
    return new Promise((resolve, reject) => {
        dd.error((err) => {
            ElMessageBox.alert(err.errorCode + ":" + err.errorMessage, '提示', {
                confirmButtonText: '确定',
                callback: (action) => {
                    console.log(action)
                }
            })
        })

        dd.ready(function () {
            dd.runtime.permission.requestAuthCode({
                corpId: process.env.VUE_APP_CORPID,
                onSuccess: function (result) {
                    resolve({ code: result.code })
                },
                onFail: function (err) {
                    reject(err)
                }
            })
        })
    })
}
// 登录接口请求
export function loginRequest({ code }) {
    return request({
        url: "./customer/userLogin",
        method: "post",
        data: {
            corpid: process.env.VUE_APP_CORPID,
            code: code
        }
    })
}
// 钉钉config获取
export function getConfig() {
    request({
        url: "./dingding/getDDConfig",
        method: "post",
        data: {
            corpId: process.env.VUE_APP_CORPID
        }
    }).then(res => {
        sessionStorage.setItem('ddConfig', JSON.stringify(res))
    })
}
// 鉴权验证
export function initDDConfig() {
    let res = JSON.parse(sessionStorage.getItem('ddConfig'));
    dd.config({
        agentId: res.agentid,         // 必填，微应用ID
        corpId: process.env.VUE_APP_CORPID,           // 必填，企业ID
        timeStamp: res.timeStamp,     // 必填，生成签名的时间戳
        nonceStr: res.nonceStr,       // 必填，生成签名的随机串
        signature: res.signature,     // 必填，签名
        jsApiList: [                  // 必填，需要使用的jsapi列表，注意：不要带dd。
            'device.notification.alert',
            'device.notification.confirm',
            'biz.contact.choose',
            'runtime.permission.requestAuthCode',
            'biz.util.openSlidePanel',
            'biz.contact.complexPicker',
            'biz.util.openLink',
            'biz.util.openModal'
        ]
    })
}
// 钉钉选择联系人
export function ddCheckUser({ multiple, number }) {
    initDDConfig()
    return new Promise((resolve) => {
        dd.error((err) => {
            ElMessageBox.alert(err.errorCode + ":" + err.errorMessage, '提示', {
                confirmButtonText: '确定',
                callback: (action) => {
                    console.log(action)
                }
            })
        })
        dd.ready(() => {
            dd.biz.contack.complexPicker({
                multiple: multiple ? true : false,
                users: [],
                corpId: process.env.VUE_APP_CORPID,
                maxUsers: number ? number : 1,
                onSuccess: function (result) {
                    resolve({ data: result.users })
                },
                onFail: function (err) {
                    ElMessageBox.alert(err.errorCode + ":" + err.errorMessage, '提示', {
                        confirmButtonText: '确定',
                        callback: (action) => {
                            console.log(action)
                        }
                    })
                }
            })
        })
    })
}

// 钉钉选人调用接口
export function asyncSearchUser(data) {
    return new Promise((resolve) => {
        request({
            url: '/dingding/getMailList',
            method: "POST",
            data: { userInfo: data }
        }).then(res=> {
            resolve(res)
        })
    })
}