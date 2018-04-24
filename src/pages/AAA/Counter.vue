<template>
  <div>
    <h1>Story AAA</h1>
    <breadcrumb></breadcrumb>
    <p>We are tracking {{networks.length}} networks in the ontology table</p>

    <br>
    <router-link :to="{ name: 'home' }">Go home</router-link>
    <br>
    <router-link :to="{ name: 'bbb' }">Go to bbb</router-link>
    <br>
    <router-link :to="{ name: 'ccc' }">Go to ccc</router-link>
    <br>
    <br>
    Breadcrumb: {{this.breadcrumbs}}
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  // import clearBreadcrumbs from '../../directives/clearBreadcrumbs'
  import Breadcrumb from '../../components/Breadcrumb'
  import addBreadcrumb from '../../directives/addBreadcrumb'

  export default {
    directives: {
      addBreadcrumb
    },
    components: {
      Breadcrumb
    },
    computed: mapState([
      'breadcrumbs',
      'networks'
    ])
    // data() {
    //   return {
    //     breadcrumb: {
    //       description: 'some context',
    //       level: 1
    //     }
    //   }
    // }
    // ,
    // computed: mapState([
    //   'count'
    // ])
    // methods: mapActions([
    //   'countIncrement',
    //   'countDecrement'
    // ])
  }
</script>
