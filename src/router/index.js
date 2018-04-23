import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import AAA from '../pages/AAA'
import BBB from '../pages/BBB'
import CCC from '../pages/CCC'

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
      title: 'AAA',
      breadcrumb: {
        id: '234',
        text: 'AAA: Basic depth aaa'
      }
    }
  },
  {
    name: 'bbb',
    path: '/bbb',
    component: BBB,
    meta: {
      title: 'BBB',
      breadcrumb: {
        id: '345',
        text: 'BBB: Deeper depth bbb'
      }
    }
  },
  {
    name: 'ccc',
    path: '/ccc',
    component: CCC,
    meta: {
      title: 'CCC',
      breadcrumb: {
        id: '456',
        text: 'CCC: Some other thing ccc'
      }
    }
  },
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

router.afterEach((to, from) => {
  if (to.meta.title !== undefined) {
    document.title = `${to.meta.title} - Vue-vuex-starter-kit`
  }
})

export default router
