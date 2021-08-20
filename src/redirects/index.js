const directives =  {
    install(app) {
        // 按钮放重复提交
        app.directive("prevent-re-click", {
            // 当被绑定的元素挂载到 DOM 中
            mounted(el, binding, vnode) {
                console.log(binding, vnode)
                el.addEventListener("click", () => {
                    if(!el.disabled) {
                        el.disabled = true
                        el.style.opacity = "0.5"
                        el.style.cursor = "not-allowed"
                        setTimeout(()=> {
                            el.disabled = false,
                            el.style.opacity = "0"
                            el.style.cursor = "pointer"
                        }, 1000)
                    }
                })
            },
            created() {
        
            }
        })

        // 按钮权限设置
        app.directive("auth", {
            mounted(el, binding) {
                let perssions = JSON.parse(sessionStorage.getItem('perssions'))
                if(Array.isArray(perssions) && perssions.includes(binding.value)) {
                    el.style.display = "block"
                } else {
                    el.style.display = "none"
                }
            }
        })

        // click 防抖
        app.directive("clickDebounce", {
            mounted(el, binding) {
                let timer;
                el.addEventListener("click", ()=> {
                    if(timer) {
                        clearTimeout(timer)
                    }
                    timer = setTimeout(() => {
                        binding.value()
                    }, 300)
                })
            }
        })

        // input 防抖
        app.directive("inputDebounce", {
            mounted(el, binding) {
                let timer;
                el.addEventListener("input", ()=> {
                    if(timer) {
                        clearTimeout(timer)
                    }
                    timer = setTimeout(() => {
                        binding.value()
                    }, 500)
                })
            }
        })

        // input 防抖
        app.directive("keyupDebounce", {
            mounted(el, binding) {
                let timer;
                el.addEventListener("keyup", ()=> {
                    if(timer) {
                        clearTimeout(timer)
                    }
                    timer = setTimeout(() => {
                        binding.value()
                    }, 500)
                })
            }
        })
    }
}

export default directives