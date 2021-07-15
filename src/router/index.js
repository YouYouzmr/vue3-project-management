import { createApp } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"
import layout from "@/views/layout/index"

const routes = [
    {
        path: '/login',
        component: () => require('@/views/login/index')
    },
    {
        path: '/home',
        component: layout,
        children: [
            {
                path: 'index',
                component: () => require("@/views/home/index")
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp({})
app.use(router)

export default router
