<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Types :valueType.sync="record.type"/>
      <div class="notes">
        <FormWidget field-name="Notes: "
                    placeholder="Please enter notes here"
                    @update:value="onUpdateNotes"/>
      </div>
      <Tags @update:value="onUpdateTags"/>
      {{ count }}
      <button @click="$store.commit('increment', 10)">+2</button>
<!--      <button @click="add">+1</button>-->
    </Layout>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import FormWidget from "@/components/FormWidget.vue";
import Tags from "@/components/Money/Tags.vue";
import oldStore from "@/store/index2.ts";

@Component({
  components: {Tags, FormWidget, Types, NumberPad},
  computed: {
    count() {
      return this.$store.state.count;
    },
    recordList() {
      return oldStore.recordList;
    }  //  copy the address of recordList to variable recordList

  }
})
export default class Money extends Vue {
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

  onUpdateNotes(notes: string) {
    this.record.notes = notes
  }

  onUpdateTags(tags: string[]) {
    this.record.tags = tags
  }

  saveRecord() {
    oldStore.createRecord(this.record)
  }

  // add(){
  //   store.commit('increment',2)
  // }
}


</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.formItem {
  padding: 10px 0;
}

</style>

<style lang="scss">
@import "~@/assets/style/helper.scss";

</style>