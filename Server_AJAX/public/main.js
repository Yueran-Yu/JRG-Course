getCSS.onclick = () =>{
  const request = new XMLHttpRequest()
  request.open('GET','/style.css')
  request.onload = ()=>{
  console.log('request.response')
  console.log(request.response)
  //create style tag
  const style = document.createElement('style')
  style.innerHTML = request.response
  document.head.appendChild(style)
  }
  request.onerror = ()=>{console.log('failed')}
    request.send()
}

getJS.onclick = ()=>{
  const request = new XMLHttpRequest()
  request.open('GET','/w.js')
  request.onload = ()=>{
   console.log(request.response)
   const script = document.createElement('script')
   script.innerHTML = request.response
   document.body.appendChild(script)
  }
  request.onerror = ()=>{console.log('failed')}
  request.send()
}

getHTML.onclick = ()=>{
  const request = new XMLHttpRequest()
  request.open('GET','/h.html')
  request.onload = ()=>{
   console.log(request.response)
   const div = document.createElement('div')
   div.innerHTML = request.response
   document.body.appendChild(div)

  }
  request.onerror = ()=>{console.log('failed')}
  request.send()
}