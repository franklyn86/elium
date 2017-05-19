/*

Print out every key of all key-value pairs to the console.

*/

var object = {name: 'Cathrin', sex: 'female', age: 25, country: 'Germany'}

for (var key in object) {
	console.log(key)
}

/*
output:

name
sex
age
country

*/

/*
var key = Object.keys(object)

for (var i = 0; i < key.length; i++) {
	console.log(key[i])
}
*/

