<template>
  <div>
    <Layout>
      <ol class="tags">
        <li v-for="tag in tags" :key="tag.id"><span>{{ tag.name }}</span>
          <Icon name="arrow"/>
        </li>
      </ol>
      <div class="createTag-wrapper">
        <button class="createTag" @click="createTag">New Tag</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";

tagListModel.fetch()

@Component
export default class Labels extends Vue {
  tags = tagListModel.data

  createTag() {
    const name = window.prompt('Please enter the tag name: ')
    if (name) {
      const message = tagListModel.create(name)
      if (message === 'duplicated')
        window.alert('Tag name duplicated.')
    } else {
      window.alert('Added Successfully!')
    }
  }
}
</script>

<style lang="scss" scoped>
.createTag {
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

.tags {
  background: #ffe3eb;
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;

  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #fcc5d1;
    justify-content: space-between;

    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
</style>