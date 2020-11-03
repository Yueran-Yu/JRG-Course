const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.lastLi')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)

const hashMap = xObject || [
  {
    logo: 'A',
    logoType: 'Text',
    url: 'https://www.bilibili.com/'
  },
  {
    logo: './img/bilibili.png',
    logoType: 'image',
    url: 'https://www.acfun.cn/'
  }
]

const render = () => {
  $siteList.find('li:not(.lastLi)').remove()
  hashMap.forEach(li => {
    const $li = $(`<li>
                  <a href="${li.url}">
                   <div class="site">
                   <div class="logo">${li.url[12].toUpperCase()}</div>
                   <div class="link">${li.url}</div>
                   </div>
                   </a>
                   </li>`).insertBefore($lastLi)
  })
}


$('.addButton')
  .on('click', () => {
    let url = window.prompt('Please enter the website you wan to add:')
    // if we can't find the address start with http then add
    if (url.indexOf('http://wwww.') !== 0) {
      url = 'https://www.' + url
    }

    hashMap.push({
      logo: url[12].toUpperCase(),
      logoType: 'text',
      url: url
    })
    render()
  })

  render()

  window.onbeforeunload = () => {
    console.log('Page will close.')
    const string = JSON.stringify(hashMap)
    // console.log(typeof hashMap)
    // console.log(hashMap)
    // console.log(typeof string)
    // console.log(string)

    localStorage.setItem('x',string)
  }