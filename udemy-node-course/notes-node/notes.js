console.log("Starting notes.js");

// console.log(module);

// module.exports.age = 25;

// arrow function
module.exports.add = (a, b) => {
	console.log("Adding Function");
	return a + b;
};

// works in cli command : node index add --title=secret --body="This is my secret"    

var addNote = (title, body) => {
	console.log('Adding note', title, body);
};

var getAll = () => {
	console.log('Getting all notes');
};

// exporting in a different way
module.exports = {
	// addNote: addNote

	// es6 way
	addNote,
	getAll
};