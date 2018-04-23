<template>
  <div>
    <h1>Story CCC</h1>
    <breadcrumb></breadcrumb>
    <br>
    <router-link :to="{ name: 'home' }">Go home</router-link>
    <br>
    <router-link :to="{ name: 'aaa' }">Go aaa</router-link>
    <br>
    <router-link :to="{ name: 'bbb' }">Go bbb</router-link>
    <br>
    <br>
    <p>Breadcrumbs: {{this.breadcrumbs}}</p>
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
      'breadcrumbs'
    ])
  }
</script>
