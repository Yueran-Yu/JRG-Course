import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import tagListModel from "@/models/tagListModel";
import recordListModel from "@/models/recordListModel";

Vue.config.productionTip = false
Vue.component('Nav', Nav)
Vue.component('Layout', Layout)/**/
Vue.component('Icon', Icon)

// Disadvantage:
// 1 global variables are too many
// 2 severely depend on window
window.store = {
    // store record
    recordList: recordListModel.fetch(),

    // create record
    createRecord: (record: RecordItem) => recordListModel.create(record),

    // tag store
    tagList: tagListModel.fetch(),
    findTag(id: string) {
        // filter 返回的是一个数组
        return this.tagList.filter(t => t.id === id)[0]
    },

    createTag: (name: string) => {
        // point 2: write data: from the tagListModel
        const message = tagListModel.create(name)
        if (message === 'duplicated') {
            window.alert('The tag id duplicated.')
        } else if (message === 'success') {
            window.alert('Added successfully.')
        }
    },
    removeTag: (id: string) => {
        return tagListModel.remove(id);
    },
    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name)
    }
}


new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app')
