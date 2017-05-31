console.log("Starting app.js");

// module require
const fs = require("fs");
const os = require("os");
// lodash documentation way
const _ = require("lodash");

// relative require
const notes = require("./notes.js");

// checks if the parameter is a string or not
console.log(_.isString(true));
console.log(_.isString('shohan'));

// finds out the duplicates and removes them in the array
var filteredArray = _.uniq(["shohan", "shohan", 1, 2, 3, 4, 1])
console.log(filteredArray);


