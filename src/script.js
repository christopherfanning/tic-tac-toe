let cells = document.querySelectorAll('.cell');
let moves = [
  [],
  []
];

let currentPlayer = 0;
let color = "orange";
const playerColor = document.querySelector('.color');

function togglePlayer() {
  if (currentPlayer === 0) {
    currentPlayer = 1;
    color = "green";
    playerColor.style.backgroundColor = "green";
  } else {
    currentPlayer = 0;
    color = "orange";
    playerColor.style.backgroundColor = "orange";
  }
}

function handleClick(cell, cellClicked) {
  moves[currentPlayer].push(cellClicked);
  cell.style.backgroundColor = color;
  checkWinningCondition();
  togglePlayer();
  cell.style.pointerEvents = "none";
}

function freezeGameBoard() {
  let boxes = document.querySelectorAll('.cell');

  boxes.forEach(cell => {

    cell.style.pointerEvents = "none";
  });
}

function checkWinningCondition() {
  // Check the movesArray for current player for possible winning conditions. 
  let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]


  ];

  function isWinPresent(moves, winCondition) {
    return winCondition.every(vals => {
      return moves.includes(vals);
    });
  }

  winningConditions.forEach(arr => {
    if (isWinPresent(moves[currentPlayer], arr)) {
      let winningColor = document.querySelector('.color').style.backgroundColor;
      document.querySelector('.winStatus').innerHTML = '<h1>Player Wins!</h1>';
      document.querySelector('.winningColor').style.backgroundColor = winningColor;
      freezeGameBoard();
      // console.log(`!!!!!!!!!!!!!!!!!!!Player ${currentPlayer} wins!!!!!!!!!!!!!!!!!!!!!!!!!`);
    } else if (moves[1].length >= 5) {

      // TODO DRAW Condition!!!
      document.querySelector('.winStatus').innerHTML = "<h1>Cat's Game! Draw.</h1>";

    }
  });
}


cells.forEach((cell, cellNumber) => {
  cell.addEventListener('click', () => {
    handleClick(cell, cellNumber);
  });
});
