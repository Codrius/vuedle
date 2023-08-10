import Vue from 'vue'
import Vuex from 'vuex'
import gameModule from './modules/game.js'

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
    game: gameModule
  }
})
