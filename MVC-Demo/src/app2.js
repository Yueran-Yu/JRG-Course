import './app2.css'
import $ from 'jquery'

const eventBus = $(window)

const localKey = 'app2.index'
const m = {
    // initialize data
    data: {
        currentIndex:localStorage.getItem(localKey) ?? 0
    },
    create() {
    },
    delete() {
    },
    update(data) {
        Object.assign(m.data, data)
        eventBus.trigger('m:updated')
        localStorage.setItem('index', m.data.currentIndex)
    },
    get() {
    }
}


const v = {
    // initialize html
    el: null,
    html: `<div>
        <ol class="tab-bar">
            <li>Column 1</li>
            <li>Column 2</li>
        </ol>
        <ol class="tab-content">
            <li>Content 1</li>
            <li>Content 2</li>
        </ol>
    </div>`,
    init(container) {
        v.el = $(container)
    },
    render(n) {
        if (v.el.children.length !== 0) v.el.empty()
        $(v.html).appendTo(v.el)
    }
}


const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')


$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget)
    $li.addClass('selected')
        .siblings()
        .removeClass('selected')

    const index = $li.index()
    localStorage.setItem(localKey, index)
    $tabContent
        .children().eq(index).addClass('active')
        .siblings().removeClass('active')
})

$tabBar.children().eq($currentIndex).trigger('click')
