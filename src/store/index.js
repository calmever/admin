import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo:''
  },
  mutations: {
    login(state, v) {
      state.userinfo = v
    }
  },
  actions: {
  },
  modules: {
  }
})
