import './app2.css'
import $ from 'jquery'


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

const $element = $(html).appendTo($('.page'))
const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
const localKey = 'app2.index'
const $currentIndex = localStorage.getItem(localKey) ?? 0

$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget)
    $li.addClass('selected')
        .siblings().removeClass('selected')
    const index = $li.index()
    localStorage.setItem(localKey, index)
    $tabContent
        .children().eq(index).addClass('active')
        .siblings().removeClass('active')
})

$tabBar.children().eq($currentIndex).trigger('click')
