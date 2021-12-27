class Gameboard {

  constructor(arg) {
    console.log(arg);
  }

  build() {
    console.log('gameboard is building.');
    let main = document.querySelector('main');
    let gameboard = document.createElement('div');
    gameboard.className = "gameboard container justify-content-center align-items-center";
    for (let i = 0; i < 3; i++) {
      let row = document.createElement('div');
      row.className = 'row justify-content-center';
      for (let j = 0; j < 3; j++) {
        let cell = document.createElement('div');
        cell.className = "cell col";
        row.appendChild(cell);
      }
      main.appendChild(row);
    }

    this.makeBoardClickable();
  }

  makeBoardClickable() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell, cellNumber) => {
      cell.addEventListener('click', () => {
        this.handleClick(cell, cellNumber);
      });
    });
  }

  handleClick(cell, cellClicked) {
    moves[currentPlayer].push(cellClicked);
    console.log('cell clicked');
    cell.style.backgroundColor = color;
    checkWinningCondition();
    togglePlayer();
    cell.style.pointerEvents = "none";
  }

  destroy() {
    // Remove existing gameboard.
    console.log('gameboard destroyed.');
  }

  placePiece() {

    console.log("game piece placed.");
  }

  checkWinningCondition() {
    console.log('Searching for winning conditions. ');
  }

}

console.log('Gameboard imported!');
