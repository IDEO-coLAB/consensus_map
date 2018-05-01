import axios from 'axios'

import * as mutationTypes from './mutation-types'
import * as actionTypes from './action-types'

const KEY = 'keyNAq63kkfbTFZdE'
const API_URL_BASE = 'https://api.airtable.com/v0/appSXSYhMu8ZxHNsS'

const actions = {
  [actionTypes.LOAD_NETWORKS]({ commit, state }) {
    return axios.get(
      `${API_URL_BASE}/Networks`,
      {
        headers: { Authorization: `Bearer ${KEY}` }
      })
      .then(response => {
        const networks = response.data.records
        commit(mutationTypes.SET_NETWORKS, networks)
      })
      .catch(response => console.error('ERROR!!!', response))
  },

  [actionTypes.LOAD_CONSENSUS_TYPES]({ commit, state }) {
    return axios.get(
      `${API_URL_BASE}/Consensus%20Types`,
      {
        headers: { Authorization: `Bearer ${KEY}` }
      })
      .then(response => {
        const types = response.data.records
        console.log(types)
        commit(mutationTypes.SET_CONSENSUS_TYPES, types)
      })
      .catch(response => console.error('ERROR!!!', response))
  }
}

export default actions
