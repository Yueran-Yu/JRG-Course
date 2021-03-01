<template>
  <div>
    <Layout class-prefix="layout">
      {{record}}
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Types :valueType.sync="record.type"/>
      <div class="notes">
      <FormWidget field-name="Notes: "
             placeholder="Please enter notes here"
             @update:value="onUpdateNotes"/>
      </div>
      <Tags :dataSource.sync="tags" @update:valueTags="onUpdateTags"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import FormWidget from "@/components/FormWidget.vue";
import Tags from "@/components/Money/Tags.vue";
import recordListModel from "@/models/recordListModel";

const recordList = recordListModel.fetch()


@Component({
  components: {Tags, FormWidget, Types, NumberPad}
})
export default class Money extends Vue {
  tags = window.tagList
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
  recordList: RecordItem[] = recordList;

  onUpdateTags(tags: string[]) {
    this.record.tags = tags
  }

  onUpdateNotes(notes: string) {
    this.record.notes = notes
  }

  saveRecord() {
   recordListModel.create(this.record)
  }

  @Watch('recordList')
  onRecordListChanged() {
    recordListModel.save()
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.formItem{
  padding:10px 0;
}

</style>

<style lang="scss">
@import "~@/assets/style/helper.scss";

</style>