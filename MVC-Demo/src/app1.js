import './app1.css'
import $ from 'jquery'

// put all the data relevant actions to "Model"
const model = {
    // initialize data
    data: {
        n: parseInt(localStorage.getItem('n'))
    }
}

// put all the view relevant actions to "View"
const view = {
    // initialize html
    html: `<section id="app1">
        <div class="output">
            <span id="number">{{n}}</span>
        </div>
        <div class="actions">
            <button id="add1">+1</button>
            <button id="minus1">-1</button>
            <button id="mul2">*2</button>
            <button id="divide2">÷2</button>
        </div>
    </section>`,
    update() {
        // render data to page
        controller.ui.number.text(model.data.n || 100)
    },
    render() {
        $(view.html.replace('{{n}}',model.data.n)).appendTo($('body>.page'))
    }
}

// the remaining actions to "Controller"
const controller = {
    init() {
        controller.ui = {
            // the important elements
            btn1: $('#add1'),
            btn2: $('#minus1'),
            btn3: $('#mul2'),
            btn4: $('#divide2'),
            number: $('#number')
        }
        controller.bindEvents()
    },
    bindEvents() {
        // bind the event to certain action
        controller.ui.btn1.on('click', () => {
            let n = parseInt(controller.ui.number.text())
            n += 1
            localStorage.setItem('n', n)
            controller.ui.number.text(n)
        })

        controller.ui.btn2.on('click', () => {
            let n = parseInt(controller.ui.number.text())
            n -= 1
            localStorage.setItem('n', n)
            controller.ui.number.text(n)
        })

        controller.ui.btn3.on('click', () => {
            let n = parseInt(controller.ui.number.text())
            n *= 2
            localStorage.setItem('n', n)
            controller.ui.number.text(n)
        })

        controller.ui.btn4.on('click', () => {
            let n = parseInt(controller.ui.number.text())
            n /= 2
            localStorage.setItem('n', n)
            controller.ui.number.text(n)
        })
    }
}
//the first time render html
view.render()
controller.init()

