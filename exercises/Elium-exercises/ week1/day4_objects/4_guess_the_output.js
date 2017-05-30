/*

Guess the output.
Replace the '??' with what you think the output will be.

*/

var object1 = {name: 'Anja'}
var object2 = {name: 'Anja'}
var object3 = object1

console.log(object1 === object2)
// outputs ?? => false
console.log(object1 === object3)
// outputs ?? // true

object1.name = 'Nisha'
console.log(object3.name)
// outputs ?? => Nisha
