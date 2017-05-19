/*

Adrian is a bit mathematically challenged.

Write a function that can tell you whether an integer is odd or even.

*/

function oddOrEven(n) {

  if (n % 2 === 0) return 'Even'
  return 'Odd'

}

console.log(oddOrEven(4))
// outputs Even
console.log(oddOrEven(3))
// outputs Odd
