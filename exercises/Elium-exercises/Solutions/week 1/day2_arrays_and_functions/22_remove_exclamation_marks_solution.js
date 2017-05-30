/*

Aryanto keeps swearing.
We're going to make his sentences a little less harmful by removing
every exclamation mark and converting all characters to lowercase.

*/

function makeItGentler(str) {

  var splittedStringArray = str.split('')
  var newArray = []

  for (var i = 0; i < splittedStringArray.length; i++) {
    if (splittedStringArray[i] !== '!') newArray.push(splittedStringArray[i])
  }

  return newArray.join('').toLowerCase()

}



/*
ES6 syntax and map method
-------------------------

makeItGentler = (str) => {

  var splittedStringArray = str.split('')

  return splittedStringArray.map( char => {
    return (char === '!') ? '' : char
  }).join('').toLowerCase()

}

ES6 syntax and regular expressions
----------------------------------

makeItGentler = (str) => {
  return newStr =  str.replace(/!/gi, '').toLowerCase()
}
*/


console.log(makeItGentler('FUCK I HATE THIS SHIT!!!!'))
// outputs fuck i hate this shit
console.log(makeItGentler('I\'M GOING TO KILL MYSELF!!!!!!!!!'))
// outputs i'm going to kill myself
