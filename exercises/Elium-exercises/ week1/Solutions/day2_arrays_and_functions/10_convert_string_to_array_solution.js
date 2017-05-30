/*

This one you're going to end up using a lot!

Convert a given string to an array likes shown in the example below.

Once you've done that, convert it back to the original string.

*/

function convertStringToArray(str) {
	return str.split(' ')
}

function convertArrayBackToString(arr) {
	return arr.join(' ')
}
  
console.log(convertStringToArray('Anja Espanja'))
// outputs [ 'Anja', 'Espanja' ]

console.log(convertArrayBackToString(['Anja','Espanja']))
// outputs Anja Espanja
