/*

Print out every key of all key-value pairs to the console.

*/

var object = {name: 'Cathrin', sex: 'female', age: 25, country: 'Germany'}

for (var key in object) {
  console.log(key)
}

/*
Outputs:

name
sex
age
country

*/
