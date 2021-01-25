import { createApp } from 'vue'
import App from './App.vue'

// import style
import "element3/lib/theme-chalk/index.css"
import Element3 from 'element3'

import "@/styles/index.scss"

// import router
import router from './router/index'

// global import
createApp(App).use(Element3).use(router).mount("#app")

// or according to the need to import 
// import {
//     ElLink,
//     ElButton,
//     // ..
// } from "element3"

// createApp(App).use(ElLink).use(ElButton)
