import x from './x.js'
import png from './assets/01.png'

console.log(png)
console.log('hello here it is')
const div = document.getElementById('app')
div.innerHTML = `<div><img src="${png}" width="300"></div> `

const btn = document.createElement('button')
btn.innerText = "lazy loading"
btn.onclick = ()=>{
    const promise = import('./lazy')
    promise.then((fn)=>{
        console.log('loaded successfully.')
       const f =  fn.default
        console.log(f)
    }, ()=>{
        console.log('An error occur when loading.')
    })
}
div.appendChild(btn)