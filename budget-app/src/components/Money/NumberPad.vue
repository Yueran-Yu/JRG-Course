<template>
  <div class="numberPad">
    <div class="output">{{output}}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">Delete</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">Clear</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class NumberPad extends Vue {
  @Prop() readonly value!: number
  output = this.value.toString()

  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement
    const input = button.textContent as string

    if (this.output.length === 16) return
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input
      } else {
        this.output += input
      }
      return
    }

    if (this.output.indexOf('.') >= 0 && input === '.') return
    this.output += input
  }

  remove() {
    if (this.output.length === 1) {
      this.output = '0'
    } else {
      this.output = this.output.slice(0, -1)
    }
  }

  clear() {
    this.output = '0'
  }

  ok() {
    this.$emit('update:value', this.output)
  }
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
    min-height: 55px;

  }

  .buttons {
    @extend %clearFix;

    button {
      width: 25%;
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
        width: 25*2%;
      }

      $bg: #fcf5f7;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 8%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 12%);
      }

      &:nth-child(8), &:nth-child(11) {
        background: darken($bg, 16%);
      }

      &:nth-child(12) {
        background: darken($bg, 25%);
      }

      &:nth-child(13) {
        background: darken($bg, 21%);
      }

      &:nth-child(14) {
        background: darken($bg, 23%);
      }
    }
  }
}
</style>