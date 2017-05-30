/*

Do you know the array method .forEach ?

var numbers = [1,2,3,4,5]

numbers.forEach(function(element,index) {
	console.log(element, index)
})

Outputs:

1 0
2 1
3 2
4 3
5 4

With the array method, the array is already provided.
The method takes one argument, the function to be executed for each element.

Write a function forEach that does the exact same thing as the forEach method.

*/

var numbers = [1,2,3,4,5]

function forEach(array, func) {

}

console.log(forEach(numbers, function(element, index) {console.log(element, index)}))

/*

Outputs

1 0
2 1
3 2
4 3
5 4

*/