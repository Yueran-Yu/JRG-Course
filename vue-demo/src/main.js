// import Vue from 'vue'
// import App from './App.vue'

console.log(window.Vue)
const Vue = window.Vue
Vue.config.productionTip = false
import Demo from './Demo.vue'
import Demo2 from './Demo2.vue'

// Vue.component('Demo2', {
//     template: `<div>Here is the second component Demo2</div>`
// })


/**  new Vue({
    components: {Demo, Demo2},
    data: {
        visible: true,
        n: 0
    },
    template:
        `
          <div>
          <button @click="toggle">Toggle</button>
          <hr>
          <Demo v-if="visible ===true"/>
          <hr>
          {{n}}
          <!-- <Demo2 message="Hello World props"/>-->
          <!-- Two ways to pass parameter -->
          <!-- <Demo2 :message="n"/>  this n is an argument -->
          <!-- <Demo2 message=" n "/> this n  is a string -->
          <Demo2 :message1="n" :fn="add"/>
          </div>
        `,
    methods: {
        add() {
            this.n += 1
        },
        toggle() {
            this.visible = !this.visible
        }
    }
    // render: h=> h(Demo)
}).$mount('#app') **/


/** new Vue({
    data:{
        obj:{
            a:0,
        }
    },
    template:`
      <div>{{obj.b}}
      <hr>
      <button @click="setB">set B</button>
      <button @click="addOne">Add 1</button>
      </div>
    `,
    methods:{
        setB(){
            this.$set(this.obj, 'b', 1)
        },
        addOne(){
            this.obj.b += 1
            console.log(this.obj.b)
        }
    }
}).$mount('#app') **/

/** new Vue({
    data: {
        array: ["a", "b", "c"]
    },
    template:
        `
          <div>
          {{ array }}
          <button @click="setD">set d</button>
          </div>`,
    methods: {
        setD() {
            this.array.push("d")
        }
    }
}).$mount("#app")

 class VueArray extends Array{
    push(...args){
        const oldLength = this.length // this means current array
        super.push(args)
        this.length
        for(let i = oldLength; i < this.length; i++){
            Vue.set(this, i, this[i])
        }
    }
} **/

new Vue({
    data: {
        user: {
            email: "abc@gmail.com",
            nickname: "lucy",
            phone: 12345678
        }
    },
    computed: {
        displayName: {
            get() {
                return this.user.nickname || this.user.email || this.user.phone
            },
            set(value) {
                this.user.nickname = value
            }
        }
    },
    template:
        `
          <div>
          {{ displayName }}
          <div>
            {{ displayName }}
            <button @click="add">set</button>
          </div>
          </div>`,
    methods: {
        add() {
            this.displayName = "Apple"
        }
    }
}).$mount("#app")















