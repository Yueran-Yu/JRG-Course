window.$ = window.jQuery = function (selectorOrArrayOrTemplate) {
  let elements
  if (selectorOrArrayOrTemplate[0] === "<") {
    elements = [createElement(selectorOrArrayOrTemplate)]
  }
  else if (typeof selectorOrArrayOrTemplate === 'string') {
    elements = document.querySelectorAll(selectorOrArrayOrTemplate)
  } else if (selectorOrArrayOrTemplate instanceof Array) {
    elements = selectorOrArrayOrTemplate
  }

  function createElement(string) {
    const container = document.createElement('template')
    container.innerHTML = string.trim()
    return container.content.firstChild
  }

  // api 可以操作elements
  const api = Object.create(jQuery.prototype) // 创建一个 object, 这个 object的  __proto__ 为括号里的东西， const api = {__proto__: jQuery.prototype}

  Object.assign(api, {
    elements: elements,
    oldApi: selectorOrArrayOrTemplate.oldApi
  })
  // api.elements = elements
  // api.oldApi = selectorOrArrayOrTemplate.oldApi
  return api
}

//一下所有的 this都指的是 api
jQuery.fn = jQuery.prototype = {
  constructor: jQuery,
  jquery: true,
  "addClass": function (className) {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.add(className)
    }
    return this
  },
  get(index) {
    return this.elements[index]
  },
  appendTo(node) {
    if (node instanceof Element) {
      this.each(el => node.appendChild(el))
    } else if (node.jquery === true) {
      this.each(el => node.get(0).appendChild(el))
    }
  },
  append(children) {
    if (children instanceof Element) {
      this.get(0).appendChild(children)
    } else if (children instanceof HTMLCollection) {
      for (let i = 0; i < children.length; i++) {
        this.get(0).appendChild(children[i])
      }
    } else if (children.jquery === true) {
      children.each(node => this.get(0).appendChild(node))
    }
  },
  find(selector) {
    let arr = []
    console.log(this.elements)
    for (let i = 0; i < this.elements.length; i++) {
      const subElements = Array.from(this.elements[i].querySelectorAll(selector))
      arr = arr.concat(subElements)
    }
    console.log(arr)
    arr.oldApi = this

    console.log(`==== 这里的this返回的是 原来的 api 整个对象.
                 为啥是原来的呢？因为操作到此，我们并没有 返回 新的 api 的结果，
                 新的 api 的结果 看下面 那个 return jQuery(arr),
                 return 完了 跳出循环之后，这个 api 的 结果 才是 最新的，
                 在别的地方 再 引用 this 的时候 api 才是 最新操作完的值`)
    return jQuery(arr)
  },
  end() {
    return this.oldApi
  },
  parent() {
    const arr = []
    this.each(node => {
      if (arr.indexOf(node.parentNode) === -1) {
        arr.push(node.parentNode)
      }
    })
    return jQuery(arr)
  },
  children() {
    const arr = []
    this.each(node => {
      // think of it a replacement for Array.prototype.concat
      // const numbers1 = [1, 2, 3, 4, 5];
      // const numbers2 = [ ...numbers1, 1, 2, 6,7,8];
      // this will be [1, 2, 3, 4, 5, 1, 2, 6, 7, 8]
      // a parent node may has many children, so the children will be stored as an array
      arr.push(...node.children)
    })
    return jQuery(arr)
  },
  print() {
    console.log(this.elements)
  },
  each(fn) {
    for (let i = 0; i < this.elements.length; i++) {
      fn.call(null, this.elements[i], i)
    }
    return this
  }
}


// function hello() {
//   return {
//     "b": 890,
//     "c": function () {
//       return this
//     },
//     d(hello) {
//       console.log(hello)
//       return this
//     }
//   }
// }


// console.log(hello())
// obj.fn(p1)
// obj.fn.call(obj,p1)
//  equal to
// const obj = hello()
// const p1 = 'fly high~!!!!!'
// console.log(obj.d(p1))
// console.log(obj.d.call(obj, p1))

