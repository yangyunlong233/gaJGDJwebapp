import { createStore } from 'vuex'

export default createStore({
  state: {
    nav: []
  },
  getters: {
    getNav (state) {
      return state.nav
    }
  },
  mutations: {
    setNav (state, payload) {
      state.nav = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
