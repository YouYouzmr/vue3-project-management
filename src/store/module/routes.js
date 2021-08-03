// 获取当前路径
const routesList = {
    state: {
        routesList: []
    },
    mutations: {
        queryroutesList(state) {
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {
        toggleroutesList(context) {
            context.commit('toggleroutesList')
        }
    },
    getters: {

    }
}

export default routesList