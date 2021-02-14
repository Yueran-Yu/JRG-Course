<template>
  <div class="nav">
    <router-link to="/money">
      <Icon name="money" />
      New
    </router-link>
    |
    <router-link to="/labels">
      <Icon name="label"/>
      Tags
    </router-link>
    |
    <router-link to="/statistics">
      <Icon name="statistics"/>
      Statistics
    </router-link>
  </div>
</template>

<script lang="ts">

export default {
  name: "Nav"
}
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid pink;
}
</style>