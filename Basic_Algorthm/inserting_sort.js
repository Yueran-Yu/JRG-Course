let list = [700,4,3,2,11,10,12,5,123,644,1]
let insertionSort = list => {
  let arr = [...list]
  for(let i = 1; i <arr.length; i++){
    for(let j = i; j >=0; j--){
      if(arr[j-1] > arr[j]){
        [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
      }else{
        break
      }
    }
  }
  return arr
}

console.log(insertionSort(list))