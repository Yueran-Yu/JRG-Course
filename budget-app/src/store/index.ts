import Vue from 'vue';
import Vuex from 'vuex';
import clone from "@/lib/clone";
import createId from "@/lib/idCreator";
import router from "@/router";

Vue.use(Vuex)
// bind the store to Vue.prototype.$store = store
const localStorageTagKeyName = 'tagList';
const localStorageRecordKeyName = 'recordList';
type RootState = {
    recordList: RecordItem[];
    tagList: Tag[];
    currentTag?: Tag;
}
const store = new Vuex.Store({
    state: {
        tagList: [],
        recordList: [],
        currentTag: undefined
    } as RootState,
    mutations: {
        fetchTags(state) {
            state.tagList = JSON.parse(window.localStorage.getItem(localStorageTagKeyName) || '[]');
        },
        createTag(state, name: string) {
            // map method to fetch names array
            const names = state.tagList.map(item => item.name)
            if (names.indexOf(name) >= 0) {
                window.alert('The tag id duplicated.')
                return 'duplicated'
            }
            // this.data = [{id:'1', name: '1'}, {id:'2',name: '2'}]
            const id = createId().toString()
            state.tagList.push({id, name: name})
            store.commit('saveTags')
            window.alert('Added successfully.')
            return 'success';
        },
        setCurrentTag(state, id: string) {
            // filter 返回的是一个数组
            state.currentTag = state.tagList.filter(t => t.id === id)[0]
        },
        updateTag(state, payload: { id: string; name: string }) {
            const {id, name} = payload
            const idList = state.tagList.map(item => item.id)
            if (idList.indexOf(id) >= 0) {
                const names = state.tagList.map(item => item.name)
                if (names.indexOf(name) >= 0) {
                    window.alert('duplicated')
                } else {
                    const tag = state.tagList.filter(item => item.id === id)[0]
                    tag.name = name
                    store.commit('saveTags')
                }
            }
        },
        removeTag(state, id: string) {
            let index = -1
            for (let i = 0; i < state.tagList.length; i++) {
                if (state.tagList[i].id === id) {
                    index = i
                    break
                }
            }
            if(index >= 0){
                state.tagList.splice(index, 1)
                store.commit('saveTags')
                router.back()

        } else {
            window.alert('Delete Failed')
        }
        },
        saveTags(state) {
            window.localStorage.setItem(localStorageTagKeyName, JSON.stringify(state.tagList));
        },
        fetchRecords(state) {
            state.recordList = JSON.parse(window.localStorage.getItem(localStorageRecordKeyName) || '[]') as RecordItem[];
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
            window.localStorage.setItem(localStorageRecordKeyName, JSON.stringify(state.recordList));
        },

    }
})

// console.log(store.state.count);
// store.commit('increment',10)
// console.log(store.state.count);
export default store;