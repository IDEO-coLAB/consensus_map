<template>
  <div>
    <h1>Story A</h1>
    <p>this is some story content</p>
    <router-link :to="{ name: 'home' }">Go home</router-link>
    <router-link :to="{ name: 'bbb' }">Go to story bbb</router-link>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: mapState([
      'count'
    ]),
    methods: mapActions([
      'countIncrement',
      'countDecrement'
    ])
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
 -->