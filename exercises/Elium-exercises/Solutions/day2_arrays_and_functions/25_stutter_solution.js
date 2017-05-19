/*

Stuttttter time!

*/

function stutter(str) {

	var newString = ''

	for (var i = 0; i < str.length; i++) {

		for (var j = 0; j <= i; j++) {

			newString += str[i]
			

		}

		newString += '-'

	}

	var splittedString = newString.split('-')
	var newStringArray = []

	splittedString.forEach( (string, index) =>  {
		if (string !== '') newStringArray.push(string)
	})

	return newStringArray.join('-')

}



console.log(stutter('Hello'))
// outputs H-ee-lll-llll-ooooo
console.log(stutter('Javascript'))
// outputs J-aa-vvv-aaaa-sssss-cccccc-rrrrrrr-iiiiiiii-ppppppppp-tttttttttt