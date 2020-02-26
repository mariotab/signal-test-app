import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: 0
  },
  mutations: {
    setTime (state, time) {
      state.time = time
    }
  },
  actions: {
  },
  modules: {
  }
})
