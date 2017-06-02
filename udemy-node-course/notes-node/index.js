console.log("Starting app.js");

// module require
const fs = require("fs");
// lodash documentation way
const _ = require("lodash");
const yargs = require("yargs");

// relative require
const notes = require("./notes.js");

const argv = yargs.argv;
var command = process.argv[2];

console.log('Command:', command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add'){
	notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	console.log('Reading all notes');
} else if (command === 'remove') {
	console.log('Removing a note');
} else {
	console.log('Command not recognized');
}

