<template>
  <div>
    <ul class="types">
      <!--以下是vue简写的方法，type === '-'? 'selected': '' -->
      <li :class="valueType=== '-' && 'selected'" @click="selectType('-')">Expense</li>
      <li :class="valueType==='+' && 'selected'" @click="selectType('+')">Income</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";

@Component
export default class Types extends Vue {
  @Prop() readonly valueType!: string
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('Type is unknown.')
    }
    this.$emit('update:valueType', type)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
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
</style>