// compresses a file into .gz

/*
var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");
*/

// decompresses from a .gz file

var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input2.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input2.txt'));
  
console.log("File Decompressed.");