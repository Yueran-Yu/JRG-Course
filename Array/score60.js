let scores = [95,91,59,55,42,82,72,85,67,66,55,91]
let scores2 = scores.filter(
  num => num > 60
)
console.log(scores2) //  [95,91,82,72,85,67,66, 91]