<template>
  <div>
    <Layout class-prefix="layout">
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
      <div>
        <ul class="types">
          <li class="selected">Expense</li>
          <li class="">Income</li>
        </ul>
      </div>
      <div>
        <label class="notes">
          <span class="name">Notes</span>
          <input type="text" placeholder="Please enter notes here"/>
        </label>
      </div>
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
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Money"
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss">
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

.types {
  background-color: $color-highlight;
  display: flex;
  font-size: 18px;

  li {
    width: 50%;
    text-align: center;
    height: 45px;
    font-weight: bolder;
    color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      border-bottom: 4px solid $color-highlight;
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: white;
    }
  }
}

.notes {
  background: #fff7fa;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    color: #ae003d;
    font-size: 14px;
  }

  input {
    margin-left: 10px;
    height: 50px;
    border: none;
    flex-grow: 1;
    background: transparent;


  }

  input::placeholder {
    font-style: italic;
    font-size: 13px;
    color: #ababab;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
}

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