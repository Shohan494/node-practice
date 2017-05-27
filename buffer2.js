const buf = Buffer.from('hello world', 'ascii');

// Prints: 68656c6c6f20776f726c64
console.log(buf.toString('hex'));

// Prints: aGVsbG8gd29ybGQ=
console.log(buf.toString('utf8'));

console.log(buf.toString('base64'));

console.log(buf.toString('utf16le'));

console.log(buf.toString('ucs2'));

console.log(buf.toString('latin1'));

console.log(buf.toString('binary'));

console.log(buf.toString('hex'));


