const createTree = (value) => {
  return {
    data: value,
    children: null
  }
}

const addChild = (node, value) => {
  const newNode = {
    data: value,
    children: null,
    parent: null
  }

  node.children = node.children || []
  node.children.push(newNode)
  return newNode
}

const traverseNode = (tree, fn) => {
  fn(tree)
  if(!tree.children){return}
  for (let i = 0; i < tree.children.length; i++) {
    traverseNode(tree.children[i], fn)
  }
}

const removeNode = (tree, node) => {

}

const tree = createTree(10)
const node1 = addChild(tree, 20)
addChild(tree, 30)
addChild(tree, 40)
addChild(node1, 12)
addChild(node1, 13)
addChild(node1, 14)

console.log(tree)
traverseNode(tree, node => {console.log(node.data)})