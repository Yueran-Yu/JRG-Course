<template>
  <div class="nav">
    <router-link to="/money">New</router-link>
    |
    <router-link to="/labels">Tags</router-link>
    |
    <router-link to="/statistics">Statistics</router-link>
  </div>
</template>

<script lang="ts">
import label from '@/assets/icons/label.svg';

console.log(label);
export default {
  name: "Nav"
}
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid pink;
}
</style>