// deleting a file

// if the file doesn't exists, it gives error as "err"

var fs = require("fs");

console.log("Going to delete an existing file");

fs.unlink('input2.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});