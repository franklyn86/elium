var nextPlayer = false;



function play(box){

	var playerTurn = document.getElementById('playerTurn');	


	if (nextPlayer == true) {
		box.innerHTML = 'O';
		playerTurn.innerHTML = "X's turn";
	} else {
		box.innerHTML = 'X';	
		playerTurn.innerHTML = "O's turn";
	}

	nextPlayer = !nextPlayer;



}