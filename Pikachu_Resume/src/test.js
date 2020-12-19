import str from './css'

const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')

let n = 1
let time = 0
let id

const player = {
    init: () => {
        demo.innerText = str.substr(0, n)
        demo2.innerHTML = str.substr(0, n)
        player.play()
        player.bindEvent()
    },
    bindEvent: () => {
        const hasTable = {
            '#pauseBtn': player.pause,
            '#playBtn': player.play,
            '#btnSlow': player.slow,
            '#btnMedium': player.medium,
            '#btnFast': player.fast
        }

        for (let key in hasTable) {
            document.querySelector(key).onclick = hasTable[key]
        }

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
        id = setInterval(player.printContent, time)
    },
    pause: () => {
        window.clearInterval(id)
    },
    slow: () => {
        clearInterval(id)
        time = 800
        player.play()
    },
    medium: () => {
        player.pause()
        time = 200
        player.play()
    },
    fast: () => {
        player.pause()
        time = 0
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

