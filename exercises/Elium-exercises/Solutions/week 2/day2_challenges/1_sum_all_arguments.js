/*

Challenge:

No matter what how many arguments you pass in, sum all the arguments

Hints:

-use the spread operator
-look into the array reduce method

*/

console.log(sum(5,5,5,5,10,10))
//outputs 40
console.log(sum(10,10))
//outputs 20
console.log(sum(5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,10,10,10,10,10))
//outputs 150

function sum(args) {
	
	var argumentsArray = [...arguments]
		
	return argumentsArray.reduce(function(a,b) {return a+b})

}
