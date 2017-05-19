/*

You're given a string.

If the amount of characters in that string is even, return the middle 2 characters.
If it's odd, return the middle character.

*/

function returnMiddleChar(str) {

	if (str.length % 2 !== 0) {

		return str[Math.round(str.length / 2) + 1]

	} else {

		return str[str.length / 2 - 1] + str[str.length / 2]

	}

}

console.log(returnMiddleChar('Kirill'))
// outputs 
console.log(returnMiddleChar('Jalil'))
// outputs 