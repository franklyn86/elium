/*

If the variable 'key' is actually a valid key of the object,
print out 'true'. If not print out 'false'.

*/

var key = 'name'
var object = {name: 'Kirill', age: 27, country: 'South-Africa'}


if(object[key] != undefined){
	console.log('true');
} else {
	console.log('false');
}