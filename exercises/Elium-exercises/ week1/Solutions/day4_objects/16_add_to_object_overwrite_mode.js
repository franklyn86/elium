/*

Write a function modifyObject that takes 3 arguments and return a new object.

Arguments:
1)  An object that we would like to add to
2)  An object that dictates what needs to be added
3)  A boolean value that specifies whether the values of object1 should be modified or not.
    If true, the values of object1 should be overwritten by the values of object2
    If false, the values of object1 cannot be modified.

*/

var object1 = {a: 1, b: 2, c: 3}
var object2 = {b: 'second', c: 'third', d: 'fourth'}

function modifyObject(object1, object2, boolean) {

  var newObject = Object.assign({}, object1)

  if (boolean) {

    for (var key in object2) {
      newObject[key] = object2[key]
    }
  } else {

    for (var object1Key in object1) {
      if (object1Key in object2) {
        newObject[object1Key] = object1[object1Key]
      } else {
        for (var object2key in object2) {
          newObject[object2key] = object2[object2key]
        }
      }
    }
  }

  return newObject
}

console.log(modifyObject(object1, object2, true))
// outputs { a: 1, b: 'second', c: 'third', d: 'fourth' }
console.log(modifyObject(object1, object2, false))
// outputs { a: 1, b: 2, c: 3, d: 'fourth' }
