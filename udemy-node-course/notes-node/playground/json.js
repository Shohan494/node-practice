/*
var obj = {
	name: 'Shohan'
}
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var personString = '{"name": "Shohan","age": 24}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
*/

// using filesystem to read and write json file along with converting
const fs = require('fs');

var originalNote = {
	title: 'Some Title',
	body: 'Some Body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteObj = fs.readFileSync('notes.json');

var note = JSON.parse(noteObj);

// note
console.log(typeof note);
console.log(note.title);
console.log(note.body);