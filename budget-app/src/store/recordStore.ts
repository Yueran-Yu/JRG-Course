import clone from "@/lib/clone";

const localStorageKeyName = 'recordList';
// declare the type of data
let data: RecordItem[] | undefined = undefined;


const recordStore = {
    // store record
    recordList: data,
    fetchRecords() {
        data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return data
    },
    saveRecords() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    },
    // create record
    createRecord: (record: RecordItem) => {
        const record2: RecordItem = clone(record)
        record2.createdAt = new Date()
        data && data.push(record2)
        recordStore.saveRecords();
    },
};

recordStore.fetchRecords();

export default recordStore;