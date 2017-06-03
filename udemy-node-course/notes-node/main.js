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
		notes.logNote(note);
	} else {
		console.log('Problem Occured!');
		console.log("May be you haven't passed the arguments in the proper way");
		console.log("Or May be there were duplicate title found, let's try again");
	} 

} else if (command === 'list') {
		notes.getAll();

} else if (command === 'read') {
		var note = notes.getNote(argv.title);
		if (note) {
			console.log('Note Found Successfully!');
			notes.logNote(note);
		} else {
			console.log('Note Not Found');
		}

} else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was Removed' : 'Note not found';
	console.log(message); 

} else {
	console.log('Command not recognized');
}

