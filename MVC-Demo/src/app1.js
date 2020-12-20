import './app1.css'
import $ from 'jquery'

const eventBus = $(window)
// put all the data relevant actions to "Model"
const m = {
    // initialize data
    data: {
        n: parseInt(localStorage.getItem('n')) || 100
    },
    create() {
    },
    delete() {
    },
    update(data) {
        Object.assign(m.data, data)
        eventBus.trigger('m:updated')
    },
    get() {
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
        v.el = $(container)
    },
    render(n) {
        if (v.el.children.length !== 0) v.el.empty()
        $(v.html.replace('{{n}}', (n).toString())).appendTo(v.el)
    }
}

// the remaining actions to "Controller"
const c = {
    //这个初始化方法为了避免，element的id在 v.render() 方法之前执行，
    // render方法是为了 append html到  body>.page上去的，
    // 如果render还没执行但先取了element的id，那id的值就是null
    init(container) {
        v.init(container)
        v.render(m.data.n) // view = render(data)
        c.autoBindEvents()
        eventBus.on('m:updated', () => {
            localStorage.setItem('n', (m.data.n).toString())
            v.render(m.data.n)
        })
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
        for (let key in c.events) {
            const value = c[c.events[key]]
            const spaceIndex = key.indexOf(' ')
            const click = key.slice(0, spaceIndex)
            const actionBtn = key.slice(spaceIndex + 1)
            console.log(click, actionBtn, value)
            v.el.on(click, actionBtn, value)

        }
    }
}

//the first time render html
// c.init()

export default c

