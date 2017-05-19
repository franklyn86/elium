/*

Avery has some stuttering issues. She leaves long awkward pauses between words.

Remove all spaces from her sentences.

*/

function removeSpaces(str) {

  return str.split(' ').join('')

}

console.log(removeSpaces('Hi      Im  Avery'))
console.log(removeSpaces('Javascript          is    sexy'))
