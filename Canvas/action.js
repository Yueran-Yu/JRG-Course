let canvas = document.getElementById('canvas')
// canvas.onmouseover = (e) => {
//   console.log(e)
//   console.log(e.clientX)
//   console.log(e.clientY)
//   let div = document.createElement('div')
//   div.style.position = 'absolute'
//   div.style.left = e.clientX + 'px'
//   div.style.top = e.clientY + 'px'
//   div.style.width = '5px'
//   div.style.height = '5px'
//   div.style.marginLeft = '-3px'
//   div.style.marginTop = '-3px'
//   div.style.borderRadius = '50%'
//   div.style.backgroundColor = 'blue'
//   canvas.appendChild(div)
// }

let div = document.createElement('div')
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight
var ctx = canvas.getContext("2d")
ctx.fillStyle = "blue"
let painting = false

canvas.onmousedown = () => {
  painting = true
}
canvas.onmousemove = (e) => {
  if (painting === true) {
    ctx.beginPath();
    ctx.arc(e.clientX - 6, e.clientY - 8, 10, 0, 2 * Math.PI)
    ctx.fill()
    // ctx.stroke()

  } else {
    console.log('Do noting')
  }
}

canvas.onmouseup = () => {
  painting = false
}




