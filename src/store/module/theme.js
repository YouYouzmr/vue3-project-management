// 自定义主题色
const theme = {
    state: {
        primaryColor: "blue",
    },
    mutation: {
        toggleTheme(state, color) {
            state.primaryColor = color
            document.getElementsByTagName('body')[0].style.setProperty('--color-primary', state.primaryColor);
        }
    },
    actions: {
        toggleTheme(context) {
            context.commit('toggleTheme', color)
        }
    }
}

export default theme