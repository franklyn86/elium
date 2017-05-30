var nextPlayer = false;

//var playState = [][];

var boardState = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
];


function play(box){

	//var playerTurn = document.getElementById('playerTurn');	

	var row = box.getAttribute('row');
	var column = box.getAttribute('column');

	if(boardState[row][column] == null) {
		if (nextPlayer == true) {
		//box.innerHTML = 'O';
		boardState[row][column] = 'O';
		playerTurn.innerHTML = "X's turn";
	} else {
		//box.innerHTML = 'X';	
		boardState[row][column] = 'X';
		playerTurn.innerHTML = "O's turn";
	}

		nextPlayer = !nextPlayer;
		populateBoard(row, column);
	} else {
		alert('The box is already filled!')
	}
}

function verifyWinner(x, y) {

	// Verify horizontal row

	// Verify vertical row 

	// Verify diagonal row
	
}

function createBoard()
{
	// Find a <table> element with id="myTable":
	var table = document.getElementById("gameBoard");

	for (var i = 0; i < 3; i++) {
		// Create an empty <tr> element and add it to the 1st position of the table:
		var row = table.insertRow(i);
		for (var j = 0; j < 3; j++) {
			// Cqreate the cell.
			var cell = row.insertCell(j);
			// Add row and cell attributes
			cell.setAttribute('class', 'cell');
			cell.setAttribute('row', i);
			cell.setAttribute('column', j);
			cell.setAttribute('onclick', 'play(this)');
			// Set the board state.
			if (boardState[i][j] != null){
				cell.innerHTML = boardState[i][j];
			}
		}
	}
}

function populateBoard(row, column){
	// Find a <table> element with id="myTable":
	var table = document.getElementById("gameBoard");

	if (boardState[row][column] != null){
		table.children[0].children[row].children[column].innerHTML = boardState[row][column];
	}

	if(boardState[row][column] == 'X')
	{
		table.children[0].children[row].children[column].setAttribute('class', 'xCell');
	} else {
		table.children[0].children[row].children[column].setAttribute('class', 'oCell');
	}


}

/*function populateBoard_v1(){
	// Find a <table> element with id="myTable":
	var table = document.getElementById("gameBoard");

	for (var i = 0; i < table.children[0].children[0].length; i++) {
		for (var j = 0; j < table.children[0].children[i].children.length; j++) {
			// Set the board state.
			if (boardState[i][j] != null){
				table.children[0].children[i].children[j].innerHTML = boardState[i][j];
			}
		}
	}
}*/



var body = document.getElementsByTagName("body")[0];
body.addEventListener("load", createBoard(), false);
