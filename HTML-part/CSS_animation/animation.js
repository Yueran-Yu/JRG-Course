var n = 1;
let demo = document.getElementById('demo')

// let move = setInterval(()=>{
//   if(n < 500){
//   demo.style.left = n + 'px'
//   n +=1
// }else{
//   clearInterval(move)
// }
// },1000/60)


setTimeout(() => { demo.classList.add('end') }, 3000)
