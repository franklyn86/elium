/*

Write a function modifyObject that takes 3 arguments and returns a new object.

Arguments:
1)  An object that we would like to add to
2)  An object that dictates what needs to be added
3)  A boolean value that specifies whether the values of object1 should be modified or not.
    If true, the values of object1 should be overwritten by the values of object2
    If false, the values of object1 cannot be modified.

*/

var object1 = {a: 1, b: 2, c: 3}
var object2 = {b: 'second', c: 'third', d: 'fourth'}

function modifyObject(object1, object2, boolean) {

}

console.log(modifyObject(object1, object2, true))
// outputs { a: 1, b: 'second', c: 'third', d: 'fourth' }
console.log(modifyObject(object1, object2, false))
// outputs { a: 1, b: 2, c: 3, d: 'fourth' }
