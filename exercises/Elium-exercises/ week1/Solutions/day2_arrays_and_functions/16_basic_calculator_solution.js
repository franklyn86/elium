/*

The calculator app on my windows machine doesn't want to start up anymore.
Write a basic calculator app that takes 3 arguments,
the operation and 2 integer.

*/

function calculator(operation, n1, n2) {

  switch (operation){
    case '+':
      return n1 + n2
      break
    case '-':
      return n1 - n2
      break
    case '*':
      return n1 * n2
      break
    case '/':
      return n1 / n2
      break
  }

}

console.log(calculator('+', 1, 2))
// output 3
console.log(calculator('-', 1, 2))
// output -1
console.log(calculator('*', 1, 2))
// output 2
console.log(calculator('/', 1, 2))
// output 0.5
