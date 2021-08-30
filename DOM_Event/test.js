var logElement = document.getElementById('log');

function log(msg) {
    logElement.innerHTML += ('<p>' + msg + '</p>');
}

function capture() {
    log('capture: ' + this.firstChild.nodeValue.trim());
}

function bubble() {
    log('bubble: ' + this.firstChild.nodeValue.trim());
}

function clearOutput() {
    logElement.innerHTML = "";
}

var divs = document.getElementsByTagName('div')
for (var i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', capture,true)
    divs[i].addEventListener('click', bubble, false)
}
var clearButton = document.getElementById('clear')
clearButton.addEventListener('click', clearOutput)

// V. 4
div2.addEventListener('click', (e)=>{
    alert('div2, here is capture ' + 'target: ' + e.target.dataset.id + 'currentTarget: ' + e.currentTarget.dataset.id)
}, true)

div2.addEventListener('click',()=>{
    alert('div2, here is bubble '  + 'target: ' + e.target.dataset.id + ' currentTarget: ' + e.currentTarget.dataset.id)
})

div3.addEventListener('click',()=>{
    alert('div3, here is bubble')
})
div3.addEventListener('click', ()=>{
    alert('div3, here is capture')
}, true)


 div1.addEventListener('click',(e)=>{
    alert('div1, here is bubble '  + 'target: ' + e.target.dataset.id + ' currentTarget: ' + e.currentTarget.dataset.id)
})

div1.addEventListener('click',(e)=>{
    alert('div1, here is capture '  + 'target: ' + e.target.dataset.id + ' currentTarget: ' + e.currentTarget.dataset.id)
},true)

