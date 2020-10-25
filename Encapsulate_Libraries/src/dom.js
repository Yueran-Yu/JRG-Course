window.dom = {
  create(string1){
    const container =  document.createElement("template")
    container.innerHTML =  string1.trim()
    return container.content.firstChild
  },
  after(node, node2){
    node.parentNode.insertBefore(node2, node.nextSibling)
  },
  before(node, node2){
    node.parentNode.insertBefore(node2,node)
  },
  append(parent, node){
    parent.appendChild(node)
  },
  wrap(node, parent){
    dom.before(node, parent)
    dom.append(parent, node)
  },
  remove(node){
    node.parentNode.removeChild(node)
    return node
  },
  empty(node){
    const {childNodes} = node
    const array = []
    // you can't use for loop to remove children node, since the length number will be reduced each time when the 'empty' function runs
    // for(let i = 0; i <childNodes.length; i++){
    //   dom.remove(childNodes[i])
    //   array.push(childNodes[i])
    // }

    while(node.firstChild){
      array.push(dom.remove(node.firstChild))
    }
    return array
  }
}


