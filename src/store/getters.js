const getters = {
    sidebar: state=> state.sidebar.isCollapse,
    themeColor: state=> state.theme.themeColor,
    routesList: state=> state.routesList.routesList
}

export default getters