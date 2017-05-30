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
  if (a === b) return true;
  
  //We've passed if (a === b) already so we can state that if typeof != object, return false
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  //initialize property counters
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
  	//count how many properties there are in object a
    propsInA += 1;

  for (var prop in b) {
  	//count how many properties there are in object a
    propsInB += 1;
    // if a property of b is not in a, return false or 
    // if deepComparison(a[prop], b[prop]) === true, negated, return false
    if (!(prop in a) || !deepComparison(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
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
