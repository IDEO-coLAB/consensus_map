import Vue from 'vue'
import VueRouter from 'vue-router'
import shajs from 'sha.js'

import Home from '../pages/Home'
import Evolution from '../pages/Evolution'
import NotFound from '../pages/NotFound'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    name: 'Evolution',
    path: '/evolution',
    component: Evolution,
    meta: {
      title: 'Evolution',
      breadcrumb: {
        id: shajs('sha256').update(JSON.stringify(Evolution)).digest('hex'),
        text: 'Evolution: This story shows us how the mechanisms used in network consensus have increased in diversity and speed of development.'
      }
    }
  },
  {
    name: 'NotFound',
    path: '*',
    component: NotFound,
    meta: {
      title: 'Not Found'
    }
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.afterEach((to, from) => {
  if (to.meta.title !== undefined) {
    document.title = `Cryptoeconomic Agreement - ${to.meta.title}`
  }
})

export default router
