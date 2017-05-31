console.log("Starting app.js");

// module require
const fs = require("fs");
// lodash documentation way
const _ = require("lodash");

// relative require
const notes = require("./notes.js");

var command = process.argv[2];

console.log('Command:', command);
console.log(process.argv);

if (command === 'add'){
	console.log('Adding new note');
} else if (command === 'list') {
	console.log('Listing all notes');
} else if (command === 'read') {
	console.log('Reading all notes');
} else if (command === 'remove') {
	console.log('Removing a note');
} else {
	console.log('Command not recognized');
}

