window.jQuery = function (selectorOrArray) {
  let elements
  if (typeof selectorOrArray === 'string') {
    elements = document.querySelectorAll(selectorOrArray)
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray
  }

  return {
    oldApi: selectorOrArray.oldApi,

    "addClass": function (className) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className)
      }
      return this
    },
    find(selector) {
      let arr = []
      console.log(elements)
      for (let i = 0; i < elements.length; i++) {
        const subElements = Array.from(elements[i].querySelectorAll(selector))
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
    each(fn) {
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i)
      }
      return this
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
      console.log(elements)
    }
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

