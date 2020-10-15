let arr = [1, 2, 3, 4, 5, 6]
arr.reduce((sum, item) => { return sum + item }, 0)


let arr1 = [1, 2, 3, 4, 5, 6]
arr1.reduce((result, item) => { return result.concat(item * item) }, [])


let arr2 = [1, 2, 3, 4, 5, 6]
arr2.reduce((result, item) => {
  if (item % 2 === 1) {
    return result
  } else {
    return result.concat(item)
  }
})


let arr3 = [1, 2, 3, 4, 5, 6]
arr3.reduce((result, item) => result.concat((item % 2 === 1) ? [] : item), [])

// type transform
let arr4 = [{ name: 'Animal', id: 1, parent: null },
{ name: 'Dog', id: 2, parent: 1 },
{ name: 'Cat', id: 3, parent: 1 }]


arr4.reduce((result, item) => {
  if(item.parent === null){
    result.id = item.id
    result['name'] = item['name']
  }else{
    result.children.push(item)
    delete item.parent
    item.children = null
  }
  return result
}, { id: null, children: [] })