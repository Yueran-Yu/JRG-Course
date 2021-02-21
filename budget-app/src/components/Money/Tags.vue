<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">New Tag</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          :class="{selected: selectedTags.indexOf(tag)>= 0}"
          @click="toggle(tag)">{{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  // need pass from outside
  @Prop() readonly dataSource: string[] | undefined
  selectedTags: string[] = []

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag)
    if (index >= 0) {
      this.selectedTags.splice(index, 1)
    } else {
      this.selectedTags.push(tag)

    }
  }

  createTag(){
    const name = window.prompt('Please enter the tag name:')
    if(name === ''){
      window.alert("Tag name can't be empty.")
    }else{
      if(this.dataSource){
        this.dataSource.push(name as string)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  padding: 16px;
  $he: 22px;
  flex-grow: 1;
  display: flex;

  flex-direction: column-reverse;

  .current {
    display: flex;
    flex-wrap: wrap;

    li {
      margin-top: 4px;
      height: $he;
      border-radius: $he/2;
      padding: 0 8px;
      margin-right: 10px;
      font-size: 0.7rem;
      font-weight: bold;
      line-height: $he;
      background: #fde4eb;
      color: $color-highlight;

      &.selected {
        color: $color-tag;
        background: $color-highlight;

      }
    }
  }

  .new {
    padding-top: 16px;

    button {
      //color: $font-button;
      color: #ec7373;
      background-color: transparent;
      padding: 0 4px;
      outline: none;
      border: none;
      border-bottom: 2px solid $color-background;

    }
  }
}
</style>