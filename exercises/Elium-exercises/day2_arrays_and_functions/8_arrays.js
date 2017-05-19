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


console.log("The fifth student in the array is : " + array[4]);

console.log("\nThera are " + array.length + " students");

console.log("\nStudents\n")	;
for (var i = 0; i < array.length; i++) {
	console.log(array[i]);
}


console.log("\nPosition of Anja in the array : " + (indexPosition('Anja') + 1));



function indexPosition (value){
	var position;
	for (var i = 0; i < array.length; i++) {
		if (array[i] === value) { position = i; }	
	}
	return position;
}



