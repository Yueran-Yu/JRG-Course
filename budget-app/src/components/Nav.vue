<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      New
    </router-link>

    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"/>
      Tags
    </router-link>

    <router-link to="/statistics" class="item" active-class="selected">
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
@import "~@/assets/style/helper.scss";
nav {
  @extend %outerShadow;
  display: flex;
  flex-direction: row;

  .item {
    margin: 5px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 0.8em;


    .icon {
      width: 25px;
      height: 25px;
      margin-bottom: 2px;
    }
  }

  .item.selected {
    color: $color-highlight;
  }
}
</style>