// 1 core skill: closure
// 2 core skill: 链式操作

window.jQuery = function (selectorOrArray) {
  let elements
  if (typeof selectorOrArray === 'string') {
    elements = document.querySelectorAll(selectorOrArray)
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray
  }

  // api can manipulate elements
  // v 1.0
  // const api = {
  //   addClass(className) {
  //     for (let i = 0; i < elements.length; i++) {
  //       elements[i].classList.add(className)
  //     }
  //     return this
  //   }
  // }
  // return api


  // v  2.0
  return {
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className)
      }
      return this
    },
    find(selector) {
      let array = []
      for (let i = 0; i < elements.length; i++) {
        const elements2 = Array.from(elements[i].querySelectorAll(selector))
        array = array.concat(elements2)
      }
      array.oldApi = this // 'this' equals api2=>find(selector)
      return jQuery(array)
    },
    oldApi: selectorOrArray.oldApi,
    end() {
      return this.oldApi //this is  api
    },
    each(fn) {
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i)
      }
      return this
    },
    parent() {
      const arr = []
      this.each((node) => {
        if (arr.indexOf(node.parentNode) === -1) {
          arr.push(node.parentNode)
        }
      })
      return jQuery(arr)
    },
    print() {
      console.log(elements)
    },
    children(){
      const arr = []
      this.each((node)=> array.push(...node.children))
      // equals array.push(node.children[0], node.children[1], node.children[2], node.children[3])

      return jQuery(arr)
    },
    appendTo(node){
      if(node instanceof Element){
        this.each((el => node.appendChild(el))) //遍历elements, 对每个el进行node.appendChild 操作
      }else if(node.jQuery === true){
        this.each(el=> node.get(0).appendChild(el)) //遍历elements, 对每个 el进行 node.get(0).appendChild(el)操作
      }
    }
  }
}