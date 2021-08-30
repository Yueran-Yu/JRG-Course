import Vue from 'vue'
import App from './App.vue'
import MyVue from "./MyVue.js"
import Form from './Form.vue'
import Model from './Model.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
Vue.use(Antd)

// new MyVue({
//   data(){
//     return {name:'Main'}
//   },
//   render: h => h(App),
// }).$mount('#app')


new Vue({
  render: h => h(Model),
}).$mount('#app')
