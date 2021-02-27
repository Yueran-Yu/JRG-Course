<template>
  <Layout>
    <div>
      <Icon name="left-arrow"/>
      <span>Edit Label</span>
      <FormWidget field-name="New Tag: " placeholder="Please enter the tag name"/>
    </div>
  </Layout>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import tagListModel from "@/models/tagListModel";
import FormWidget from "@/components/Money/FormWidget.vue";

@Component({
  components: {FormWidget}
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0]
    if (tag) {
      console.log(tag)
    } else {
      //为了防止用户不能后退，需要用 replace 而不是 push
      this.$router.replace('/404')
      console.log((this.$route.params))}
  }
}
</script>

<style lang="scss" scoped>

</style>