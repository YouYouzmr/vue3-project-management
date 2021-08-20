// 获取当前路径
const routesList = {
    state: {
        routesList: []
    },
    mutations: {
        QUERY_ROUTE_LIST(state) {
            state.routesList = []
        }
    },
    actions: {
        toggleroutesList(context) {
            context.commit('QUERY_ROUTE_LIST')
        }
    },
    getters: {

    }
}

export default routesList