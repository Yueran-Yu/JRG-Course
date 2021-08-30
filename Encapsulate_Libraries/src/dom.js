window.dom = {
  create(string1) {
    const container = document.createElement("template")
    container.innerHTML = string1.trim()
    return container.content.firstChild
  },
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling)
  },
  before(node, node2) {
    node.parentNode.insertBefore(node2, node)
  },
  append(parent, node) {
    parent.appendChild(node)
  },
  wrap(node, parent) {
    dom.before(node, parent)
    dom.append(parent, node)
  },
  remove(node) {
    node.parentNode.removeChild(node)
    return node
  },
  empty(node) {
    const { childNodes } = node
    const array = []
    // you can't use for loop to remove children node, since the length number will be reduced each time when the 'empty' function runs
    // for(let i = 0; i <childNodes.length; i++){
    //   dom.remove(childNodes[i])
    //   array.push(childNodes[i])
    // }
    while (node.firstChild) {
      array.push(dom.remove(node.firstChild))
    }
    return array
  },
  //read and write attributes
  attr(node, name, value) { // overload
    if (arguments.length === 3) {
      node.setAttribute(name, value)
    } else if (arguments.length === 2) {
      return node.getAttribute(name)
    }
  },
  text(node, content) { //adapt
    if (arguments.length === 2) {
      if ('innerText' in node) {
        node.innerText = content
      } else {
        node.textContent = content
      }
    } else if (arguments.length === 1) {
      if ('innerText' in node) {
        return node.innerText
      } else {
        return node.textContent
      }
    }
  },
  html(node, content) {
    if (arguments.length === 2) {
      node.innerHTML = content
    } else if (arguments.length === 1) {
      return node.innerHTML
    }
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      // dom.style(div, 'color', 'red')
      node.style[name] = value
    } else if (arguments.length === 2) {
      if (typeof name === 'string') {
        // dom.style(div, 'color')
        return node.style[name]
      } else if (name instanceof Object) {
        // dom.style(test, {border: '4px solid red', color:'green'})
        const object = name
        for (let key in object) {
          node.style[key] = object[key]
        }
      }
    }
  },
  class: {
    add(node, className) { node.classList.add(className) },
    remove(node, className) { node.classList.remove(className) },
    has(node, className) { return node.classList.contains(className) }
  },
  on(node, eventName, fn) { node.addEventListener(eventName, fn) },
  off(node, eventName, fn) { node.removeEventListener(eventName, fn) },
  find(selector, scope) { return (scope || document).querySelectorAll(selector) },
  parent(node) { return node.parentNode },
  children(node) { return node.children },
  siblings(node) { return Array.from(node.parentNode.children).filter(n => n !== node) },
  next(node){
    let x = node.nextSibling
    while( x && x.nodeType === 3){
      x = x.nextSibling
    }
    return x
    },
  previous(node) {
    let x = node.previousSibling
    while( x && x.nodeType === 3){
      x = x.previousSibling
    }
    return x
  },
  each(nodes, fn){
    for(let i = 0; i < nodes.length; i++){
      fn.call(null, nodes[i])
    }
   },
  index(node) {
    const list = dom.children(node.parentNode)
    let i
    for( i= 0; i < list.length; i++){
      if(list[i] === node){
        break
      }
    }
    return i
  }
}


