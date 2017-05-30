/*

Print out every value of all key-value pairs to the console.

*/

var object = {name: 'Rien', sex: 'male', age: 28, country: 'Belgium'}

for (var key in object) {
  console.log(object[key])
}

/*
Output:

Rien
male
28
Belgium
*/
