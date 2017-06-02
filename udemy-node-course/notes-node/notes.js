console.log("Starting notes.js");
// console.log(module);
// module.exports.age = 25;

// arrow function
module.exports.add = (a, b) => {
	console.log("Adding Function");
	return a + b;
};

const fs = require('fs');
// yargs work
// works in cli command : node index add --title=secret --body="This is my secret"    
var addNote = (title, body) => {
	console.log('Adding Note Function has been Called');
	var notes = [];
	var note = {
		title,
		body
	};

	try {
		// important task is happening here
		// each time it has been called and storing the notes each 
		// time with reading and then storing the file 
		var noteAsString = fs.readFileSync('notebook.json');
		notes = JSON.parse(noteAsString);

	} catch(e) {

	}

	notes.push(note);
  fs.writeFileSync('notebook.json', JSON.stringify(notes));
};

var getAll = () => {
	console.log('Getting all notes');
};

var getNote = (title) => {
	console.log('Getting note', title)
};

var removeNote = (title) => {
	console.log('Removing note', title)
};

// exporting in a different way
module.exports = {
	// addNote: addNote

	// es6 way
	addNote,
	getAll,
	getNote,
	removeNote
};