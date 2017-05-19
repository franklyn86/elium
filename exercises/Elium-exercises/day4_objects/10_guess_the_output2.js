/*

Guess the output

*/

var foo = {unique_prop: 1}; 
var bar = {unique_prop: 2}; 
var object = {};

object[foo] = 'value';

console.log(object);

console.log(object[bar]);
// outputs ?? => value
