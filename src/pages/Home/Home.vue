<template>
  <div>
    <h1>HOME!</h1>
    <router-link :to="{ name: 'aaa' }" v-add-breadcrumb>Go to story aaa</router-link>
    <br>
    <router-link :to="{ name: 'bbb' }" v-add-breadcrumb>Go to story bbb</router-link>
  </div>
</template>
<script>
  // import clearBreadcrumbs from '../../directives/clearBreadcrumbs'
  import addBreadcrumb from '../../directives/addBreadcrumb'

  export default {
    directives: {
      addBreadcrumb
    },
    data() {
      return {}
    }
  }
</script>
