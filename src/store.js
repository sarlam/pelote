import m from 'moment'

import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'pelotte',
  storage: localStorage
})

export default new Vuex.Store({
  state: {
    incidents: []
  },
  getters: {
    todayIncidents (state) {
      state.incidents.filter(i => m(i.date).isSame(new Date(), 'day'))
    }
  },
  mutations: {
    ADD_INCIDENT (state, incident) {
      // TODO: check incident integrity
      state.incidents.push(incident)
    }
  },
  actions: {},
  plugins: [vuexPersist.plugin]
})
