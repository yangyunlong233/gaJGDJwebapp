import { createStore } from 'vuex'

import { columnTypeAState } from './columnTypeAConfig.js'
import { columnTypeBState } from './columnTypeBConfig.js'
import { columnTypeCState } from './columnTypeCConfig.js'
import { columnSliderIdState, columnSliderFloatIdState } from './columnSliderIdConfig.js'

export default createStore({
  state: {
    nav: [],
    columnTypeCState,
    columnTypeBState,
    columnTypeAState,
    columnSliderIdState,
    columnSliderFloatIdState
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
