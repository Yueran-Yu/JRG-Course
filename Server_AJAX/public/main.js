getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/style.css')
  request.onload = () => {
    console.log('request.response')
    console.log(request.response)
    //create style tag
    const style = document.createElement('style')
    style.innerHTML = request.response
    document.head.appendChild(style)
  }
  request.onerror = () => { console.log('failed') }
  request.send()
}

getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/w.js')
  request.onload = () => {
    console.log(request.response)
    const script = document.createElement('script')
    script.innerHTML = request.response
    document.body.appendChild(script)
  }
  request.onerror = () => { console.log('failed') }
  request.send()
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest()

  request.onreadystatechange = () => {
    console.log(request.readyState)
    if (request.readyState === XMLHttpRequest.DONE) {
      console.log('Completed download')
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
      } else {
        alert('Download failed~')
      }
    }
  }
  request.open('GET', '/h.html')
  request.send()
}
getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/x.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML
        const text = dom.getElementsByTagName('warning')[0].textContent
        console.log(text.trim())
      } else {
        alert('Download Failed.')
      }
    }
  }
  request.send()
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/j.json')
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response)
        const object = JSON.parse(request.response)
        console.log(object)
        json1.textContent = object.name
      } else {
        alert('Download Failed.')
      }
    }
  }
  request.send()
}

let n = 1
getNextPage.onclick = ()=>{
  const request = new XMLHttpRequest()
  request.open('GET', `/page${n}`)
  request.onreadystatechange = () => {
    if(request.readyState === XMLHttpRequest.DONE){
      if(request.status >= 200 && request.status < 300){
        const array = JSON.parse(request.response)
        array.forEach(element => {
          const li = document.createElement('li')
          li.textContent = element.id
          listContainer.appendChild(li)
        });
      }
    }
  }
  if( n <=3){
    n++
  }
  request.send()
}