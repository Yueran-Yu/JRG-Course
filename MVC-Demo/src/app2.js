import './app2.css'
import $ from 'jquery'
import View from "./base/View.js";
import EventBus from "./base/EventBus.js";

const eventBus = new EventBus()

const localKey = 'app2.index'
const m = {
    // initialize data
    data: {
        index: parseInt(localStorage.getItem(localKey)) || 0
    },
    create() {
    },
    delete() {
    },
    update(data) {
        Object.assign(m.data, data)
        eventBus.trigger('m:updated')
        localStorage.setItem(localKey, (m.data.index).toString())
    },
    get() {
    }
}

const init = (el) => {
    new View({
        // initialize html
        el: el,
        data: m.data,
        eventBus: eventBus,
        html: (index) => {
            return `<div>
       <ol class="tab-bar">
            <li class="${index === 0 ? 'selected' : ''}" data-index="0">Column 1</li>
            <li class="${index === 1 ? 'selected' : ''}" data-index="1">Column 2</li>
        </ol>
        <ol class="tab-content">
            <li class="${index === 0 ? 'active' : ''}" >Content 1</li>
            <li class="${index === 1 ? 'active' : ''}" >Content 2</li>
        </ol>
    </div>`
        },
        render(data) {
            const index = data.index
            if (this.el.children.length !== 0) this.el.empty()
            $(this.html(index)).appendTo(this.el)
        },
        // init(container) {
        //     view.el = $(container)
        //     view.render(m.data.currentIndex) // view = render(data)
        //     view.autoBindEvents()
        //     eventBus.on('m:updated', () => {
        //         view.render(m.data.currentIndex)
        //     })
        // },
        events: {
            'click .tab-bar li': 'x'
        },
        x(e) {
            const index = parseInt(e.currentTarget.dataset.index)
            m.update({index: index})
        }
    })
}
// const $tabBar = $('#app2 .tab-bar')
// const $tabContent = $('#app2 .tab-content')


// $tabBar.on('click', 'li', (e) => {
//     const $li = $(e.currentTarget)
//     $li.addClass('selected')
//         .siblings()
//         .removeClass('selected')
//
//     const index = $li.index()
//     localStorage.setItem(localKey, index)
//     $tabContent
//         .children().eq(index).addClass('active')
//         .siblings().removeClass('active')
// })

// $tabBar.children().eq($currentIndex).trigger('click')

export default init
