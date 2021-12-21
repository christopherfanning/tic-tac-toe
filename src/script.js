let cells = document.querySelectorAll('.cell');

let currentPlayer = 0;
// let p1 = "orange";
// let p2 = "green";
let color = "orange";

function togglePlayer() {
  if (currentPlayer === 0) {
    currentPlayer = 1;
    color = "green";
  } else {
    currentPlayer = 0;
    color = "orange";
  }
}


cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    console.log("you clicked" + index);
    cell.style.backgroundColor = color;
    togglePlayer();
  });
});
