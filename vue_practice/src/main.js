import Vue from 'vue'
import App from './App.vue'
import MyVue from "./MyVue.js"

Vue.config.productionTip = false

new MyVue({
  data(){
    return {name:'Main'}
  },
  render: h => h(App),
}).$mount('#app')
