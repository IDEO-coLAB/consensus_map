<template>
  <div v-show="breadcrumbs.length">
    <hr>
    <div v-show="start">
      START: You started at => {{start && start.text}}
    </div>
    <br>
    <div v-show="previous && (previous !== start)">
      PREV: You just came from => {{previous && previous.text}}
    </div>
    <hr>
  </div>
</template>

<script>
  import _ from 'lodash'
  // import { mapState } from 'vuex'

  export default {
    computed: {
      breadcrumbs() { return this.$store.getters.breadcrumbs },
      start() { return !_.isEmpty(this.breadcrumbs) && _.last(this.breadcrumbs) },
      previous() { return !_.isEmpty(this.breadcrumbs) && _.head(this.breadcrumbs) }
    }
  }
</script>

<style scoped></style>
