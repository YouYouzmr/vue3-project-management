const getters = {
    isCollapse: state=> state.sidebar.isCollapse,
    device: state=> state.sidebar.device,
    withoutAnimation: state=> state.sidebar.withoutAnimation,
    themeColor: state=> state.theme.themeColor,
    routesList: state=> state.routesList.routesList,
    userInfo: state=> state.loginInfo.userInfo
}

export default getters