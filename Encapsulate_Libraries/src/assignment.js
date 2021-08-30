window.dom = {
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector)
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      node.style[name] = value

    } else if (arguments.length === 2) {
      if (name instanceof Object) {
        for (let key in name) {
          node.style[key] = name[key]
        }
      } else if (typeof name === 'string') {
        return node.style[name]
      }
    }
  },
  each(nodes, fn) {
    for(let i = 0; i < nodes.length; i++){
      fn.call(null, nodes[i])
    }
  }
}

const div = dom.find('#test>.red')[0] // 获取对应的元素
console.log(div)
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素