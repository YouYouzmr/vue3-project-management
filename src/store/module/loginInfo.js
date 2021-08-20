const loginInfo = {
    state: {
        userInfo: null,
    },
    mutation: {
        LOGIN(state) {
            setTimeout(() => {
                state.userInfo = {id: 1}
                console.log('login method')
            }, 1000)
        }
    },
    actiion: {
        login({commit}) {
            commit("LOGIN")
        }
    }
}

export default loginInfo