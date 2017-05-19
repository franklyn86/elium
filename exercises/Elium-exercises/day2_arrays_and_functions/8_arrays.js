/*

Print out the fifth student in the array.

Find out how many students there are in the array. 

Then print out the name of every student in the console.

Find out and print in the console at which position in the array 'Anja' is.

*/

var array = [
'Adrian', 
'Yasir', 
'Simas', 
'Avery', 
'Aryanto', 
'Cathrin', 
'Kirill', 
'Rien', 
'Ola', 
'Gabriel', 
'Prajjwal', 
'Franklyn', 
'Nisha', 
'Anja', 
'Jarrod'
]

console.log(array[4])
console.log(array.length)


for (var i = 0; i < array.length; i++) {
	console.log(array[i])
}



for (var i = 0; i < array.length; i++) {
	if (array[i] === 'Anja') {
		console.log(array[i] + ' is in position ' + i)
	} else {
		console.log(array[i])
	}
}






