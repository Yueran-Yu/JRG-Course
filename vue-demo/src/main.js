// console.log(window.Vue)
// console.dir(window.Vue)

// import Vue from 'vue'
// import App from './App.vue'
//
// Vue.config.productionTip = false

import Demo from './Demo.vue'

console.log("Demo===")
console.log(Demo)

new Vue({
    el:"#app",
    render(createElement) {
        return createElement(Demo)
    }
})
