<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script lang="ts">
export default {
  name: "App"
}
</script>


<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";


body {
  line-height: 1.5;
  font-family: $fonts-simple;
}


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
