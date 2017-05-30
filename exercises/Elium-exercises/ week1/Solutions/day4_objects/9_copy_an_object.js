/*

As we've seen at 'guess the output', we cannot simply copy object1 like this:

var object1 = {name: 'Anja'}
var object2 = object1


If we make modifications to object2, it is actually object1 that's changing.

object2.name  = 'Laurens'
console.log(object1.name)

Outputs Laurens.

Therefore, write a function that returns an exact copy of object1

*/

var object1 = {name: 'Anja'}

function copyObject(object1) {
  return Object.assign({}, object1)
}

object2 = copyObject(object1)
console.log(object2)
// outputs { name: 'Anja' }
object2.name = 'Laurens'
console.log(object1.name)
// outputs Anja
