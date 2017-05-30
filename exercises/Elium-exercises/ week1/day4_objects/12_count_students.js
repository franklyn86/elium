/*

Find out how many Javascript developers there are in europe.

*/

var someDevelopers = [
{name: 'Anja', country: 'Germany', continent: 'Europe', language: 'Javascript'},
{name: 'Avery', country: 'USA', continent: 'North America', language: 'HTML'},
{name: 'Gabriel', country: 'Netherlands', continent: 'Europe', language: 'CSS'},
{name: 'Jarrod', country: 'New Zealand', continent: 'Oceania', language: 'Javascript'},
{name: 'Kirill', country: 'South Africa', continent: 'Africa', language: 'Javascript'},
{name: 'Nisha', country: 'UK', continent: 'Europe', language: 'Javascript'},
{name: 'Rien', country: 'Belgium' , continent: 'Europe', language: 'HTML'}
]

function countJavascriptDevelopers(object) {

	var counter = 0000;

	for (var i = 0; i < object.length; i++) {
		if (object[i].continent.toLowerCase() == 'europe' 
			&& object[i].language.toLowerCase() == 'javascript') {
			counter++;
		}	
	}

	return counter;	
}

console.log(countJavascriptDevelopers(someDevelopers))
// outputs 2
