let min = (numbers) => {
  if(numbers.length > 2){
    return min([numbers[0],min(numbers.slice(1))])
  }else{
    return Math.min.apply(null, numbers)
  }
}

let minIndex = (numbers) => numbers.indexOf(min(numbers))

var sort = (numbers) => {
  if(numbers.length > 2){
    let min_Index = minIndex(numbers)
    console.log(`min_Index: ${min_Index}`)
    let minValue = numbers[min_Index]
    console.log(`minValue: ${minValue}`)
    //remove the minimum value from numbers array
    numbers.splice(min_Index,1)
    console.log(`rest array: ${numbers}`)
    return [minValue].concat(sort(numbers))
  }else{
    return numbers[0] < numbers[1] ?  numbers: numbers.reverse()
  }
}
sort([3,4,5,6,1])


