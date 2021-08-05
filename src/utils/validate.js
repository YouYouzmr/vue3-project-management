
/** 校验密码 */
export function validatePassword(password) {
    let reg = /^[a-z0-9_-]{6,18}$/
    return reg.test(password)
}

/** 校验 email */
export function validateEmail(email) {
    let reg = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/
    return reg.test(email)
}

/** 校验 url */
export function validateUrl(url) {
    let reg = /^((https || http || ftp)?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    return reg.test(url)
}

/** 校验 html */
export function validateEle(ele) {
    let reg = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/
    return reg.test(ele)
}

/** 验证手机号 (简单校验11位) */
export function validatePhone(phone) {
    let reg = /^1\d{10}$/
    return reg.test(phone)
}