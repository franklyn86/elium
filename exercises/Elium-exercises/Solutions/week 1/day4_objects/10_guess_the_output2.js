/*

Guess the output

*/

var foo = {unique_prop: 1}, bar = {unique_prop: 2}, object = {};
object[foo] = 'value';
console.log(object[bar]);
// outputs value

/*

This happens because properties of objects have to be strings.
Javascript forces automatic type conversion.

{unique_prop: 1} is translated into the string['object Object'].
Same goes for {unique_prop: 2}. 

Thus object[foo] is the same as object[bar] or 
object['['object Object']'] is the same as object['['object Object']']

*/
