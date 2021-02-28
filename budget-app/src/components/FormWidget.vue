<template>
  <div>
    <label class="notes">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text"
             v-model="value"
             :placeholder="this.placeholder"/>
    </label>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Watch, Prop} from "vue-property-decorator";

@Component
export default class FormWidget extends Vue {
  value = ''
  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;

  // 我不知道这个value是什么作用
  @Watch('value')
  onValueChanged(value: string) {
    this.$emit('update:value', value)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

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
</style>