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

  var array = []

  for (var i = 0; i < someDevelopers.length; i++) {
    if (someDevelopers[i].continent === 'Europe' && someDevelopers[i].language === 'Javascript') {
      array.push('Match at position:' + i)
    }
  }

  return array.length

}

console.log(countJavascriptDevelopers(someDevelopers))
// outputs 2
