import './app1.css'
import $ from 'jquery'
import Model from "./base/Mode.js";
import View from "./base/View.js";
import EventBus from "./base/EventBus.js";


const eventBus = new EventBus()
// put all the data relevant actions to "Model"
const m = new Model({
    data:
        {
            n: parseFloat(localStorage.getItem('n')) || 100
        },
    update(data) {
        Object.assign(m.data, data)
        eventBus.trigger('m:updated')
        localStorage.setItem('n', (m.data.n).toString())
    }
})

const init = (el) => {
// the remaining actions to "Controller"
    new View({
        el: el,
        data: m.data,
        eventBus:eventBus,
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
        render(data) {
            const n = data.n
            if (this.el.children.length !== 0) this.el.empty()
            $(this.html.replace('{{n}}', (n).toString())).appendTo(this.el)
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
        }
    })
}
export default init

