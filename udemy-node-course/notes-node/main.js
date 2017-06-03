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

// alternative
// var command = argv._[0];

console.log('Command:', command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add'){
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('New Note Created Successfully!');
		console.log('--');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
	} else {
		console.log('Problem Occured!');
		console.log("May be you haven't passed the arguments in the proper way");
		console.log("Or May be there were duplicate title found, let's try again");
	} 

} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.getNote(argv.title);
} else if (command === 'remove') {
	notes.removeNote(argv.title);
} else {
	console.log('Command not recognized');
}

