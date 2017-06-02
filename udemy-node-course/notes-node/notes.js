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
	console.log('Adding note', title, body);
	var notes = [];
	var note = {
		title,
		body
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