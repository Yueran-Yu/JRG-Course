<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad/>
      <Types :example2="908" />
      <Notes/>
      <Tags :data-source="tags"/>
    </Layout>
  </div>
</template>

<script>
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
export default {
  name: "Money",
  components: {Tags, Notes, Types, NumberPad},
  data(){
    return {
      tags: ['Residence','Food','Wear','Transportation','Utilities']
    }
  }

}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss">
@import "~@/assets/style/helper.scss";

</style>