import {createStore} from "vuex"

import modules from "./module/index"
import getters from './getters'

const store = createStore({
    modules,
    getters
})

export default store