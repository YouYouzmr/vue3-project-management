// 左侧菜单隐藏显式控制
const sidebar = {
    state: {
        isCollapse: sessionStorage.getItem('sidebarStatus'),
        device: "pc",
        withoutAnimation: true
    },
    mutations: {
        TOGGLE_SIDEBAR(state) {
            state.withoutAnimation = false
            state.isCollapse = !state.isCollapse
        },
        TOGGLE_DEVICE(state, device) {
            state.device = device
        },
        CLOSE_SIDEBAR(state, { withoutAnimation }) {
            state.withoutAnimation = withoutAnimation
            state.isCollapse = true
        }
    },
    actions: {
        toggleSidebar(context) {
            context.commit('TOGGLE_SIDEBAR')
        },
        toggleDevice(context, device) {
            context.commit("TOGGLE_DEVICE", device)
        },
        CloseSideBar(context, obj) {
            context.commit("CLOSE_SIDEBAR", obj)
        }
    },
    getters: {

    }
}

export default sidebar