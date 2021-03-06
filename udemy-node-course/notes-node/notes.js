console.log("Starting notes.js");
// console.log(module);
// module.exports.age = 25;

// arrow function
module.exports.add = (a, b) => {
	console.log("Adding Function");
	return a + b;
};

const fs = require('fs');

var fetchNotes = () => {
	try {
		// important task is happening here
		// each time it has been called and storing the notes each 
		// time with reading and then storing the file 
		var noteAsString = fs.readFileSync('notebook.json');
		return JSON.parse(noteAsString);
	} catch(e) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notebook.json', JSON.stringify(notes));
};

// yargs work
// works in cli command : node index add --title=secret --body="This is my secret"    
var addNote = (title, body) => {
	console.log('Adding Note Function has been Called');
	// fetching notes as string
	var notes = fetchNotes();
	var note = {
		title,
		body
	};

  var duplicateNotes = notes.filter((note) => note.title === title);
	/* same as above one
	var duplicateNotes = notes.filter((note) => {
		return note.title === title;
	});
	*/
	// watch over this Function Return
	if(duplicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

var getAll = () => {
	return fetchNotes();
};

var getNote = (title) => {
	console.log('Remove Note Function has been called');
	console.log('Getting note by title name:', title);
	// fetching notes as string
	var notes = fetchNotes();
	var gettingNote = notes.filter((note) => note.title === title);
	/* same as above one
	var gettingNote = notes.filter((note) => {
		return note.title === title;
	});
	*/
	return gettingNote[0];
};

var removeNote = (title) => {
	console.log('Remove Note Function has been called');
	console.log('Removing this note of title:', title);
	// fetching notes as string
	var notes = fetchNotes();
	console.log(notes);
	// understand the function, here (note) is not any variable or anything else
	// it defines individual items in the array
	var filteredNotes = notes.filter((note) => note.title != title);
	/* same as above one
	var filteredNotes = notes.filter((note) => {
		return note.title != title;
	});
	*/
	saveNotes(filteredNotes);
	return notes.length != filteredNotes.length;
};

var logNote = (note) => {
	console.log('--');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}

// exporting in a different way
module.exports = {
	// addNote: addNote

	// es6 way
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
};