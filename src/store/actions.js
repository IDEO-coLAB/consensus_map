import axios from 'axios'

import * as mutationTypes from './mutation-types'
import * as actionTypes from './action-types'

const KEY = 'keyNAq63kkfbTFZdE'

const actions = {
  [actionTypes.LOAD_NETWORKS]({ commit, state }) {
    return axios.get(
      'https://api.airtable.com/v0/appSXSYhMu8ZxHNsS/Networks',
      {
        headers: { Authorization: `Bearer ${KEY}` }
      })
      .then(response => {
        commit(mutationTypes.SET_NETWORKS, response.data.records)
      })
      .catch(response => console.error('ERROR!!!', response))
  }
}

export default actions
