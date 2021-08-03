import { createApp } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"
import layout from "@/views/layout/index"

const routes = [
    {
        path: '/',
        component: () => require('@/views/login/index')
    },
    {
        path: '/dashboard',
        component: layout,
        meta: {icon: '', name: 'dashboard'},
        children: [
            {
                path: 'index',
                component: () => require("@/views/dashboard/index"),
                meta: {icon: '', name: '工作台'},
            },
            {
                path: 'index',
                component: () => require("@/views/dashboard/analysis"),
                meta: {icon: '', name: '分析页'},
            },
        ]
    },
    {
        path: '/main',
        component: layout,
        meta: {icon: '', name: '基础组件'},
        children: [
            {
                path: 'index',
                component: () => require("@/views/main/index"),
                meta: {icon: '', name: 'table表单'},
            }
        ]
    },
    {
        path: '/staff',
        component: layout,
        meta: {icon: '', name: '员工管理'},
        children: [
            {
                path: 'index',
                component: () => require('@/views/staff/index'),
                meta: {icon: '', name: '员工花名册'}
            }
        ]
    },
    {
        path: '/project',
        component: layout,
        meta: {icon: '', name: '项目管理'},
        children: [
            {
                path: 'index',
                component: () => require("@/views/project/index"),
                meta: {icon: '', name: '项目列表'}
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp({})
app.use(router)

export default router
