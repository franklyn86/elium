1/*

Complete the function so that it squares each number and then sums it together.

*/

function squareSum(arr) {

  return arr.map( n => n*n ).reduce( (a,b) => a+b)

}

console.log(squareSum([1,2,2]))
// outputs 9
