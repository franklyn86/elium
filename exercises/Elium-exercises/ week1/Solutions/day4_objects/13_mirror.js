/*

Write a function that when given an object, returns a new object, with the keys
mirrored.

*/

var object = {one: 1, two: 2, three: 3, four: 4, five: 5}

function mirror(object) {

  var newObject = {}

  var keysArray = Object.keys(object).reverse()

  keysArray.forEach( (element, index) => {
    newObject[element] = object[element]
  })

  return newObject
}

console.log(mirror(object))
