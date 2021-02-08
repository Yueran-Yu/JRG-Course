import Vue from 'vue'
import App from './App.vue'
import TurnPlay from './TurnPlay.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(TurnPlay),
}).$mount('#app')
