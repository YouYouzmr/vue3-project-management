// 使用模块机制
import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/layout/index'


// 路由懒加载 
// const Foo = () => Promise.resolve({ /* 组件定义对象 */ })
// import('./Foo.vue') // 返回 Promise
// 如果您使用的是 Babel，你将需要添加 syntax-dynamic-import 插件，
// 才能使 Babel 可以正确地解析语法。

// 定义路由
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',    
        component: ()=> import(/* webpackChunkName: "login" */ "@/views/login/index"),
    },
    {
        path: '/main',
        component: Layout,
        children: [
            {
                path: 'index',
                component: ()=> import(/* webpackChunkName: "main" */ "@/views/main/index")
            }
        ]
    },
    {
        path: '/404'
    },
    // {
    //     path: '*',
    //     redirect: '/404'
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // 滚动到锚点， 只在支持 history.pushState 的浏览器使用
    scrollBehavior (to, from , savedPosition) {
        if(savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0}
        }
    }
})


export default router

