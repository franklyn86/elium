/*

Change the value of the first key to 'first'.
Do the same with the second key. The value of the second key should be 'second'

*/

var object = {first: 1, second: 2}

object.first = 'first'
object['second'] = 'second'

console.log(object)
// outputs { first: 'first', second: 'second' }
