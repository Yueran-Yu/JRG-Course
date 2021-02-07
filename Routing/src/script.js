const app = document.querySelector('#app')
const div1 = document.createElement('div')
div1.innerHTML = '1'
//嵌套路由
const view1 = document.createElement('div')
div1.appendChild(view1)
view1.style.height = '50px'
view1.style.background = 'pink'

const div2 = document.createElement('div')
div2.innerHTML = '2'
const div3 = document.createElement('div')
div3.innerHTML = '3'
const div4 = document.createElement('div')
div4.innerHTML = '4'

const routeTable = {
    "1":div1,
    "2":div2,
    "3":div3,
    "4":div4
}
const div11 = document.createElement('div')
div11.innerHTML = '1.1'
const div12 = document.createElement('div')
div12.innerHTML = '1.2'
const div13 = document.createElement('div')
div13.innerHTML = '1.3'

const subRouteTable={
    "1/1":div11,
    "1/2":div12,
    "1/3":div13
}

function routing(container) {
    const app = document.querySelector('#app')
    //获取用户想去哪里
    let number = window.location.hash.substr(1) || 1

    //获取界面
    let div = routeTable[number.toString()]
    //渲染界面
    if (!div) {
        div = document.querySelector('#div404')
    }
    div.style.display = "block"
    //展示界面，放到合适的位置
    container.innerHTML = ''
    if (container) app.appendChild(div)
}

window.addEventListener('hashchange', () => {
    routing(app)
})
routing(app)
