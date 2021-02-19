<template>
  <div class="tags">
    <div class="new">
      <button>New</button>
    </div>
    <ul class="current">
      <li>Residence</li>
      <li>Food</li>
      <li>Wear</li>
      <li>Transportation</li>

    </ul>
  </div>
</template>

<script lang="ts">
export default {
name: "Tags"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  color: $color-tag;
  padding: 16px;
  $he: 22px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  .current {
    display: flex;
    flex-wrap: wrap;

    li {
      background: $color-highlight;
      height: $he;
      border-radius: $he/2;
      padding: 0 8px;
      margin-right: 10px;
      font-size: 0.7rem;
      font-weight: bold;
      line-height: $he;
    }
  }

  .new {
    padding-top: 16px;

    button {
      //color: $font-button;
      color: #fda3a3;
      background-color: transparent;
      padding: 0 4px;
      outline: none;
      border: none;
      border-bottom: 2px solid $color-background;

    }
  }
}
</style>