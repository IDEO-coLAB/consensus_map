import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import AAA from '../pages/AAA'
import BBB from '../pages/BBB'

// import GeographicalIp from './GeographicalIp'
import NotFoundComponent from './NotFoundComponent'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    name: 'aaa',
    path: '/aaa',
    component: AAA,
    meta: {
      title: 'AAA'
    }
  },
  {
    name: 'bbb',
    path: '/bbb',
    component: BBB,
    meta: {
      title: 'BBB'
    }
  },
  // {
  //   name: 'geographicalIp',
  //   path: '/geographical-ip',
  //   component: GeographicalIp,
  //   meta: {
  //     title: 'Geographical Ip',
  //     keepAlive: false // set false to re-rendering component state
  //   }
  // },
  {
    name: 'notFound',
    path: '*',
    component: NotFoundComponent,
    meta: {
      title: '404 Not Found'
    }
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.afterEach(to => {
  if (to.meta.title !== undefined) {
    document.title = `${to.meta.title} - Vue-vuex-starter-kit`
  }
})

export default router
