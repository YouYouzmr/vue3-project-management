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
                path: 'analysis',
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
                path: 'table',
                component: () => require("@/views/main/table"),
                meta: {icon: '', name: 'table表单'},
            },
            {
                path: 'card',
                component: () => require("@/views/main/card"),
                meta: {icon: '', name: 'card'},
            },
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
            },
            {
                path: 'detail',
                component: () => require('@/views/staff/detail'),
                meta: {icon: '', name: '员工详情'}
            },
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
    },
    {
        path: '/system',
        component: layout,
        meta: {icon: '', name: '系统管理'},
        childrent: [
            {
                path: 'timeout',
                component: () => require("@/views/system/timeout"),
                meta: {icon: '', name: "定时管理"}
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
