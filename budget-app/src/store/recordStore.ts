import recordListModel from "@/models/recordListModel";

export default {
    // store record
    recordList: recordListModel.fetch(),
    // create record
    createRecord: (record: RecordItem) => recordListModel.create(record),


}