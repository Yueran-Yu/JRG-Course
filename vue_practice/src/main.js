import Vue from 'vue'
import App from './App.vue'
import MyVue from "./MyVue.js"
import Form from './Form.vue'
import Model from './Model.vue'
import {Button, message} from 'ant-design-vue'

Vue.config.productionTip = false

// new MyVue({
//   data(){
//     return {name:'Main'}
//   },
//   render: h => h(App),
// }).$mount('#app')


new Vue({
  render: h => h(Model),
}).$mount('#app')
