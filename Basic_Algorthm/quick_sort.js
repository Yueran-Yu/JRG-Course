let quickSort = (arr) => {
  if (arr.length <= 1) { return arr }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  // arr.splice(pivotIndex, 1) = [x],
  // we need to remove the square bracket => arr.splice(pivotIndex, 1)[0]
  // console.log(`arr.splice(pivotIndex, 1): ${arr.splice(pivotIndex, 1)} pivot: ${pivot}`)
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort([3, 2, 4, 9, 8]))

