// import Vue from 'vue'
// import App from './App.vue'

const Vue = window.Vue
Vue.config.productionTip = false
import Demo from './Demo.vue'

// Vue.component('Demo2', {
//     template: `<div>Here is the second component Demo2</div>`
// })


new Vue({
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
      </div>
    `,
    created(){
        console.log('======== This object has been stored in the memory')
    },
    mounted(){
        console.log("This has been show up in the page")
    },
    updated(){
        console.log("Updated")
        console.log(this.n)
    },
    destroyed(){

    },
    methods: {
        add() {
            this.n += 1
        }
    }
}).$mount('#app')
