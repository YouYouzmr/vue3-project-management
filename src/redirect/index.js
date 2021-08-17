import { createApp } from "vue"

const app = createApp({})

// 注册一个全局防重提交指令
app.directive("prevent-re-click", {
    // 当被绑定的元素挂载到 DOM 中
    mounted(el, binding, vnode) {
        console.log(binding, vnode)
        el.addEventListener("click", () => {
            if(!el.disabled) {
                el.disabled = true
            }
        })
    },
    created() {

    }
})