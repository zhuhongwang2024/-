import { loginAPI } from '@/apis/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    token: getToken() || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setToken(token)
    },
    removeToken(state) {
      state.token = ''
      removeToken()
    }
  },
  actions: {
    async login(ctx, { username, password }) {
      console.log(ctx)
      const res = await loginAPI({ username, password })
      console.log(res)
      ctx.commit('setToken', res.data.token)
    }
  }
}
