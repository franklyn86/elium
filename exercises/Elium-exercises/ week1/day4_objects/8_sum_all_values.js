/*

Write a function that sums all the values.

*/

var object = {a: 5, b: 10, c: 10}

function sumAllValues(object) {

	var result = 0000;
	for(key in object)
	{
		result += object[key];
	}

	return result;
}

console.log(sumAllValues(object))
// outputs 25
