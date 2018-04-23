<template>
  <div>
    <h1>HOME!</h1>
    <router-link :to="{ name: 'aaa' }" v-add-breadcrumb>Go to story aaa</router-link>
    <br>
    <router-link :to="{ name: 'bbb' }" v-add-breadcrumb>Go to story bbb</router-link>
    <br>
    <router-link :to="{ name: 'ccc' }" v-add-breadcrumb>Go to story ccc</router-link>
    <br>
    Breadcrumb: {{this.breadcrumbs}}
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  // import clearBreadcrumbs from '../../directives/clearBreadcrumbs'
  import addBreadcrumb from '../../directives/addBreadcrumb'

  export default {
    directives: {
      addBreadcrumb
    },
    computed: mapState([
      'breadcrumbs'
    ]),
    data() {
      return {}
    }
  }
</script>
