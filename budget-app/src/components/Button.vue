<template>
  <button class="button" @click="$emit('click', $event)">
    <slot/>
  </button>

</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>
.button {
  background: #de2f76;
  color: white;
  font-weight: bolder;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  //表示父元素
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>