import Home from './views/Home.vue'
import TabDaily from './views/Home/TabDaily'
import TabAdd from './views/Home/TabAdd'
import TabGraph from './views/Home/TabGraph'

import About from './views/About.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,

    tabs: [
      {
        path: '/',
        id: 'tab-daily',
        component: TabDaily
      },
      {
        path: '/add/',
        id: 'tab-add',
        component: TabAdd
      },
      {
        path: '/graph/',
        id: 'tab-graph',
        component: TabGraph
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]
