/*

Write a function that sums all the values.

*/

var object = {a: 5, b: 10, c: 10}

function sumAllValues(object) {

  var sum = 0;

  for (key in object) {
    sum += object[key]
  }

  return sum
}

console.log(sumAllValues(object))
// outputs 25
