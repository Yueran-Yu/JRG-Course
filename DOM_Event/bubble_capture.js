const level1 = document.querySelector('.level1')
const level2 = document.querySelector('.level2')
const level3 = document.querySelector('.level3')
const level4 = document.querySelector('.level4')
const level5 = document.querySelector('.level5')
const level6 = document.querySelector('.level6')
const level7 = document.querySelector('.level7')

let n = 1
const removeX = (e) => {
  const t = e.currentTarget
  // e will disappear immediately once it clicked
  setTimeout(() => { t.classList.remove('x') }, n * 1000)
  n += 1
}

const addX = (e) => {
  const t = e.currentTarget
  setTimeout(() => { t.classList.add('x') }, n * 1000)
  n += 1
}

level1.addEventListener('click', removeX, true)
level1.addEventListener('click', addX)
level2.addEventListener('click', removeX, true)
level2.addEventListener('click', addX)
level3.addEventListener('click', removeX, true)
level3.addEventListener('click', addX)
level4.addEventListener('click', removeX, true)
level4.addEventListener('click', addX)
level5.addEventListener('click', removeX, true)
level5.addEventListener('click', addX)
level6.addEventListener('click', removeX, true)
level6.addEventListener('click', addX)
level7.addEventListener('click', removeX, true)
level7.addEventListener('click', addX)

// self define event
button1.addEventListener('click', () => {
  const event = new CustomEvent('Grace',
    {
      detail: { name: 'Grace', age: 18 },
      bubbles: true,
      cancelable: false
    })
  button1.dispatchEvent(event)
})
button1.addEventListener('Grace', (e) => { console.log(e.detail) })

lyi.style.color = "red"