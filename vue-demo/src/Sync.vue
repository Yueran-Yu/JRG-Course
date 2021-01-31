<template>
  <div class="app">
    <button v-x v-y>Today we need to learn vue directives</button>
    <hr>
    Sync.vue Currently I have {{ total }}
    <hr>
    <!-- <Child :money="total" v-on:update:money="total=$event"/>-->
    <!--Simplified as below -->
    <Child :money.sync="total"/>
  </div>
</template>

<script>
import Child from "./Child.vue"

export default {
  data() {
    return {total: 10000}
  },

  // components:{Child: Child} simplify below
  components: {Child}
}
</script>

<style>
.app {
  border: 3px solid red;
  padding: 8px;
}
</style>