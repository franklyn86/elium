//main object that contains 5 objects
var schemaCalc = {
    operations: {
      sum:
    },
    schema: {},
    
      
      
      
    addTo: function(newOp) {
        var message = 'called addto'; 

        var check = false;
        if (true) {
            check = true;
        }
        if (check == true) {
            // add newOperation to 'operations'
            this.operations[newOp.name] = newOp;

        }
      
        return message;
    },
    operate: function (operationName, a, b, c, d) {
        var message = 'called operate';
        var result = 000;
        // code
        return [message, result];
    },
    
    changeSchema: function (newSchema) {
        //returns succes/failure message
        var message = 'changed schema';
        // takes a new schema and replaces object's schema property
        this.schema = newSchema;
        return message
    }
}

  
  
function testCase(cal) {
  var operation1 ={name: "one"};
  var operation2 = {name: "two"};
  var newSchema = {};
  cal.addTo(operation1);
  cal.operate("one", 4, 5);
  cal.changeSchema(newSchema);
}

testCase(schema)Calc
  



//returns succes/failure message