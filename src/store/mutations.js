import * as types from './mutation-types'

const mutations = {
  [types.ADD_BREADCRUMB](state, breadcrumb) {
    state.breadcrumbs.unshift(breadcrumb)
  },
  [types.REMOVE_BREADCRUMB](state) {
    state.breadcrumbs.shift()
  },
  [types.CLEAR_BREADCRUMBS](state) {
    state.breadcrumbs = []
  }
}

export default mutations
