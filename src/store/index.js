import Vue from 'vue'
import Vuex from 'vuex'
import game from './modules/game.js'
import authenticator from './modules/authenticator.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    game,
    authenticator
  }
})
