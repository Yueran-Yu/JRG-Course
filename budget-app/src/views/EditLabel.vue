<template>
  <Layout>
    <div>

      <Icon name="left-arrow"/>
      <span>Edit Label</span>
      <FormWidget field-name="New Tag: " placeholder="Please enter the tag name"/>
      <Button>Delete Tag</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import tagListModel from "@/models/tagListModel";
import FormWidget from "@/components/FormWidget.vue";
import Button from "@/components/Button.vue";

@Component({
  components: {Button, FormWidget}
})
export default class EditLabel extends Vue {
  created() {
    // 这一步很重要，怎么获取，url上的ID
    const id = this.$route.params.id
    tagListModel.fetch();
    const tags = tagListModel.data;
    // filter 返回的是一个数组
    const tag = tags.filter(t => t.id === id)[0]
    if (tag) {
      console.log(tag)
    } else {
      //为了防止用户不能后退，需要用 replace 而不是 push
      this.$router.replace('/404')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>