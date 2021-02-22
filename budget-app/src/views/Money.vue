<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Types :valueType.sync="record.type"/>
      <Notes @update:value="onUpdateNotes"/>
      <Tags :dataSource.sync="tags" @update:valueTags="onUpdateTags"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch} from "vue-property-decorator";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
}

@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  tags = ['Residence', 'Food', 'Wear', 'Transportation', 'Utilities']
  record: Record = {tags: [], notes: '', type: '-', amount: 0};
  recordList: Record[] = []

  onUpdateTags(tags: string[]) {
    this.record.tags = tags
  }

  onUpdateNotes(notes: string) {
    this.record.notes = notes
  }

  saveRecord() {
    const deepClone = JSON.parse(JSON.stringify(this.record))
    this.recordList.push(deepClone)
    console.log(this.recordList)
  }

  @Watch('recordList')
  onRecordListChanged() {
    window.localStorage .setItem('recordList', JSON.stringify(this.recordList))
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