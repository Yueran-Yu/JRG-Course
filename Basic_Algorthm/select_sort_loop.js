// let swap = (array ,i ,j) => {
//   let temp  =array[i]
//   array[i] = array[j]
//   array[j] = temp
// }

// let minIndex = (numbers) => {
//   let index = 0
//   for(let i = 1; i <numbers.length; i++)
//   {
//     if(numbers[i] < numbers[index]){
//       index = i
//     }
//   }
//   return index
// }
// let sort = (numbers)


// 设计的挺费脑的

let swap = (array, i, j) => {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

let minIndex = (numbers) => {
  let index = 0
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[index]) {
      index = i
    }
  }
  return index
}

let sort = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    console.log(`i = ${i}`)
    let index = minIndex(numbers.slice(i)) + i
    console.log(`numbers.slice(${i}) = ${numbers.slice(i)} minIndex = ${minIndex(numbers.slice(i))} index = ${index}`)
    if (index !== i) {
      swap(numbers, index, i)
    }
    console.log(numbers)
  }
  return numbers
}

console.log(sort([4, 3, 7, 2, 9, 5]))

// var arr1 = [3,6,3,7,8]
// console.log(`splice: ${arr1.splice(3)}`)
// console.log(`splice array: ${arr1}`)
// var arr2 = [5,7,2,9,8]
// console.log(`slice: ${arr2.slice(3)}`)
// console.log(`slice array: ${arr2}`)
