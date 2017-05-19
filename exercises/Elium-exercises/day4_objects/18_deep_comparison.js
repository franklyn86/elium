/*

With objects, the == or === operator does not compare the actual values of their properties.

Write a function deepComparison that takes two values (strings, integers, objects, ...) 
and returns true only if they are truly equal.

Exception: typeof null also produces 'object'.

HINTS:

-Arrays are objects.
-Look into recursivity. You will need a recursive call to deepComparison.

*/

function deepComparison(a, b) {

}

var obj = {here: {is: "an"}, object: 2};
console.log(deepComparison(obj, obj));
// outputs true
console.log(deepComparison(obj, {here: 1, object: 2}));
// outputs false
console.log(deepComparison(obj, {here: {is: "an"}, object: 2}));
// outputs true
console.log(deepComparison([1,2], [1,2]));
// outputs true
console.log(deepComparison([1], [1,2]))
// outputs false
console.log(deepComparison('string', 'string'))
// outputs true
console.log(deepComparison('string', 'another string'))
// outputs false
console.log(deepComparison(1, 1))
// outputs true
console.log(deepComparison(1, 2))
// outputs false
