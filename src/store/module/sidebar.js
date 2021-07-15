// 左侧菜单隐藏显式控制
const sidebar = {
    state: {
        isCollapse: sessionStorage.getItem('sidebarStatus')
    },
    mutations: {
        toggleSidebar(state) {
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {
        toggleSidebar(context) {
            context.commit('toggleSidebar')
        }
    },
    getters: {

    }
}

export default sidebar