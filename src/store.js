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
    incidents: [],
    locale: null
  },
  getters: {
    todayIncidents (state) {
      return state.incidents
        .filter(i => m(i.date).isSame(new Date(), 'day'))
        .map(i => {
          i.mDate = m(i.date).toDate()
          return i
        })
      // TODO: sort sur la date
    }
  },
  mutations: {
    ADD_INCIDENT (state, incident) {
      // TODO: check incident integrity
      state.incidents.push(incident)
    },
    SET_LANG (state, lang) {
      state.locale = lang
    }
  },
  actions: {},
  plugins: [vuexPersist.plugin]
})
