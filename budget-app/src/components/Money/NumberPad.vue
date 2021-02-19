<template>
  <div class="numberPad">
    <div class="output">100</div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>Delete</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>Clear</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>×</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button>.</button>
      <button>÷</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NumberPad"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 30px;
    padding: 5px 16px;
    font-family: Consolas, monospace;
    text-align: right;

  }

  .buttons {
    @extend %clearFix;

    button {
      width: 20%;
      outline: none;
      border: none;
      background: transparent;
      height: 64px;
      float: left;

      &.ok {
        height: 64*2px;
        float: right;
      }

      &.zero {
        width: 20*2%;
      }

      $bg: #fcf5f7;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(6) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(7), &:nth-child(11) {
        background: darken($bg, 8%);
      }

      &:nth-child(4), &:nth-child(8), &:nth-child(12) {
        background: darken($bg, 12%);
      }

      &:nth-child(16) {
        background: darken($bg, 14%);
      }

      &:nth-child(5), &:nth-child(9), &:nth-child(13) {
        background: darken($bg, 16%);
      }

      &:nth-child(10), &:nth-child(14), &:nth-child(17) {
        background: darken($bg, 20%);
      }

      &:nth-child(18) {
        background: darken($bg, 24%);
      }

      &:nth-child(15) {
        background: darken($bg, 26%);
      }
    }
  }
}
</style>