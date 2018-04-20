<template>
  <div>
    <h1>HOME!</h1>
    <router-link :to="{ name: 'aaa' }">Go to story aaa</router-link>
    <br>
    <router-link :to="{ name: 'bbb' }">Go to story bbb</router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
