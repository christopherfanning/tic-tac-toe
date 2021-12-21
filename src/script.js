let cells = document.querySelectorAll('.cell');

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



cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    console.log("you clicked" + index);
    cell.style.backgroundColor = color;
    togglePlayer();
  });
});
