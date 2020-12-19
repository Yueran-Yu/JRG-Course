import str from './css'

const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')
const pauseBtn = document.querySelector('#pauseBtn')
const playBtn = document.querySelector('#playBtn')
const btnSlow = document.querySelector('#btnSlow')
const btnMedium = document.querySelector('#btnMedium')
const btnFast = document.querySelector('#btnFast')

let n = 1
let time = 0
let id

const player = {
    init: () => {
        demo.innerText = str.substr(0, n)
        demo2.innerHTML = str.substr(0, n)
        id = player.play()
    },
    printContent: () => {
        n += 1
        if (n > str.length) {
            player.pause()
            return
        }
        demo.innerText = str.substr(0, n)
        demo2.innerHTML = str.substr(0, n)
        demo.scrollTop = demo.scrollHeight;
    },
    play: () => {
        return setInterval(player.printContent, time)
    },
    pause: () => {
        window.clearInterval(id)
    },
    slow: () => {
        clearInterval(id)
        time = 1000
        id = player.play()
    },
    medium: () => {
        player.pause()
        time = 200
        id = player.play()
    },
    fast: () => {
        player.pause()
        time = 0
        id = player.play()
    }
}

player.init()

pauseBtn.onclick = () => {
    player.pause()
}

playBtn.onclick = () => {
    id = player.play()
}

btnSlow.onclick = player.slow
btnMedium.onclick = player.medium
btnFast.onclick = player.fast


const here = (a) => {
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

