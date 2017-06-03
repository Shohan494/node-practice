# Complete Note.js Developer Course Workflow
## Along with basic node.js practice

#### -node engine can create much faster machine code ( v8 engine )
#### -node is a js runtime that uses the v8 engine, v8 is written in c++
#### -v8 converts the code to machine code

#### -learned about using arguments/user inputs as process.argv and yargs
#### -const argv = yargs.argv is one of the best way for user input argument parsing
#### -var command = process.argv[2] or alternative way is: var command = argv._[0];

#### -using filesystem to read and write json file along with converting json/string
#### -using simple array, notes as json data added to a file and also checked if the file has duplicate notes or not

#### -modified previous version of code with re-usable functions and in a proper way to handle error messages
#### -basically creating and saving notes has been done properly
#### -remove a single note funtion - understanding this function, here (note) is not any variable or anything else, it defines individual items in the array:
    var filteredNotes = notes.filter((note) => note.title != title);
<<<<<<< HEAD
#### -also they are alternatives between them: 
		var filteredNotes = notes.filter((note) => note.title != title);
is same as:	
		var filteredNotes = notes.filter((note) => {
			return note.title != title;
		});
#### -need to get used to this: the first variable returns a boolean(true or false), the next is taking some decisions depending on that boolean.
		var noteRemoved = notes.removeNote(argv.title);
		var message = noteRemoved ? 'Note was Removed' : 'Note not found';
if the boolean is true first value is set, otherwise it will be the another one
=======
#### -also they are alternatives between them:
    var filteredNotes = notes.filter((note) => note.title != title);
    // same as
    var filteredNotes = notes.filter((note) => {
        return note.title != title;
    });
>>>>>>> e2be3a21f804f494e2652cfd023f752f05cb3861
