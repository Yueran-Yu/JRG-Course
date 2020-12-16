const str = 'Hello this is my project'
let n = 1

let content = setInterval(() => {
    n+=1
    if(n > str.length){
        window.clearInterval(content)
        return
    }
    console.log(`n` )
    demo.innerHTML = str.substr(0, n)
}, 500)