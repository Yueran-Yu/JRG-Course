const fs = require('fs')
// read the users from db
const usersString = fs.readFileSync('./db/users.json').toString()
const usersArray = JSON.parse(usersString)
console.log(typeof usersString);
console.log(usersString);
console.log(typeof usersArray);
console.log(usersArray instanceof Array);
console.log(usersArray);

// write a user to db
const user3 = {id:3, name: "Howard", password: '232323'}
usersArray.push(user3)
console.log(usersArray);

//change an array object to a string
const string = JSON.stringify(usersArray)
fs.writeFileSync('./db/users.json', string)
