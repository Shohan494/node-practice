 const buf = Buffer.from([1, 2, 3]);

 for ( const b of buf )
 {
 	console.log(b);
 }


/* I tried

 for (const b in buf) {
  console.log(b);
}

ECMAScript 2015 (ES6) for..of syntax.

*/