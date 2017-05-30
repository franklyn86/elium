/*

Do you know the array method .filter ?

var numbers = [1,2,3,4,5]

numbers.filter(function(element) {return element % 2 === 0})

Outputs:

[ 2, 4 ]

Write a function filter that does the exact same thing as the filter method.

*/

var numbers = [1,2,3,4,5]

function filter(array, func) {

	var newArray = []

	for (var i = 0; i < array.length; i++) {
		if (func(array[i])) {
			newArray.push(array[i])
		}
	}

	return newArray

}

console.log(filter(numbers, function(element) {return element % 2 === 0}))