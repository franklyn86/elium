/*

Write a function that when given an object, returns a new object, with the keys
mirrored.

*/

var object = {one: 1, two: 2, three: 3, four: 4, five: 5}

function mirror(object) {

	var newObject = {};

	var reversedArrayOfKeys = Object.keys(object).reverse();

	console.log(reversedArrayOfKeys);

	for (var i = 0; i < reversedArrayOfKeys.length; i++) {
		newObject[reversedArrayOfKeys[i]] = object[reversedArrayOfKeys[i]];
	}

	return newObject;

}

console.log(object);
console.log(mirror(object));
// outputs { five: 5, four: 4, three: 3, two: 2, one: 1 }
