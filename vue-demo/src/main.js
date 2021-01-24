console.log(window.Vue)
console.dir(window.Vue)

// import Vue from 'vue'
// import App from './App.vue'
//
// Vue.config.productionTip = false
//
new Vue({
  el:"#app",
  // template:`<div>{{n}}</div>`,
  data:{
    n:0
  },
  render(CreateElement){
   return  CreateElement('div',[this.n, CreateElement('button',{on:{click:this.add}},'+1')])
  },
  methods:{
    add(){ this.n += 1}
  }
})
