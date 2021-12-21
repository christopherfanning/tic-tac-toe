let cells = document.querySelectorAll('.cell');

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    console.log("you clicked" + index);
  });
});
