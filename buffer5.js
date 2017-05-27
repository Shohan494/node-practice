const str = '\u00bd + \u00bc = \u00be';

// Prints: ½ + ¼ = ¾: 9 characters, 12 bytes
console.log(`${str}: ${str.length} characters, ` +
            `${Buffer.byteLength(str, 'utf8')} bytes`);


const buf1 = Buffer.from('1234');
const buf2 = Buffer.from('0123');

const arr = [buf1, buf2];

// Prints: [ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ]
// (This result is equal to: [buf2, buf1])
console.log(buf1);
console.log(buf2);

console.log(arr.sort(Buffer.compare));

const buf3 = Buffer.alloc(10);
const buf4 = Buffer.alloc(14);
const buf5 = Buffer.alloc(18);
const totalLength = buf3.length + buf4.length + buf5.length;

// Prints: 42
console.log(totalLength);

const bufA = Buffer.concat([buf3, buf4, buf5], totalLength);

// Prints: <Buffer 00 00 00 00 ...>
console.log(bufA);

// Prints: 42
console.log(bufA.length);
