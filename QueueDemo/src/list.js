const createNode = (value) => {
  return {
    data: value,
    next: null
  }
}

const createList = value => {
  return createNode(value)
}

const appendList = (list, value) => {
  const node = createNode(value)
  let x = list
  while (x.next) {
    x = x.next
  }
  x.next = node
  return node
}

const removeFromList = (list, node) => {
  debugger
  let x = list
  let p = node
  while (x !== node && x !== null) {
    p = x
    x = x.next
  }

  if (x === null) {
    return false
  } else if (x === p) {
    p = x.next
    return p
  } else {
    p.next = x.next
    return list
  }
}


const traverseList = (list, fn) => {
  let x = list

  while (x !== null) {
    fn(x)
    x = x.next
  }
}

const list = createList(10)
const node = list
const node2 = appendList(list, 20)
const node3 = appendList(list, 30)
const node4 = appendList(list, 40)
const node5 = appendList(list, 50)

// console.log(node2)
// removeFromList(list, node2)
removeFromList(list, node)
traverseList(list, node => { console.log(node.data) })

// console.log(list)
