/*
Let's play rock paper scissors!
Determine which player won.
*/


function findWinner(player1pick, player2pick) {
	var won = false;
	
	if (player1pick === "scissors" && player2pick === "paper") won = true;
	else
		if(player1pick === "paper" && player2pick == "rock") won = true;
	else
		if(player1pick === "rock" && player2pick == "scissors") won = true;
	
	
	return won;


	/*if((player1pick === "scissors" && player2pick === "paper")||)
		result = "Player 1 won!";
	else{
		if(player1pick === "paper" && player2pick == "rock")
		result = "Player 1 won!";
}	*/
}


function rockPaperScissors(player1pick, player2pick) {	

	if(findWinner(player1pick, player2pick)) return "Player 1 won!";
	else if(findWinner(player1pick, player2pick)) "Player 2 won!";
	else return "Play again!";
}

console.log(rockPaperScissors('scissors', 'paper'))
// outputs Player 1 won!
console.log(rockPaperScissors('rock', 'paper'))
// outputs Player 2 won!
console.log(rockPaperScissors('rock', 'scissors'))
// outputs Player 1 won!
console.log(rockPaperScissors('rock', 'rock'))
// outputs Draw!
