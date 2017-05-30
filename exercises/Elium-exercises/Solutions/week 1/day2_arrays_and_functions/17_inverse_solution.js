/*

You're given an array, invert each number in the array.
Negative numbers become positive.
Postive numbers become negative.

*/

function invertNumbers(arr) {

  var invertedNumbersArray = []

  for (var i = 0; i < arr.length; i++) {
    invertedNumbersArray.push(-arr[i])
  }

  return invertedNumbersArray
}

/*

Using the map function
----------------------

function invertNumbers(arr) {
  return arr.map( function(x) {return -x})
}

Using the map function and ES6 syntax
-------------------------------------

function invertNumbers(arr) {
  return arr.map( x => -x)
}
*/


console.log(invertNumbers([1,2,3,4,5])) // outputs [ -1, -2, -3, -4, -5 ]
console.log(invertNumbers([-1,-2,-3,-4,-5])) // outputs [ 1, 2, 3, 4, 5 ]
console.log(invertNumbers([-4,-5,1,2,3])) // outputs [ 4, 5, -1, -2, -3 ]
