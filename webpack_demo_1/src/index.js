import x from './x.js'
import png from './assets/01.png'

console.log(png)
console.log('hello here it is')
const div = document.getElementById('app')
div.innerHTML = `<div><img src="${png}"></div> `
