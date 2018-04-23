<template>
  <div>
    <h1>Story B</h1>
    <p>this is some story content</p>
    <router-link :to="{ name: 'home' }">Go home</router-link>
  </div>
</template>

<script>
  // import { mapState, mapActions } from 'vuex'
  // import clearBreadcrumbs from '../../directives/clearBreadcrumbs'
  import addBreadcrumb from '../../directives/addBreadcrumb'

  export default {
    directives: {
      addBreadcrumb
    }
    // computed: mapState([
    //   'count'
    // ]),
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