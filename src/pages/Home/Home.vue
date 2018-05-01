<template>
  <div>
    <h1>Cryptoeconomic Agreement</h1>

    <p>Open, distributed cryptoeconomic networks are one of the most important developments our society has encountered in its history. But the field is young, and as a result few understand how these networks operate; with even fewer understanding how the landscape has evolved.</p>

    <h3>From Static Stories</h3>

    <p>The community standard for long-form content is a Medium post. While this is a great tool for capturing the idea of the moment, the static nature of the content eliminates our ability to tell how current a story is when coming back to it in the future. In a rapidly evolving environment, we need a bit more from our stories. We need stories to track not only ideas, but the state of the world.</p>

    <p>What if our stories could tell us if they were current and correct?</p>

    <h3>To Living Stories</h3>

    <p>We track our hypotheses by writing stories capable of evolving as we compile our learnings over time. As of today at {{new Date().toLocaleTimeString()}}, we actively track {{networks && networks.length}} networks and {{consensusTypes && consensusTypes.length}} consensus mechanisms.</p>

    <router-link :to="{ name: 'Evolution' }" v-add-breadcrumb>Hypothesis One</router-link>: We will see an increase in the development and deployment of novel consensus mechanisms.
  </div>
</template>
<script>
  // import _ from 'lodash'
  // import { mapState } from 'vuex'
  import addBreadcrumb from '../../directives/addBreadcrumb'

  export default {
    directives: {
      addBreadcrumb
    },
    computed: {
      consensusTypes() { return this.$store.getters.consensusTypes },
      networks() { return this.$store.getters.networks }
    }
  }
</script>
