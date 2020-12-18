import str from './css'

let n = 1
let time = 0
demo.innerText = str.substr(0, n)
demo2.innerHTML = str.substr(0, n)

function printContent(){
    n += 1
    if (n > str.length) {
        window.clearInterval(disPlayContent)
        return
    }
    demo.innerText = str.substr(0, n)
    demo2.innerHTML = str.substr(0, n)
    demo.scrollTop = demo.scrollHeight;
}

let disPlayContent = setInterval(() =>{printContent()}, time)

pause.onclick = ()=>{window.clearInterval(disPlayContent)}

play.onclick = ()=>{disPlayContent = setInterval(()=>{printContent()},time)}

btnSlow.onclick = ()=>{
    console.log("Here is slow")
    window.clearInterval(disPlayContent)
    time = 1000
    disPlayContent = setInterval( printContent

        ),time}


btnMedium.onclick = ()=>{
    window.clearInterval(disPlayContent)
    time = 200
    disPlayContent = setInterval(()=> {printContent()}),time}

btnFast.onclick = ()=>{
    window.clearInterval(disPlayContent)
    time = 0
    disPlayContent = setInterval(()=> {printContent()}),time}

