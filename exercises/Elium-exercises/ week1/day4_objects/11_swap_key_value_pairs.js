/*

Write a function that swaps the key-value pairs.

*/

var object = {name: 'Gabriel', sex: 'male', country: 'Netherlands'}

function swapKeyValuePairs(object) {

	var newObj = {};

	for(key in object)
	{
		newObj[object[key]] = key;
	}

	return newObj;
}

console.log(swapKeyValuePairs(object))
// outputs { Gabriel: 'name', male: 'sex', Netherlands: 'country' }
