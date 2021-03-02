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
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)


// store record
window.recordList = recordListModel.fetch()

// create record
window.createRecord = (record: RecordItem) => recordListModel.create(record)

//remove record


// tag store
window.tagList = tagListModel.fetch()

window.findTag = (id: string) => {
    // filter 返回的是一个数组
    return window.tagList.filter(t => t.id === id)[0]
}

window.createTag = (name: string) => {
    // point 2: write data: from the tagListModel
    const message = tagListModel.create(name)
    if (message === 'duplicated') {
        window.alert('The tag id duplicated.')
    } else if (message === 'success') {
        window.alert('Added successfully.')
    }
}

window.removeTag = (id: string) => {
    return tagListModel.remove(id);
}

window.updateTag = (id: string, name: string) => {
    return tagListModel.update(id, name)
}


new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app')
