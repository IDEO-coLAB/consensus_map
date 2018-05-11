<template>
  <span
    @click="toggle"
    v-bind:class="{ 'tag is-medium': isVisible }"
  >
    {{data.link}}
    <button
      @click="toggle"
      class="delete is-small"
      v-if="isVisible && data.isExpanded"
    >
    </button>
  </span>
</template>

<script>
  // import _ from 'lodash'
  // import { mapState } from 'vuex'

  export default {
    props: {
      data: Object,
      isVisible: Boolean
    },
    methods: {
      toggle(event) {
        event.preventDefault()
        event.stopPropagation()
        console.log(this.data.isExpanded)
        this.data.isExpanded = !this.data.isExpanded
      }
    }
  }
</script>

<style scoped></style>
