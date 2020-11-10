const script = document.createElement('script')
script.src = 'http://qq.com:8888/friends.js'

// script.onload = () =>{
//   console.log(window.xxx);
// }
document.body.appendChild(script)

window.xxx = (data) => {
  console.log(data)
}










































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