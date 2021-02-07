const app = document.querySelector('#app')
const div1 = document.createElement('div')
div1.innerHTML = '1'
const div2 = document.createElement('div')
div2.innerHTML = '2'
const div3 = document.createElement('div')
div3.innerHTML = '3'
const div4 = document.createElement('div')
div4.innerHTML = '4'

const routeTable = {
    "/1":div1,
    "/2":div2,
    "/3":div3,
    "/4":div4
}

function routing(container) {
    //获取用户想去哪里
    // ===> History
    // let number = window.location.pathname
    // if(number === '/'){
    //     number = "/1"
    // }
    // ===> Hash
    // hash = window.location.hash.sbuStr(1)
    // ===> Local Storage
    let number = window.localStorage.getItem('localNumber')
    if(!number){
        number = '/1'
    }


    //获取界面
    let div = routeTable[number.toString()]
    //渲染界面
    if (!div) {
        div = document.querySelector('#div404')
    }
    div.style.display = "block"
    //展示界面，放到合适的位置
    container.innerHTML = ''
    container.appendChild(div)
}

const aTags = document.querySelectorAll('a.link')

for(let a of aTags){
    a.addEventListener('click', (e)=>{
        e.preventDefault()
        const href = a.getAttribute('href')
        console.log(href)
        // window.history.pushState(null,`page ${href}`,href)
        window.localStorage.setItem('localNumber', href)
        onStateChange(href)
    })
}
// window.addEventListener('hashchange', () => {
//     routing(app)
// })
routing(app)

function onStateChange(){
    console.log("state changed.")
    routing(app)
}
