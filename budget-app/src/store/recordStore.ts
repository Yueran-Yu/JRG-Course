import clone from "@/lib/clone";

const localStorageKeyName = 'recordList';
// declare the type of data

const recordStore = {
    // store record
    recordList: [] as RecordItem[],
    fetchRecords() {
        this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.recordList
    },
    saveRecords() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
    },
    // create record
    createRecord(record: RecordItem) {
        const record2: RecordItem = clone(record)
        record2.createdAt = new Date()
        // this.recordList?.push(record2)
        //可选连语法
        this.recordList && this.recordList.push(record2)
        recordStore.saveRecords();
    },
};

recordStore.fetchRecords();

export default recordStore;