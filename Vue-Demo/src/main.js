console.log(window.Vue)
// import Vue from 'vue'
// import App from './App.vue'
//
// Vue.config.productionTip = false
//
new Vue({
  el: '#app',
  // template:`<div>{{n}}</div>`,
  render(h){
    return h('div',[this.n, h('button',{on:{onClick: this.add}},'+1')])
  },
  data:{
    n:0
  },
  methods:{
    add(){
      this.n +=1
    }
  }
})
