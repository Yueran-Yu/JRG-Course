import './app2.css'
import $ from 'jquery'

const eventBus = $(window)


const m = {
    // initialize data
    localKey:'app2.index',
    data: {
        currentIndex:localStorage.getItem(m.localKey) ?? 0
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







const html = `<section id="app2">
        <ol class="tab-bar">
            <li>Column 1</li>
            <li>Column 2</li>
        </ol>
        <ol class="tab-content">
            <li>Content 1</li>
            <li>Content 2</li>
        </ol>
    </section>`

const $element = $(html).appendTo($('body>.page'))
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
