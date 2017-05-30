/*

Write a function that swaps the key-value pairs.

*/

var object = {name: 'Gabriel', sex: 'male', country: 'Netherlands'}

function swapKeyValuePairs(object) {
  var newObject = {}

  for (var key in object) {
    newObject[object[key]] = key
  }

  return newObject
}

console.log(swapKeyValuePairs(object))
// outputs { Gabriel: 'name', male: 'sex', Netherlands: 'country' }
