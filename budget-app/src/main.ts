import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import tagListModel from "@/models/tagListModel";

Vue.config.productionTip = false
Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)

window.tagList = tagListModel.fetch()
window.createTag = (name: string)=>{
    // point 2: write data: from the tagListModel
    const message = tagListModel.create(name)
    if (message === 'duplicated') {
        window.alert('The tag id duplicated.')
    } else if (message === 'success') {
        window.alert('Added successfully.')
    }
}
new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app')
