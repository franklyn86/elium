
var schemaCalc = {

	savedOperations : {
		operationOne : {},
		operationTwo : {}
	},
	
	schema: {
		name: {
			type: 'string', 
			fallback: 'string'
		}, 
		args: {
			type: 'number', 
			fallback: 0000
		}, 
		operation: {
			type: 'function', 
			fallback: function() {}
		}
	},
	
	addTo : function(newOp){
		var message = '';

		if (typeof newOp.name != 'string') {	
			message += 'name is not right type';		

		} else if (typeof newOp.args != 'number') {
			message += ' args is not right type';

		} else if (typeof newOp.operation != 'function') {
			message += ' operation is not right type';
		} else {
			this.savedOperations[newOp.name] = newOp;
			message = 'object added successfully';	
		}

		return message;
	},

	doMath : function(operationName, a, b, c, d) {
		var returnValues = [];
		var message = '';
		var result = 0000;

		// code
		if(this.savedOperations[operationName] != undefined){
			result = this.savedOperations[operationName].operation(a,b);
			message = 'operation executed';
		} else {
			result = undefined;
			message = "operation don't exdcuted";
		}

		returnValues.push(message);
		returnValues.push(result);

		return returnValues;
	},

	changeSchema : function(newSchema){
		var message = 'schema changed';

		// Change schema
		this.schema = newSchema;

		return message;
	}
	
};


console.log('test');

//schemaCalc.changeSchema({});






