let cells = document.querySelectorAll('.cell');
let moves = [
  [],
  []
];

let currentPlayer = 0;
// let p1 = "orange";
// let p2 = "green";
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

function handleClick(cell, index) {
  moves[currentPlayer].push(index);
  console.log("you clicked" + index);
  cell.style.backgroundColor = color;
  togglePlayer();
  cell.style.pointerEvents = "none";
  console.log(moves);
  checkWinningCondition();
}


function checkWinningCondition() {
  // Check the array for possible winning conditions. 
  let winningConditions = [

    [0, 3, 6],
    [1, 4, 8],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // or use an object instead of an array.
}

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    handleClick(cell, index);
  });
});
