import Vue from 'vue'
// import * as types from '../store/mutation-types'

// TODO: REMOVE?

export default Vue.directive('addBreadcrumb', {
  bind: (el, binding, vnode) => {
    // const $router = vnode.context.$router
    // const $store = vnode.context.$store
    // const toRoute = vnode.componentOptions.propsData

    // const breadcrumbDirective = vnode.data.directives.filter((directive) => {
    //   return directive.name === 'add-breadcrumb'
    // })[0]

    // console.log($router.currentRoute.name)

    // const routeObj = $router.options.routes.filter((route) => {
    //   return route.name === toRoute.name
    // })[0]

    el.addEventListener('click', (evt) => {
      // $store.commit(types.ADD_BREADCRUMB, $router.currentRoute.meta.breadcrumb)
    })
  },
  unbind: (el) => {
    el.removeEventListener('click')
  }
})
