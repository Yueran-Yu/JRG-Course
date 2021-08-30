function jsonp(url) {
  return new Promise((resolve, reject) => {
    const random = Date.now() + "***" + Math.random()

    // get data  ===  window.xxx = (data) => { console.log(data) }
    window[random] = (data) => {
      // console.log(data)
      resolve(data)
    }
    const script = document.createElement('script')
    // script.src = `http://qq.com:8888/friends.js?function_Name=${random}`
    script.src = `${url}?callback=${random}`
    script.onload = () => {
      script.remove()
    }
    script.onerror = () => {
      reject()
    }
    document.body.appendChild(script)
  })
}

jsonp('http://qq.com:8888/friends.js').then((data) => {
  console.log(data);
})




















// const request = new XMLHttpRequest()
// request.open('GET', 'http://qq.com:8888/friends.json')
// request.onreadystatechange = () => {
//   if(request.readyState === 4 && request.status === 200){
//     console.log(request.response)
//   }
// }
// request.send()




























// Access to XMLHttpRequest at 'http://qq.com:8888/friends.json' from origin 'http://frank.com:9999'
// has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// frank.js:9 GET http://qq.com:8888/friends.json net::ERR_FAILED
// (anonymous) @ frank.js:9





