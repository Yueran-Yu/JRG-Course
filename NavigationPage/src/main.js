const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.lastLi')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)

const hashMap = xObject || [
  {
    logo: 'A',
    url: 'https://www.bilibili.com'
  },
  {
    logo: 'B',
    url: 'https://www.acfun.cn'
  }
]
const removeStringPart = (url) => {
  return url.replace('https://', '')
    .replace('http://', '')
    .replace('www.', '')
    .replace(/\/.*/, '') // delete all content start with '/'
}

const render = () => {
  $siteList.find('li:not(.lastLi)').remove()
  hashMap.forEach((li,index) => {
    console.log(index)
    const $li = $(`<li>
                   <div class="site">
                   <div class="logo">${li.logo}</div>
                   <div class="link">${removeStringPart(li.url)}</div>
                   <div class="close">Remove</div>
                   </div>
                   </li>`).insertBefore($lastLi)
      // this event is used to replace  <a></a> tag, a tag control area is too wide.
     $li.on('click', (e)=> {
     window.open(li.url)
    })
     $li.on('click', '.close', (e)=>{
       e.stopPropagation()
       console.log(e.target)
       hashMap.splice(index, 1)
       render()
     })
  })
}
// need to prevent bubbling of the Remove Button

$('.addButton')
  .on('click', () => {
    let url = window.prompt('Please enter the website you wan to add:')
    // if we can't find the address start with http then add
    if (url.indexOf('http://wwww.') === 0
    || url.indexOf('https://wwww.') === 0
    || url.indexOf('https://') === 0) {
       url
    } else {
      url = 'https://www.' + url
    }

    console.log(url)
    console.log(removeStringPart(url))
    hashMap.push({
      logo: removeStringPart(url)[0].toUpperCase(),
      url: url
    })
    render()
  })

render()

window.onbeforeunload = () => {
  console.log('Page will close.')
  const string = JSON.stringify(hashMap)
  localStorage.setItem('x',string)
}