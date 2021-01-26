// import Vue from 'vue'
// import App from './App.vue'

const Vue = window.Vue
Vue.config.productionTip = false
import Demo from './Demo.vue'
new Vue({
    components:{
      Frank:Demo
    },
    data() {
        return {
            n: 0,
            array: [1, 2, 3, 4, 5, 6, 7, 8]
        }
    },
    template: `
      <div class="red">
      {{ n }}
      <button @click="add">+1</button>
     <Frank/>
      <p> {{ filterArray() }}</p>
      </div>
    `,
    methods: {
        add() {
            this.n += 1
        },
        filterArray() {
            return this.array.filter(x => x % 2 === 0)
        }
    }
}).$mount('#app')
