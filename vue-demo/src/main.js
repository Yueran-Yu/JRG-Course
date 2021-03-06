// import Vue from 'vue'
// import App from './App.vue'
import Demo from './Demo.vue'
import Demo2 from './Demo2.vue'

console.log(window.Vue)
const Vue = window.Vue
Vue.config.productionTip = false

import Sync from "./Sync.vue";


// Vue.component('Demo2', {
//     template: `<div>Here is the second component Demo2</div>`
// })

Vue.directive('x', {
    inserted: function (el) {
        el.addEventListener('click', () => {
            console.log('x')
        })
    }
})



new Vue({
    render: h => h(Sync)
}).$mount('#app')



// （一）
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


//（二）
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


// (三)
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


// （四）
/** new Vue({
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
                const user = this.user
                return user.nickname || user.email || user.phone
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
}).$mount("#app")  **/

//（五）

/** let id = 0
 const createUser = (name, gender) => {
    id += 1
    return {id: id, name: name, gender: gender}
}
 new Vue({
    data() {
        return {
            users: [
                createUser('Angela', 'F'),
                createUser('Mike', 'M'),
                createUser('Joe', 'F'),
                createUser('Sam', 'M')
            ],
            gender: ''
        }
    },
    computed: {
        displayUsers() {
            const hash = {
                M:'M',
                F:'F'
            }
            const {users, gender} = this

            if (gender === '') {
                return users
            } else if (typeof gender === 'string') {
                return users.filter(u => u.gender === hash[gender])
            }else{
                throw new Error('gender is invalid.')
            }
        }
    },
    methods: {
       setGender(str){
           this.gender = str
       }
    },
    template: `
      <div>
      <div>
        <button @click="setGender('')">All</button>
        <button @click="setGender('M')">MAN</button>
        <button @click="setGender('F')">WOMEN</button>
        <ul>
          <li v-for="(u, index) in displayUsers" :key="index">{{ u.name }} - {{ u.gender }}</li>
        </ul>
      </div>
      </div>
    `
}).$mount('#app')
 **/

// (六)
/** new Vue({
    data: {
        n: 0,
        history: [],
        inUndoMode:false
    },
    watch: {
        n(newValue, oldValue) {
            if(this.inUndoMode){
                return
            }
            this.history.push({from: oldValue, to: newValue})
        }
    },
    template: `
      <div>
      {{ n }}
      <hr>
      <button @click="add1">+1</button>
      <button @click="add2">+2</button>
      <button @click="minus1">-1</button>
      <button @click="minus2">-2</button>
      <hr>
      <button @click="undo">Revoke</button>
      <hr>
      {{history}}
      <div v-pre>{{history}} here is {{n}}</div>
      <div v-html> <strong>Hello test "v-html"</strong> </div>
      </div>
    `,
    methods: {
        add1() {
            this.n += 1
        },
        add2() {
            this.n += 2
        },
        minus1() {
            this.n -= 1
        },
        minus2() {
            this.n -= 2
        },
        undo() {
           const last= this.history.pop()
            console.log(last)
            const old = last.from
            this.inUndoMode = true
            this.n = old
            this.$nextTick(()=>{
                this.inUndoMode = false
            },0)
        }
    }
}).$mount('#app')
 **/















