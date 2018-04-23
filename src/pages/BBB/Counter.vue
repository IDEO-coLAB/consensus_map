<template>
  <div>
    <h1>Story BBB</h1>
    <breadcrumb></breadcrumb>
    <br>
    <router-link :to="{ name: 'home' }">Go home</router-link>
    <br>
    <router-link :to="{ name: 'aaa' }">Go to aaa</router-link>
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
      'breadcrumbs'
    ])
    // created () {
    //   console.log(this.$store.getters)
    // }
    // methods: mapActions([
    //   'countIncrement',
    //   'countDecrement'
    // ])
  }
</script>

<!-- <style lang="scss" scoped>
  .count {
    margin: 1em 0;
  }

  .count-btns {
    > .btn {
      margin-right: 10px;
    }
  }
</style>
 -->’