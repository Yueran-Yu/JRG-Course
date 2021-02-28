<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left-arrow"/>
      <span class="title">Edit Label</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormWidget field-name="New Tag: " placeholder="Please enter the tag name"/>
    </div>
    <div class="button-wrapper">
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
.navBar {
  text-align: center;
  line-height: 48px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #a70955;
  font-size:20px;
  font-weight: bolder;
  color: white;


  > .title {

  }

  > .leftIcon {

  }

  > .rightIcon {
    padding:10px;
  }

}
.form-wrapper{
  background: white;
  margin-top: 8px;
}

.button-wrapper{
  text-align: center;
  margin-top: 44-16px;
  background: #e04ea8;

}

</style>