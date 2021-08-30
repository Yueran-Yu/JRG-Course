// The most important functions are queue.push()   queue.shift()



const divScreen = document.querySelector('#screen')
const btnCreateNumber = document.querySelector('.createNumber')
const btnCallNumber = document.querySelector('.callNumber')
const showNewNumber = document.querySelector('#newNumber')
const showQueue = document.querySelector('#queue')

let n = 0;
let queue = []
btnCreateNumber.onclick = () =>{
n += 1
// queue.push(n)
queue.push.call(queue,n)
showNewNumber.innerText = n
// showQueue.innerText = queue.toString()
showQueue.innerText = JSON.stringify(queue)
}


btnCallNumber.onclick = ()=>{
  if(queue.length === 0){
    divScreen.innerText = `No New Numbers to Call.`
  }else{
    // const outN  = queue.shift()
    queue.shift.call(queue)
    divScreen.innerText = `${outN}  is ready for Dinner.`
    showQueue.innerText = JSON.stringify(queue)
  }
}