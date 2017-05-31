const assert = require('assert');

/*
assert.deepEqual({a:1}, {a:'1'});
// OK, because 1 == '1'
assert.deepStrictEqual({a:1}, {a:'1'});
// AssertionError: { a: 1 } deepStrictEqual { a: '1' }
// because 1 !== '1' using strict equality

assert.equal(1, 1);
// OK, 1 == 1
assert.equal(1, '1');
// OK, 1 == '1'
assert.equal(1, 2);
// AssertionError: 1 == 2
assert.equal({a: {b: 1}}, {a: {b: 1}});
//AssertionError: { a: { b: 1 } } == { a: { b: 1 } }
assert.fail(1, 2, undefined, '>');
// AssertionError: 1 > 2
assert.fail(1, 2, 'whoops', '>');
// AssertionError: whoops

*/

assert.ifError(0);
// OK

assert.ifError(1);
// Throws 1

assert.ifError('error');
// Throws 'error'

assert.ifError(new Error());
// Throws Error
