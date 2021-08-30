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
var isTouchDevice = 'ontouchstart' in document.documentElement
var ctx = canvas.getContext("2d")
ctx.fillStyle = "blue"
ctx.lineWidth = 10
ctx.lineCap = "round"
let painting = false
let last


// console.log(isTouchDevice)
if (isTouchDevice) {
  canvas.ontouchstart = (e) => {

    // very important: console.log(e),
    // to find out all the properties in the ontouchstart, ontouchmove and ontouchend
    // then you can find 'touches' property
    painting = true
    let x = e.touches[0].clientX
    let y = e.touches[0].clientY
    last = [x, y]
  }

  canvas.ontouchmove = (e) => {
    // console.log(e.touches[0])
    let x = e.touches[0].clientX
    let y = e.touches[0].clientY
    if(painting === true){
      drawLine(last[0], last[1], x, y)
      last = [x, y]
    }else{
      console.log('Do noting in the phone')
    }

    canvas.ontouchend = (e) =>{
      painting = false
    }
  }
} else {

  // when press down
  canvas.onmousedown = (e) => {
    painting = true
    last = [e.clientX, e.clientY]
  }

  // mouse move
  canvas.onmousemove = (e) => {
    if (painting === true) {
      drawLine(last[0], last[1], e.clientX, e.clientY)
      last = [e.clientX, e.clientY]
    } else {
      console.log('Do noting')
    }
  }

  // when press up
  canvas.onmouseup = () => {
    painting = false
  }
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();     // Start a new path
  ctx.moveTo(x1, y1);  // Move the pen to (x1, y1)
  ctx.lineTo(x2, y2);  // Draw a line to (x2, y2)
  ctx.stroke(); // Render the path
}





