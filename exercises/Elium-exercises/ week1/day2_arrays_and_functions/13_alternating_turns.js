/*
Yasir and Simas are playing a complex game.

When Yasir loses his turn, it's Simas's turn.
When Yasir wins, he keeps on playing

Write a simple function that figures out whose turn it is, based on 2 arguments,
the player name and wether he's won or lost this turn.
*/

function determineWhosNext(player, won) {
	if (player === "Yasir" && won) return "Simas";
	else return "Yasir";
}

console.log(determineWhosNext('Yasir', false)) // Outputs "Simas"
console.log(determineWhosNext('Yasir', true)) // Outputs "Yasir"
