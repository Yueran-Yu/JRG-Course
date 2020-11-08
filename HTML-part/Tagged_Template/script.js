const author = "Some Author"
const statement = "Some Statement"

const quote = highlight`Here is the ${statement} by ${author} and it could not be more true.`
result.innerHTML = quote

function highlight(text, ...vars) {
  const textArray = text.map((item, index) => {
    return `${item} <strong class="green">${vars[index] || ""} </strong>`
  })
  return textArray.join('')
}

//return object
const object = () => ({ name: "john", age: 25 })

// arrow functions as call back functions:
// 1. array filter method 2. addEventListener
const numbers = [1, 2, 3, 4, 5, 6]
const big = numbers.filter(num => num > 2)
console.log(big)
btn.addEventListener('click', () => console.log('you clicked me'))

// regular function: 'this' refers parent, left of the dot
// arrow function : refers to it's current surrounding scope

const anna = {
  firstName: "anna",
  lastName: "sanders",
  bob: {
    fName: "bob",
    say: () => {
      console.log(this);
    }
  }
}

anna.bob.say()
// Window {window: Window, self: Window, document: document, name: "", location: Location, …}


const bob = {
  firstName: "bob",
  lastName: "smith",
  sayName: function () {
    const self = this
    setTimeout(function () {
      console.log(`Hello, my name is ${self.firstName} ${self.lastName}`);
    })
  }
}

bob.sayName()
// Window {window: Window, self: Window, document: document, name: "", location: Location, …}

const bob1 = {
  firstName: "bob",
  lastName: "smith",
  sayName: function () {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    })
  }
}

bob1.sayName()
// Hello, my name is bob smith


// Array destructing
const friends = ['john', 'peter', 'bob', 'alice']

const [a, b, x] = friends
console.log(a, b, x); //script.js:74 john peter bob
const [d, , c] = friends
console.log(d, c) //john bob

// swap variables
// 请加分号， 不然就会 找不到变量
// script.js:82 Uncaught ReferenceError: Cannot access 'sec' before initialization at script.js:82
let fir = "nancy";
let sec = "jack";
[sec, fir] = [fir, sec]
console.log(fir, sec)

const bob2 = {
  first: 'bob2',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane'
  },
}

const {
  first: firstName,
  last,
  city,
  zip,
  hop,
  siblings: { sister: favoriteSibling },
} = bob2;

console.log(firstName, last, city, hop, favoriteSibling)

// destructuring function parameters
function printPerson({ first, last, city, siblings: { sister: newSib } }) {
  // const {first, last, city} = person;
  console.log(first, last, city, newSib);
}
console.log('Here is the result of printPerson(): ')
printPerson(bob2)

// New string Methods
// startsWith(), endsWidth(), includes(), repeat()
// ALL OF THEM IS CASE SENSITIVE

const person1 = 'Peter Smith '
const employee1 = '23456-EMP-PETER-SMITH'
const manager1 = '23456-MAN-JOHN-DOE'

console.log(person1.startsWith('Pet'))  // true
console.log(person1.startsWith('peter')) // false
console.log(employee1.startsWith('EMP', 6)) // true

// endsWidth
console.log(manager1.endsWith('DOE')) //true
console.log(manager1.endsWith('MAN', 9)) // 从前往后数，但是用endsWith的时候，需要从后往前计算

//include
console.log('includes');
console.log(employee1.includes('PETER'));  // true    if includes('pETER')=> false

const multiplyPeople = (person, amount = 5) => person1.repeat(amount)
const people = multiplyPeople(person1, 3)
console.log(people);

// for of loop
const fruits = ['apple', 'orange', 'banana', 'peach']
const longName = 'John Smith Pepper III'
let shortName = ''
for (const l of longName) {
  if (l === ' ') {
    continue;
  } else {
    shortName += l
  }
}
console.log(shortName);


for (const f of fruits) {
  if (f === 'banana') {
    // break  // apple orange
    continue  // apple orange peach
  }
  console.log(f);
}

// Spread Operator
// Allows an iterable to spread/expand individually inside receiver
// Split into single items and copy them.
const udemy = 'udemy'
const letters = [...udemy]
console.log(letters)

const boys = ['john', 'petter', 'bob']
const girls = ['susan', 'anna']
const bestFriend = 'arnold'

// to get  a flat array of friend, use  ...boys, ...girls
const friends1 = [...boys, ...girls, bestFriend]
console.log(friends1);

// this is use a reference
// const  newFriends = friends
// newFriends[0] = 'karina'
// console.log(newFriends)  // result: (6) ["karina", "petter", "bob", "susan", "anna", "arnold"]
// console.log(friends) // result: (6) ["karina", "petter", "bob", "susan", "anna", "arnold"]

// this is a really copy
const newFriends1 = [...friends1]
newFriends1[0] = 'karina'
console.log(newFriends1)  // result: (6) ["karina", "petter", "bob", "susan", "anna", "arnold"]
console.log(friends1) // result: (6) ["john", "petter", "bob", "susan", "anna", "arnold"]


// Spread and copy an object
const person2 = {name: 'john', job: "developer"}
const newPerson2 = {...person2, city: "chicago", name: 'peter'}
console.log(person2)  //result: {name: "john", job: "developer"}
console.log(newPerson2);  // result: {name: "peter", job: "developer", city: "chicago"}

//

const headings = document.querySelectorAll('h1')
const text = [...headings].map(item => `<span>${item.textContent}</span>`).join('')
console.log(text)
result.innerHTML = text

const numbers2 = [23,45,66,88,577]
console.log(Math.max(...numbers2));

const personJ = ['John', 'sanders']
const sayHello1 = (name, lastName) => {
  console.log(`Hello ${name} ${lastName}`);
}

sayHello1(...personJ)


// rest operator
// array
const fruits1 = ['apple', 'orange', 'lemon', 'banana', 'peach']
const [first, , third, ...rest] = fruits1
console.log(first, third, rest);


// objects
const person3 = {name: 'john', lastName: 'smith', job: 'developer'}
const {job, ...rest1} = person3
console.log(job,rest1);

// ...scores gathering the rest of the parameters
                         // collection operator
const getAverage = (name, ...scores) =>{
  // console.log(name);
  // console.log(scores);
  let total = 0
  for(const s of scores){
    total += s
  }
  console.log(`${name}'s average score is ${total/ scores.length}`);
}

const testScores = [67,95,67,78]
getAverage(person3.name, 67,95,67,78)
                          //spread operator, instead of passing it as an array, you pass it as each individual item
getAverage(person3.name, ...testScores)

// Array.of and Array.from - NOT OF THE PROTOTYPE
// from = returns Array Object from any object with a length property or an iterable object
//from turns array-like/ish into array - string, nodeList, Set

const udemy1 = "udemy"
console.log(Array.from(udemy1));

function countTotal(){
  // console.log(arguments);
  console.log(Array.from(arguments).reduce((total,curr) => {return total += curr}, 0));
}

countTotal(45,56,78)