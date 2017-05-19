/*

Print out every value of all key-value pairs to the console.

*/

var object = {name: 'Rien', sex: 'male', age: 28, country: 'Belgium'}


/*
output:

Rien
male
28
Belgium

*/

for(key in object)
{
	console.log(object[key]);
}
