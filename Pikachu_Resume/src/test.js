import str from './css'

const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')
let id

const player = {
    id:undefined,
    n:1,
    time:0,
    init: () => {
        demo.innerText = str.substr(0, player.n)
        demo2.innerHTML = str.substr(0, player.n)
        player.play()
        player.bindEvents()
    },
    events:{
        '#pauseBtn':'pause',
        '#playBtn':'play',
        '#btnSlow':'slow',
        '#btnMedium':'medium',
        '#btnFast':'fast'
    },
    bindEvents: () =>{
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    printContent: () => {
        player.n += 1
        if (player.n > str.length) {
            player.pause()
            return
        }
        demo.innerText = str.substr(0, player.n)
        demo2.innerHTML = str.substr(0, player.n)
        demo.scrollTop = demo.scrollHeight;
    },
    play: () => {
        player.id = setInterval(player.printContent, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 800
        player.play()
    },
    medium: () => {
        player.pause()
        player.time = 200
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }
}

player.init()


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

