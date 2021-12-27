let cells = document.querySelectorAll('.cell');
let moves = [
  [],
  []
];

let currentPlayer = 0;
let color = "orange";
const playerColor = document.querySelector('.color');

const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', resetBoard);

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
  document.querySelector('.gameStatus').style.display = 'none';
  document.querySelector('.winStatusSection').style.display = 'inline-block';
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
    } else if (moves[0].length >= 5) {
      document.querySelector('.winStatus').innerHTML = "<h1>Cat's Game! Draw.</h1>";
    }
  });
}


function resetBoard() {
  console.log('you clicked reset.');
  moves = [
    [],
    []
  ];
  currentPlayer = 0;
  color = 'orange';
  playerColor.style.backgroundColor = color;
  cells.forEach(cell => {
    cell.style.backgroundColor = "cornflowerblue";
    cell.style.pointerEvents = 'auto';
  });

  document.querySelector('.gameStatus').style.display = 'inline-block';
  document.querySelector('.winStatusSection').style.display = 'none';

}



let gameboard = new Gameboard();

// const bouncyCircle = new mojs.Shape({
//   parent: '#bouncyCircle',
//   shape: 'circle',
//   fill: {
//     '#F64040': '#FC46AD'
//   },
//   radius: {
//     20: 80
//   },
//   duration: 2000,
//   isYoyo: true,
//   isShowStart: true,
//   easing: 'elastic.inout',
//   repeat: 1,
// });

// bouncyCircle.play();

gameboard.build();
// const cross = new mojs.Shape({
//   shape: 'cross',
//   radius: 20,
//   radiusY: 30,
//   top: pos.row1,
//   left: pos.col2,
//   stroke: color2, //no fill for this one
//   isShowStart: true,
//   y: -25
// });
