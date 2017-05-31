// writing to a stream

var fs = require("fs");
var data = "Shohanul Alam Learns Node";

var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data, 'UTF8');

writeStream.end();

writeStream.on('finish', function(){
	console.log("Write Completed");
});

writeStream.on('error', function(err){
	console.log(err.stack);
});

console.log("Program ended");

