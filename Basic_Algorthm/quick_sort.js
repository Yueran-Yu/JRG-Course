let quickSort = (arr) => {
  if (arr.length <= 1) { return arr }
  let pivotIndex = Math.floor(arr.length / 2)
  console.log(`pivotIndex: ${pivotIndex}`)
  let pivot = arr.splice(pivotIndex, 1)[0]
  // arr.splice(pivotIndex, 1) = [x],
  // we need to remove the square bracket => arr.splice(pivotIndex, 1)[0]
  console.log(`pivot: ${pivot}`)
  // console.log(`arr.splice(pivotIndex, 1): ${arr.splice(pivotIndex, 1)} pivot: ${pivot}`)
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
      console.log(`left.push(arr[i]): ${left}`)
    } else {
      right.push(arr[i])
      console.log(`right.push(arr[i]): ${right}`)
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort([3, 2, 4, 9, 8]))

console.log([2,3].concat(4,[6,8]))
