// import Vue from 'vue'
// import App from './App.vue'


console.log(window.Vue)
const Vue = window.Vue
Vue.config.productionTip = false
import Demo from './Demo.vue'

// Vue.component('Demo2', {
//     template: `<div>Here is the second component Demo2</div>`
// })


new Vue({
    components:{Demo},
    data:{
        visible:true
    },
    template:
        `<div>
        <button @click="toggle">Toggle</button>
        <hr>
        <Demo v-if="visible ===true"/>
    </div>
    `,
    methods:{
        toggle(){
            this.visible = !this.visible
        }
    }
    // render: h=> h(Demo)
}).$mount('#app')
