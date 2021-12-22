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
  cell.style.backgroundColor = color;
  checkWinningCondition();
  togglePlayer();
  cell.style.pointerEvents = "none";
  console.log(moves);
}


function checkWinningCondition() {
  // Check the movesArray for current player for possible winning conditions. 
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

  // let checker = (arr, target) => target.every(v => arr.includes(v));
  let checker = moves[currentPlayer].every(v => {
    return winningConditions.forEach(arr => {
      return arr.includes(v);
      // console.log(`player ${currentPlayer} wins!!`);
    });
  });

  let cwc = winningConditions.forEach(condition => {

    return condition.every(arr => {
      return moves[currentPlayer].includes(arr);
    });
  });

  winningConditions.forEach(arr => {
    if (moves[currentPlayer].includes(arr.values())) {
      console.log("yay!");
    }

  });
  console.log(checker);
  console.log(cwc);

  if (checker == true) {

    console.log(`player ${currentPlayer} wins!!`);
  }
  // moves[currentPlayer].forEach(move => {
  //   console.log(move);

  // });
}



cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    handleClick(cell, index);
  });
});
