import {createApp} from "vue"
import {createStore} from "vuex"

import modules from "./module/index"
import getters from './getters'

const store = createStore({
    modules,
    getters
})

const app = createApp({})
app.use(store)

export default store