/*

Write a function that adds a key-value pair to an existing object.
The function takes 3 arguments.

1) The object that we will modify
2) The key of the new key-value pair that we will add to the object
3) The value of the new key-value pair that we will add to the object.

*/

var object = {name: 'Frankyln'}

function addKeyValuePairToObject(object, key, value) {
	object[key] = value
	return object
}

console.log(addKeyValuePairToObject(object, 'country', 'Belgium'))
// outputs {name: 'Frankyln', country: 'Belgium'}
