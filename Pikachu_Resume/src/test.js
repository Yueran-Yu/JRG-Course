import str from './css'


let id

const player = {
    id:undefined,
    n:1,
    time:0,
    ui:{
        demo: document.querySelector('#demo'),
        demo2 :document.querySelector('#demo2')
    },
    init: () => {
        player.ui.demo.innerText = str.substr(0, player.n)
        player.ui.demo2.innerHTML = str.substr(0, player.n)
        player.bindEvents()
        player.play()
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
        player.ui.demo.innerText = str.substr(0, player.n)
        player.ui.demo2.innerHTML = str.substr(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
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

