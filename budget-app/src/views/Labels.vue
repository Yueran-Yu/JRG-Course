<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`"><span>{{
            tag.name
          }}</span>
          <Icon class="leftIcon" name="right-arrow"/>
        </router-link>

      </div>
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createTag">New Tag</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import Button from "@/components/Button.vue";


@Component({
  components: {Button}
})
export default class Labels extends Vue {
  tags = window.tagList  // point 1: read data: from the window interface

  createTag() {
    const name = window.prompt('Please enter the tag name:')
    if (name) {
      window.createTag(name)
    }
  }
}
</script>

<style lang="scss" scoped>
.createTag {
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

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #fcc5d1;
    justify-content: space-between;

    svg {
      width: 18px;
      height: 18px;
      color: #a40e5c;
      margin-right: 16px;
    }
  }
}

.button {
  background: #de2f76;
}
</style>