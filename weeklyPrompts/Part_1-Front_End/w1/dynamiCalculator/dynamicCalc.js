
// Operation objects: An operation object is an object containing a function.

	// Properties:
	//Name: a string that describes what the operation does.
	//Args: the number of arguments this operation takes.

	// Methods:
	// Operation: a function that does the math with, it will contain:
	// args: the arguments that the function takes. It's variable, up to you.
	// return: the result of the math you made it do.

	// Behavior: it executes the formula indicated in the 'name' property.	


	var templateOperation = { 	
		name : '',
		args : 0000,	
		operation : function operation(a, b) {
			var result = 0000;
		// maths
		return result;
	}
};

var addition = { 	
	name : 'addition',
	args : 2,	
	operation : function operation(a, b) {
		var result = 0000;
		// maths
		result = a + b ;
		return result;
	}
};

var addition3 = { 	
	name : 'addition',
	args : 3,	
	operation : function operation(a, b, c) {
		var result = 0000;
		// maths
		result = a + b + c ;
		return result;
	}
};

var additionBis = { 	
	name : 'addition',

	operation : function() {
		var result = 0000;
		var numbers = arguments[0];
		// maths
		for (var i = 0; i < numbers.length; i++) {
			result += numbers[i];
		}
		return result;
	}
};

var subtraction = { 	
	name : 'subtraction',
	args : 2,	
	operation : function operation(a, b) {
		var result = 0000;
		// maths
		result = a - b ;
		return result;
	}
};

var multipliation = { 	
	name : 'multipliation',
	args : 2,	
	operation : function operation(a, b) {
		var result = 0000;
		// maths
		result = a * b ;
		return result;
	}
};

var division = { 	
	name : 'division',
	args : 2,	
	operation : function operation(a, b) {
		var result = [];
		// maths

		// subtract lesser number from bigger until it's 
		// gone.
		// remember the remainder.

		// check if bigger number is too small
		// substract lesser from what's left
		// remember the remainder

		// check if bigger number is less than smaller number
		// if it isn't : substract lesser from wht's left
		// else : remember the remainder


		var reminder;
		var divisor=0;

		while( a > b)
		{
			a = a - b;
			divisor++;
		}
		reminder = a;

		result.push(divisor);
		result.push(reminder);

		return result;
	}
};

// dynamiCalculator function: the function that will be called to operate the objects.

// Arguments:
	// op: an operation object.
	// a, b, c: Numbers to be operated on. Each operation object will use as many of them as it needs.
// Return values:
	// a number: The result of sending the arguments through op.operation().

// Behavior: dynamicCalculator will pass (a), (a,b), or (a,b,c) into ‘op.operation’’ depending on the value of ‘op.args’ and return the value of the function call.
function dynamiCalculator(op, a, b, c){
	
	var result = 0000;

	/*
	It's better to use if statements.
	switch(op.args)
	{
		case 1 : result = op.operation(a)
		break;
		case 2 : result = op.operation(a, b)
		break;
		case 3 : result = op.operation(a, b, c)
		break;
	}  	
	*/

	if (op.arguments == 1) {
		result = op.operation(a);
	} else { if (op.arguments == 2) {
		result = result = op.operation(a, b);
	} else {
		result = op.operation(a, b, c);
	}}

	return result;
}

// Addition
console.log("dynamiCalculator(addition, 1, 2) => " + dynamiCalculator(addition, 1, 2));
console.log("dynamiCalculator(addition3, 1, 2, 3) => " + dynamiCalculator(addition3, 1, 2));
console.log("dynamiCalculator(addition3, 1, 2, 3) => " + dynamiCalculator(addition3, 1, 2, 3));


console.log("dynamiCalculator(subtraction, 5, 8) => " + dynamiCalculator(subtraction, 5, 8));
console.log("dynamiCalculator(multipliation, 5, 8) => " + dynamiCalculator(multipliation, 3, 5));
console.log("dynamiCalculator(division, 20, 3) => " + dynamiCalculator(division, 20, 3));


// Challenge with builtin javascript 'arguments'
console.log("Chllange with builtin javascript arguments => " + dynamiCalculatorChallenge(addition, 1, 2));
console.log(additionBis.operation(1,2,7,8));

// Add operations to the calculator.
calculatorArray.addOperation(additionBis);
console.log("calculatorArray =>" + calculatorArray.calculate('addition', [2, 3]));

calculatorObject.addOperation(additionBis);
console.log('calculatorObject => ' + calculatorObject.calculate('addition', [2, 3]));


if(calculatorArray["operationsss"] !== undefined)
{
	console.log("test");
}




// Challenge


// Remove the arguments 'a, b, c' from your calculator. Use the builtin javascript 'arguments' 
// feature to dynamically access any number of arguments.

// Make your calculator a method in a new object and give that object a property called 'operations' and is an array.
// Next give the calculator a method that adds new operations objects to the ‘dynamicCalculator.operations’ array.
// Finally create a method that takes the name of an operation and numbers. It will find the operation by that name and execute it with the numbers.


// Remove the arguments 'a, b, c' from your calculator. Use the builtin javascript 'arguments' 
function dynamiCalculatorChallenge(op){
	
	var result = 0000;

	if (op.args == 1) {
		result = op.operation(arguments[1]);
	} else { if (op.args == 2) {
		result = op.operation(arguments[1], arguments[2]);
	} else {
		result = op.operation(arguments[1], arguments[2], arguments[3]);
	}}

	return result;	
}

var calculatorArray = {	

	operations : [],
	addOperation : function(op){
		this.operations.push(op);
	},

	calculate : function(operationName, numbers){

		console.log(Array.prototype.slice.call(arguments, 1));

		var result = 0000;
		var operation;

		for (var i = 0; i < this.operations.length; i++) {
			if(this.operations[i].name === operationName) operation = this.operations[i];
		}

		if(operation != null)
		{
			//result = operation.operation.apply(Array.prototype.slice.call(arguments, 1));
			result = operation.operation(numbers);
		}

		return result;
	}
};

var calculatorObject = {
	operations : {},

	addOperation : function(op){
		if (op.name == 'addition') {	
			this.operations[op.name] = op;
		}
	},

	calculate : function(operationName, numbers)	{

		var result = 0000;
		
		if(this.operations[operationName] != undefined)
		{
			result = this.operations[operationName].operation(numbers);
		}

		return result;
	}
}

