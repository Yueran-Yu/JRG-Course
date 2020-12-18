import str from './css'

let n = 1
let time = 0
demo.innerText = str.substr(0, n)
demo2.innerHTML = str.substr(0, n)
let commonPlay = ()=>{
    return setInterval(printContent, time)
}

let pause = ()=>{
    window.clearInterval(id)
}

const printContent = () => {
    n += 1
    if (n > str.length) {
        pause()
        return
    }
    demo.innerText = str.substr(0, n)
    demo2.innerHTML = str.substr(0, n)
    demo.scrollTop = demo.scrollHeight;
}
//
// let disPlayContent = setInterval(() => {
//     printContent()
// }, time)


let id = commonPlay()

pauseBtn.onclick = () => {
    pause()
}

play.onclick = () => {
    id = commonPlay()
}

btnSlow.onclick = () => {
    clearInterval(id)
    time = 1000
    id = commonPlay()
}

btnMedium.onclick = () => {
    pause()
    time = 200
    id = commonPlay()
}

btnFast.onclick = () => {
    pause()
    time = 0
    id = commonPlay()
}

const here = (a)=> {
    console.log(`This is result I want. + ${a}`)
}

const y = (a) => {
    here(a)
}

console.log("y==================")
console.log(y("s"))
// y==================
// This is result I want. + s
console.log("here===============")
console.log(here("s"))
// test.js:69 here===============
// This is result I want. + s


/*
* Here is the result: y function is equal to here function
* */

