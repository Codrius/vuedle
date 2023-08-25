import Vue from 'vue'
import Vuex from 'vuex'
import game from './modules/game.js'
import authenticator from './modules/authenticator.js'
import { connectAxiosInstanceToStore } from '@/utils/axios.js'

Vue.use(Vuex)

const store = new Vuex.Store({
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

connectAxiosInstanceToStore(store); // Set up axios interceptors, mainly for auth purposes

export default store;