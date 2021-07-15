import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Antd from 'ant-design-vue';
// import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import ElementPlus from "element-plus"
import "./styles/theme.scss"

import "./styles/index.scss"


createApp(App)
    .use(ElementPlus)
    .use(router)
    .use(store)
    .mount('#app')
