const app = document.querySelector('#app')
//获取用户想去哪里
let number = window.location.hash.substr(1) || 1
//获取界面
let div = document.querySelector(`#div${number.toString()}`)
//渲染界面
if (div) {
    div.style.display = "block"
} else {
    div = document.querySelector('#div404')
    div.style.display = "block"
}
//展示界面，放到合适的位置
if (div) app.appendChild(div)


window.addEventListener('hashchange', () => {
    const number = window.location.hash.substr(1)
    let div = document.querySelector(`#div${number.toString()}`)
    if (div) {
        div.style.display = "block"
    } else {
        div = document.querySelector('#div404')
        div.style.display = "block"
    }

    app.children[0].style.display = 'none'
    document.body.appendChild(app.children[0])
    app.appendChild(div)
})
