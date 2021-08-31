import { login, loginRequest, getConfig } from "@/api/ddCommon/index"

const loginInfo = {
    state: {
        userInfo: null,
    },
    mutations: {
        async LOGIN(state) {
            let code = await login()
            loginRequest({code})
                .then(res=> {
                    state.userInfo = res.data
                    getConfig()
                })

        }
    },
    actions: {
        loginHandler({commit}) {
            commit("LOGIN")
        }
    }
}

export default loginInfo