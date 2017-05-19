/*
Yasir and Simas are playing a complex game.

When Yasir loses his turn, it's Simas's turn.
When Yasir wins, he keeps on playing

Write a simple function that figures out whose turn it is, based on 2 arguments,
the player name and wether he's won or lost this turn.
*/

function determineWhosNext(player, won) {

  if (won) return player
  if (player === 'Yasir') return 'Simas'
  return 'Yasir'

}

/*
Ternary operator:

function determineWhosNext(player, won) {
  return won? player : player === 'Yasir' ? 'Simas' : 'Yasir'
}
*/

console.log(determineWhosNext('Yasir', false)) // Outputs "Simas"
console.log(determineWhosNext('Yasir', true)) // Outputs "Yasir"
