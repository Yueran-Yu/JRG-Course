<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad @update:value="onUpdateAmount"/>
      <Types @update:value="onUpdateType"/>
      <Notes @update:value="onUpdateNotes"/>
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";

@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  tags = ['Residence', 'Food', 'Wear', 'Transportation', 'Utilities']


  onUpdateTags(tags: string[]){
    console.log(tags)
  }

  onUpdateNotes(notes: string){
    console.log(notes)
  }

  onUpdateType(type: string){
    console.log(type);
  }

  onUpdateAmount(amount: string){
    console.log(amount);
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