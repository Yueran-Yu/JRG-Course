import './app2.css'
import $ from 'jquery'

const eventBus = $(window)

const localKey = 'app2.index'
const m = {
    // initialize data
    data: {
        currentIndex: parseInt(localStorage.getItem(localKey)) || 0
    },
    create() {
    },
    delete() {
    },
    update(data) {
        Object.assign(m.data, data)
        eventBus.trigger('m:updated')
        localStorage.setItem(localKey, (m.data.currentIndex).toString())
    },
    get() {
    }
}


const view = {
    // initialize html
    el: null,
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
    render(index) {
        if (view.el.children.length !== 0) view.el.empty()
        $(view.html(index)).appendTo(view.el)
    },
    init(container) {
        view.el = $(container)
        view.render(m.data.currentIndex) // view = render(data)
        view.autoBindEvents()
        eventBus.on('m:updated', () => {
            view.render(m.data.currentIndex)
        })
    },
    events: {
        'click .tab-bar li': 'x'
    },
    x(e) {
      const index = parseInt(e.currentTarget.dataset.index)
        m.update({currentIndex: index})
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


export default view
