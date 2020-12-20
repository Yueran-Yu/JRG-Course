import './app1.css'
import $ from 'jquery'

// put all the data relevant actions to "Model"
const m = {
    // initialize data

    data: {
        n: parseInt(localStorage.getItem('n')) || 100
    }
}

// put all the v relevant actions to "View"
const v = {
    // initialize html
    el: null,
    html: `<div>
        <div class="output">
            <span id="number">{{n}}</span>
        </div>
        <div class="actions">
            <button id="add1">+1</button>
            <button id="minus1">-1</button>
            <button id="mul2">*2</button>
            <button id="divide2">÷2</button>
        </div>
    </div>`,
    init(container) {
        v.container = $(container)
        v.render()
    },
    update() {
        // render data to page
        c.ui.number.text(m.data.n)
    },
    render() {
        if (v.el === null) {
            v.el = $(v.html.replace('{{n}}', (m.data.n).toString())).appendTo(v.container)
        } else {
            const newEl = $(v.html.replace('{{n}}', (m.data.n).toString()))
            v.el.replaceWith(newEl)
            console.log(v.el)
            v.el = newEl
            console.log(v.el)
        }

    }
}

// the remaining actions to "Controller"
const c = {
    //这个初始化方法为了避免，element的id在 v.render() 方法之前执行，
    // render方法是为了 append html到  body>.page上去的，
    // 如果render还没执行但先取了element的id，那id的值就是null
    init(container) {
        v.init(container)
        c.ui = {
            // the important elements
            number: $('#number')
        }
        c.bindEvents()
    },
    bindEvents() {
        // bind the event to certain action
        v.container.on('click','#add1', () => {
            m.data.n += 1
            localStorage.setItem('n', (m.data.n).toString())
            v.render()
        })

        v.container.on('click','#minus1', () => {
            m.data.n -= 1
            localStorage.setItem('n', (m.data.n).toString())
            v.render()
        })

        v.container.on('click','#mul2', () => {
            m.data.n *= 2
            localStorage.setItem('n', (m.data.n).toString())
            v.render()
        })

        v.container.on('click','#divide2', () => {
            m.data.n /= 2
            localStorage.setItem('n', (m.data.n).toString())
            v.render()
        })
    }
}

//the first time render html
// c.init()

export default c

