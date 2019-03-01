// Import F7 Bundle
import 'framework7/css/framework7.bundle.css'
import 'framework7-icons/fonts/Framework7Icons-Regular.ttf'
import 'framework7-icons/css/framework7-icons.css'
import Framework7 from 'framework7/framework7.esm.bundle.js'
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './lang'
import dateTimeFormats from './lang/date'
import App from './App.vue'
import routes from './router'
import store from './store'

Vue.config.productionTip = false

Framework7.use(Framework7Vue)
Vue.use(VueI18n)

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages, // set locale messages
  dateTimeFormats
})

new Vue({
  data () {
    return {
      // Framework7 parameters that we pass to <f7-app> component
      f7params: {
        // Array with app routes
        routes,
        // App Name
        name: 'pelotte',
        // App id
        id: 'me.jarleton.pelotte',
        // ...,
        material: true
      }
    }
  },
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
