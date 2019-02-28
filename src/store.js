import m from 'moment'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    incidents: []
  },
  getters: {
    todayIncidents (state) {
      state.incidents.filter(i => m(i.date).isSame(new Date(), 'day'))
    }
  },
  mutations: {},
  actions: {}
})
