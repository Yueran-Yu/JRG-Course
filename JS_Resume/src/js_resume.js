let html = document.querySelector('#html')
let style = document.querySelector('#style')
let n = 0
let str1 = `
/* Hello, I'm a new front-ender.
 * Currently I am looking for a job~!
 * I will show you the css and html of my resume content.
 **/

#div1{
  border: 1px solid black;
  width: 200px;
  height:200px;
}

/* Then I will change the div1 into a yinyang picture
 * First, change a div into a circle
 **/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5)
  border:none;
}

/*
Separate the circle half black, half white by add the pseudo-element
**/
#div1{
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,2,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
}

/* add one eye inside the each part*/
#div1::before{
width:100px;
height:100px;
top:0;
left:50%;
background: white;
transform:translateX(-50%);
border-radius:50%;
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,9,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(255,255,255,0) 100%);
}

#div1::after{
  width:100px;
  height:100px;
  bottom:0;
  left:50%;
  background: black;
  transform:translateX(-50%);
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,9,1) 25%, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%);
  }

`
let str2 = ''
// console.log(`string length is:${str.length}`)
// str1 = str1.replace(/\n/g, "<br>")


let step = () => {
  setTimeout(() => {
    if (str1[n] === "\n") { // if str1 contains '\n'
      str2 += '<br>'
  }else if(str1[n] === " "){
    str2 += "&nbsp;"
  }else { // if str1 does not contains '\n'
      str2 += str1[n]
    }
    html.innerHTML = str2
    style.innerHTML = str1.substring(0,n)
    window.scrollTo(0, 9999)
    html.scrollTo(0,9999)
    if (n < str1.length - 1) {
      // if n is not the last one, continue to add 1
      n += 1
      step()
    }
  }, 10)
}
step()