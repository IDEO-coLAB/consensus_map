import _ from 'lodash'
import * as types from './mutation-types'

const mutations = {
  [types.ADD_BREADCRUMB](state, breadcrumb) {
    state.breadcrumbs.unshift(breadcrumb)
    // console.log('CRUMB ADDED', state.breadcrumbs.length, breadcrumb)
  },
  [types.REMOVE_BREADCRUMB](state, breadcrumb) {
    state.breadcrumbs = _.filter(state.breadcrumbs, (b) => {
      return b.id !== breadcrumb.id
    })
    console.log('CRUMB REMOVED:', state.breadcrumbs.length, breadcrumb)
  },
  [types.CLEAR_BREADCRUMBS](state) {
    state.breadcrumbs = []
  }
}

export default mutations
