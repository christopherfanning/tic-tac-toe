// Initialize Player conditions. 
let moves = [
  [],
  []
];

let currentPlayer = 0;
let color = "orange";
const playerColor = document.querySelector('.color');
let playerMark = "X";

function togglePlayer() {
  // This toggles the player.
  if (currentPlayer === 0) {
    currentPlayer = 1;
    color = "green";
    playerColor.style.backgroundColor = "green";
    playerMark = "O";

  } else {
    currentPlayer = 0;
    color = "orange";
    playerColor.style.backgroundColor = "orange";
    playerMark = 'X';
  }
}


// Initialize the gameboard and start the game. 
let gameboard = new Gameboard();
gameboard.build();
