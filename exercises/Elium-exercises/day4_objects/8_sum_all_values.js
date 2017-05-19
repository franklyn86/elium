/*

Write a function that sums all the values.

*/

var numberObject = {a: 5, b: 10, c: 10, d: 30, e: 30, f: 100, g: 200}


function sumAllValues(object) {

	var sum = 0

	for (var key in object) {
		sum = sum + object[key]
	}
	
	return sum

}

console.log(sumAllValues(numberObject))
// outputs 25
