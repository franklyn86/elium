/*

Write a function that takes an array of integers as an argument
and outputs a new array.
If a number in the array has a square root, output the square root 
of that number in the new array. If not, output the square of the number
in the new array.

*/

function squareRootOrSquare(arr) {

  var newArray = []

  for (var i = 0; i < arr.length; i++) {
    if (Math.sqrt(arr[i]) % 1 === 0) newArray.push(Math.sqrt(arr[i]))
    else newArray.push(Math.pow(arr[i], 2))
  }

  return newArray

}

/*

ES6, map method and ternary operator
------------------------------------

function squareRootOrSquare(arr) {

  return arr.map( x => {
    return (Math.sqrt(x) % 1 === 0) ? Math.sqrt(x) : x*x
  })

}

*/

console.log(squareRootOrSquare([4,3,9,7,2,1]))
// outputs [ 2, 9, 3, 49, 4, 1 ]
