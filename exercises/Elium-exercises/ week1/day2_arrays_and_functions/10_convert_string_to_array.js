/*

This one you're going to end up using a lot!

Convert a given string to an array likes shown in the example below.

Once you've done that, convert it back to the original string.

*/

function convertStringToArray(str) {
	return str.split(" ");
}
 
function convertArrayBackToString(arr) {
	var str = "";
	var separator = "";
	for (var i = 0; i < arr.length; i++) {

		 //str = arr[i] + separator;
		 //separator = " ";
		
		if (i == 0) {str += arr[i]; } 
		else { str +=  " " + arr[i]; }
	}
	return str;
}
  
console.log(convertStringToArray('Anja Espanja'))
// outputs [ 'Anja', 'Espanja' ]

console.log(convertArrayBackToString(['Anja','Espanja']))
// outputs Anja Espanja
