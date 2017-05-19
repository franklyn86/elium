var scheme = {
	name : {
		type : 'string',
		fallback : 'ackermann'		
	},
	numArgs: {
		type : 'number',
		fallback : 2
	},
	operation: {
		type : 'function',
		fallback : function(){ return '1337FAIL'};
	}
};

function validator(op, schema){
	var result = [];
	var successMessage = '';
	var opObject = opCopier(op);
}


function opCopier(){

}

