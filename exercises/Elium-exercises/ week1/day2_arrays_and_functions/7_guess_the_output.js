/*

Replace the '??' with what you think the outcome will be.

Don't cheat and run the file before you have everything filled out.

*/
console.log('------Unary operators------')
console.log('------1------')
console.log(typeof 4.5)
// outputs ?? => float or double
// number
console.log('------2------')
console.log(typeof 'Gabriel')
// outputs ?? => string


console.log('------Boolean values------')
console.log('------3------')
console.log(3 > 2)
// outputs ?? => true
console.log('------4------')
console.log('Avery' < 'Yasir') // Copaires the ascii code of the first letter.
// outputs ?? // true
console.log('------5------')
console.log('Yasir' < 'avery') // Copaires the ascii code of the first letter.
// ouputs ?? // false 
// true
console.log('------6------')
console.log('Adrian' === 'Avery') // => Compare the content and the type
// outputs ?? // true


console.log('------Logical operators------')
console.log('------7------')
console.log(4 === 4)
// outputs ?? => true
console.log('------8------')
console.log(4 == '4')
// outputs ?? => error
console.log('------9-----')
console.log(true && false)
// outputs ?? => false
console.log('------10-----')
console.log(true && true)
// outputs ?? => true
console.log('------11-----')
console.log(false || true)
// outputs ?? => true
console.log('------12-----')
console.log(false || false)
// outputs ?? => false
console.log('------13-----')
console.log(true ? 1 : 2)
// outputs ?? => 1
console.log('------14-----')
console.log(false ? 1 : 2)
// outputs ?? => 2


console.log('------Automatic type conversion------')
console.log('------15-----')
console.log('5' - 1)
// outputs ?? => 4
console.log('------16-----')
console.log('5' + 1)
// outputs ?? => 51
console.log('------17-----')
console.log('five' * 2)
// outputs ?? => error
// NaN

console.log('------Short circuiting of logical operators------')
console.log('------18-----')
console.log(null || 'Cathrin')
// outputs ?? => Catrhrin
console.log('------19-----')
console.log('Rien' || 'Nisha')
// outputs ?? => Rien
console.log('------20-----')
console.log('Anja' || 'Jarrod')
// outputs ?? => Anja
