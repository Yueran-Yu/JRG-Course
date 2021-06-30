import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";

Vue.config.productionTip = false
Vue.component('Nav', Nav)
Vue.component('Layout', Layout)/**/
Vue.component('Icon', Icon)
// Vue.prototype.$store2 = store2;

// Disadvantage:
// 1 global variables are too many
// 2 severely depend on window

new Vue({
    router: router,
    store:store,
    render: h => h(App)
}).$mount('#app')
