import Vue from 'vue';
import Vuex from 'vuex';
import clone from "@/lib/clone";

Vue.use(Vuex)
// bind the store to Vue.prototype.$store = store
const localStorageKeyName = 'recordList';
const store = new Vuex.Store({
    state: {
        // store record
        recordList: [] as RecordItem[],
    },
    mutations: {
        fetchRecords(state) {
            state.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        },
        createRecord(state, record: RecordItem) {
            const record2: RecordItem = clone(record)
            record2.createdAt = new Date()
            // this.recordList?.push(record2)
            state.recordList.push(record2)
            store.commit('saveRecords')
            // recordStore.saveRecords();
        },
        saveRecords(state) {
            window.localStorage.setItem(localStorageKeyName, JSON.stringify(state.recordList));
        }
    }
})

// console.log(store.state.count);
// store.commit('increment',10)
// console.log(store.state.count);
export default store;