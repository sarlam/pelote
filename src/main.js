// Import F7 Bundle
import 'framework7/css/framework7.bundle.css'
import Framework7 from 'framework7/framework7.esm.bundle.js'

// Import F7-Vue Plugin Bundle (with all F7 components registered)
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'

import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'

Vue.config.productionTip = false

// Init F7-Vue Plugin
Framework7.use(Framework7Vue)

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
        id: 'me.jarleton.pelotte'
        // ...
      }
    }
  },
  store,
  render: h => h(App)
}).$mount('#app')
