<template>
  <div class="Header">
    <div class="Header-padding">
      <div class="text-center">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .Header-padding {
    padding: 0.5em 0;
  }
</style>
