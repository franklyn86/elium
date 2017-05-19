/*

Do you know the array method .map ?

var numbers = [1,2,3,4,5]

numbers.map(function(element) {return element * element})

Outputs:

[1, 4, 9, 16, 25]


Write a function map that does the exact same thing as the map method.

*/

var numbers = [1,2,3,4,5]

function map(array, func) {

	var newArray = []

	for (var i = 0; i < array.length; i++) {
		newArray.push(func(array[i]))
	}

	return newArray

}

console.log(map(numbers, function(element) {return element * element}))