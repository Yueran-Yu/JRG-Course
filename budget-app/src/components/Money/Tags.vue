<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">New Tag</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>= 0}"
          @click="toggle(tag)">{{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";

@Component({
  computed:{
    // TODO
    tagList(){
      // return this.$store.fetchTags()
      return [];
    }
  }
})

export default class Tags extends Vue {

  selectedTags: Tag[] = []

  toggle(tag: Tag) {
    const index = this.selectedTags.indexOf(tag)
    if (index >= 0) {
      this.selectedTags.splice(index, 1)
    } else {
      this.selectedTags.push(tag)

    }
    //这个方法里， this.selectedTags 是传出去的参数
    //Tags.vue组件里的 update:valueTags  名字需要和  Money.vue 里的 @update:valueTags 一样
    this.$emit('update:valueTags', this.selectedTags)
  }

  createTag() {
    const name = window.prompt('Please enter the tag name:')
    if (!name) { return window.alert("Tag name can't be empty.") }
    // TODO
    // store.createTag(name)
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