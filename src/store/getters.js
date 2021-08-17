const getters = {
    sidebar: state=> state.sidebar.isCollapse,
    device: state=> state.sidebar.device,
    withoutAnimation: state=> state.sidebar.withoutAnimation,
    themeColor: state=> state.theme.themeColor,
    routesList: state=> state.routesList.routesList
}

export default getters