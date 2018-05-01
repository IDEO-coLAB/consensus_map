<template>
  <div>
    <h1>Tracking the Evolution of Consensus</h1>

    <breadcrumb></breadcrumb>

    <p>Now that economic incentives have been introduced to evolve network consensus mechanisms, we expect to see a growing trend in their development and deployment.</p>

    <p v-for="(type, year) in consensusTypesByYear">
      In {{year}} we tracked {{type.length}} consensus mechanism{{type.length > 1 ? 's' : ''}}
    </p>


    <br>
    <br>


    {{Object.keys(networksByYear)}}

  </div>
</template>

<script>
  import _ from 'lodash'
  import Breadcrumb from '../../components/Breadcrumb'
  import addBreadcrumb from '../../directives/addBreadcrumb'

  export default {
    directives: {
      addBreadcrumb
    },
    components: {
      Breadcrumb
    },
    computed: {
      networks() { return this.$store.getters.networks },
      networksByYear() { return _.groupBy(this.networks, network => network.fields['Go Live']) },
      consensusTypesByYear() {
        let result = {}
        _.each(this.networksByYear, (networks, year) => {
          // Deduped array of consensus types tracked by year
          let consensusType = []
          _.each(networks, (network) => {
            consensusType = _.uniq(consensusType.concat(_.get(network.fields, 'Consensus Type')))
          })
          result[year] = consensusType
        })
        return result
      }
    }
  }
</script>
