import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from "echarts"
import directives from "./redirects/index"
import icons from "./icons/index"

// import Antd from 'ant-design-vue';
// import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import ElementPlus from "element-plus"
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import "./styles/theme.scss"
import "./styles/index.scss"

import "default-passive-events"

const app = createApp(App)

app.use(ElementPlus, {locale: zhCn})
    .use(router)
    .use(store)
    .use(directives)
    .use(icons)
    .mount('#app')

app.config.globalProperties.$echarts = echarts
