import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: "can101",
    message: "hello"
  },
  getters: {
    wellcome(state) {
      return `${state.message} ${state.username}`
    }
  },
  mutations: {
    setUserName(state, name) {
      state.username = name;
    }
  },
  actions: {
    updateUserName({ commit }, name) {
      commit('setUserName', name);
    }
  },
  modules: {
  }
})
