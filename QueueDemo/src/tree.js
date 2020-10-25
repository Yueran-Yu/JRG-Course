const createTree = (value) => {
  return {
    data: value,
    children: null,
    parent: null
  }
}

const addChild = (node, value) => {
  const newNode = {
    data: value,
    children: null,
    parent: node
  }

  node.children = node.children || []
  node.children.push(newNode)
  return newNode
}

const traverseNode = (tree, fn) => {
  fn(tree)
  if (!tree.children) { return }
  for (let i = 0; i < tree.children.length; i++) {
    traverseNode(tree.children[i], fn)
  }
}

const removeNode = (node) => {
  const siblings = node.parent.children
  let index = 0
   for(let i = 0; i < siblings.length; i++){
     if(siblings[i] == node){
       index = i
     }
   }
  siblings.splice(index,1)
}

const tree = createTree(10)
const node1 = addChild(tree, 20)
const node2 =addChild(tree, 30)
const node3 = addChild(tree, 40)
addChild(node1, 12)
addChild(node1, 13)
addChild(node1, 14)
addChild(node2, 12)
addChild(node2, 14)
addChild(node3, 13)

removeNode(node2)

console.log(tree)
// traverseNode(tree, node => { console.log(node.data) })