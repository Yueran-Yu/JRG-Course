let arr = [0,1,2,2,3,3,3,4,4,4,4,6]
let arr2 = arr.map( num => {
let numToWeek
  switch(num){
    case 0:
      numToWeek = "Monday";
      break;
    case 1:
      numToWeek = "Sunday";
      break;
    case 2:
      numToWeek = "Tuesday";
      break;
    case 3:
      numToWeek = "Wednesday";
      break;
    case 4:
      numToWeek = "Thursday";
      break;
    case 5:
      numToWeek = "Friday";
      break;
    case 6:
      numToWeek = "Saturday";
  }
  return numToWeek
 }
)
console.log(arr2)
// ['周日', '周一', '周二', '周二', '周三', '周三', '周三', '周四', '周四', '周四', '周四','周六']

