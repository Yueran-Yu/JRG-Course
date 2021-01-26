// import Vue from 'vue'
// import App from './App.vue'

const Vue = window.Vue
Vue.config.productionTip = false
import Demo from './Demo.vue'

Vue.component('Demo2', {
    template: `<div>Here is the second component Demo2</div>`
})


new Vue({
    components: {
        Frank: Demo,
        Costco:{
            template:`
            <div>Here is the third way to do component.</div>`
        }
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
      <Demo2/>
      <Costco/>
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
