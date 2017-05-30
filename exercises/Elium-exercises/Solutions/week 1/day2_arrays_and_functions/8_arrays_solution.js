/*

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

console.log(array.length)

for (var i = 0; i < array.length; i++) {
	console.log(array[i])
}

console.log(array.indexOf('Anja'))

for (var j = 0; j < array.length; j++) {
	if (array[j] === 'Anja') console.log(j)
}