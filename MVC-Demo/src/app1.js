import './app1.css'
import $ from 'jquery'
import Model from "./base/Mode.js";


const eventBus = $(window)
// put all the data relevant actions to "Model"
const m = new Model({
    data:
        {
            n: parseInt(localStorage.getItem('n')) || 100
        },
    update(data){
        Object.assign(m.data, data)
        eventBus.trigger('m:updated')
        localStorage.setItem('n', (m.data.n).toString())
    }
})

// put all the v relevant actions to "View"
const v = {
    // initialize html


}


// the remaining actions to "Controller"
const view = {
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
    //这个初始化方法为了避免，element的id在 v.render() 方法之前执行，
    // render方法是为了 append html到  body>.page上去的，
    // 如果render还没执行但先取了element的id，那id的值就是null
    init(container) {
        view.el = $(container)
        view.render(m.data.n) // view = render(data)
        view.autoBindEvents()
        eventBus.on('m:updated', () => {
            view.render(m.data.n)
        })
    },
    render(n) {
        if (view.el.children.length !== 0) view.el.empty()
        $(view.html.replace('{{n}}', (n).toString())).appendTo(view.el)
    },
    events: {
        'click #add1': 'add',
        'click #minus1': 'minus',
        'click #mul2': 'mul',
        'click #divide2': 'divide'
    },
    add() {
        m.update({n: m.data.n + 1})
    },
    minus() {
        m.update({n: m.data.n - 1})
    },
    mul() {
        m.update({n: m.data.n * 2})
    },
    divide() {
        m.update({n: m.data.n / 2})
    },
    autoBindEvents() {
        for (let key in view.events) {
            const value = view[view.events[key]]
            const spaceIndex = key.indexOf(' ')
            const click = key.slice(0, spaceIndex)
            const actionBtn = key.slice(spaceIndex + 1)
            view.el.on(click, actionBtn, value)

        }
    }
}

//the first time render html
// c.init()
export default view

