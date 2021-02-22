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

const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]')

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number; // data type => object / string
  createdAt?: Date; // class/constructor=> class is used to divide objects
  // 问号的意思是 createAt 可以不存在
}

@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  tags = ['Residence', 'Food', 'Wear', 'Transportation', 'Utilities']
  record: Record = {tags: [], notes: '', type: '-', amount: 0};
  recordList: Record[] = recordList;

  onUpdateTags(tags: string[]) {
    this.record.tags = tags
  }

  onUpdateNotes(notes: string) {
    this.record.notes = notes
  }

  saveRecord() {
    const record2: Record = JSON.parse(JSON.stringify(this.record))
    record2.createdAt = new Date()
    this.recordList.push(record2)
    // console.log(this.recordList)
  }

  @Watch('recordList')
  onRecordListChanged() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList))
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