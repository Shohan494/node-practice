console.log("Starting app.js");

// module require
const fs = require("fs");
const os = require("os");
// lodash documentation way
const _ = require("lodash");

// relative require
const notes = require("./notes.js");

// calling function that has been exported

console.log('Result:', notes.add(2, -3));

// var user = os.userInfo();
// console.log(user);

// way 1.0 (ES6)
// fs.appendFile('greetings.txt',`Hello ${user.username}! ` + `You are ${notes.age}.`);

// way 1.1
// fs.appendFile('greetings.txt', 'Hello ' + user.username + '! ');

/* way 2
fs.appendFile('greetings.txt', 'Hello World!', function (err){
if (err){
	console.log("Unable to write to file");
	  }
});
*/

/* way 3
fs.appendFileSync ('greetings.txt', 'Hello World');
*/