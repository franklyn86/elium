/*

Find the first non-consecutive number in the array.
If there are none, return null.

*/

function consecutive(arr) {

  for (var i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null

}


console.log(consecutive([1,2,3,4,5,8,9,10])) // outputs 8
console.log(consecutive([1,2,3])) // outputs null
console.log(consecutive([10,11,13,14])) // outputs 9
