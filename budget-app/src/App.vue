<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script lang="ts">
import store from "@/store/index2";

export default {
  name: "App",
  data(){
    return {
      store: store
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

body {
  line-height: 1.5;
  font-family: $fonts-simple;
  font-size: 16px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
