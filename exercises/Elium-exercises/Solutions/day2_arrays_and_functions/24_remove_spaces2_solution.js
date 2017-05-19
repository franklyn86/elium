/*

Once again, Avery is at it, make sure there is proper spacing between her words.

*/

function removeAllSpacesButOne(str) {

  var stringArray = str.split('')

  var newStringArray = []

  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i] !== ' ' && stringArray[i + 1] === ' ') {
      newStringArray.push(stringArray[i])
      newStringArray.push(stringArray[i + 1])
    } if (stringArray[i] !== ' ' && stringArray[i + 1] !== ' ') {
      newStringArray.push(stringArray[i])
    }
  }

  return newStringArray.join('')
}

console.log(removeAllSpacesButOne('Hi      Im  Avery'))
// outputs Hi Im Avery
console.log(removeAllSpacesButOne('Javascript          is    sexy'))
// outputs Javascript is sexy
