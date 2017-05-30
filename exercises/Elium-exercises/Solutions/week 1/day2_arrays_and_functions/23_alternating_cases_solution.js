/*

Cathrin lives in opposite land.
Everything she writes comes out wrong.

Write a function that takes a string and outputs it the way Cathrin would
write it.

*/

function alternating(string) {

  var stringArray = string.split('')
  var switchedCasesArray = []

  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === stringArray[i].toLowerCase()) {
      switchedCasesArray[i] = stringArray[i].toUpperCase()
    }
    else {
      switchedCasesArray[i] = stringArray[i].toLowerCase()
    }
  }

  return switchedCasesArray.join('')

}

console.log(alternating('I am Prajjwal and I do everything wrong'))
// outputs i AM pRAJJWAL AND i DO EVERYTHING WRONG
