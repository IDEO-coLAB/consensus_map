import Vue from 'vue'

export default Vue.directive('addBreadcrumb', {
  bind: (el, binding, vnode) => {
    const $router = vnode.context.$router
    const $store = vnode.context.$store
    const route = vnode.componentOptions.propsData

    console.log($store)

    el.addEventListener('click', () => {
      console.log('adding context!')
      $router.push(route)
    })
  },
  unbind: (el) => {
    el.removeEventListener('click')
  }
})
