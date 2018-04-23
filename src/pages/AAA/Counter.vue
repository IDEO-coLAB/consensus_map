<template>
  <div>
    <h1>Story A</h1>
    <p>this is some story content</p>
    <!-- <router-link :to="{ name: 'home' }" v-clear-breadcrumbs>Go home</router-link> -->
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
    }
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
