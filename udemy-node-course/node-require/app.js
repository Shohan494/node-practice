console.log("app stated node require");

const fs = require("fs");
const os = require("os");

var user = os.userInfo();

console.log(user);

// way 1.0
//fs.appendFile('greetings.txt', 'Hello ' + user.username + '! ');

// way 1.1 (ES6)
fs.appendFile('greetings.txt',`Hello ${user.username}!`);

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