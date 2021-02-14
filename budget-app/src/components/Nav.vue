<template>
  <nav>
    <router-link to="/money" class="item">
      <Icon name="money"/>
      New
    </router-link>

    <router-link to="/labels" class="item">
      <Icon name="label"/>
      Tags
    </router-link>

    <router-link to="/statistics" class="item">
      <Icon name="statistics"/>
      Statistics
    </router-link>
  </nav>
</template>

<script lang="ts">

export default {
  name: "Nav"
}
</script>

<style lang="scss" scoped>

nav {
  display: flex;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  flex-direction: row;

  .item {
    margin: 10px 0;
    width:33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #7a7979;
  }
  .icon{
    width: 30px;
    height: 30px;
    margin-bottom: 2px;
  }
}
</style>