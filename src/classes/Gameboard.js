class Gameboard {

  constructor(player1, player2) {
    const resetButton = document.querySelector('.resetButton');
    resetButton.addEventListener('click', this.resetBoard);

    this.winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

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
        cell.className = "cell col justify-content-center align-items-center";
        row.appendChild(cell);
      }
      gameboard.appendChild(row);
    }

    main.appendChild(gameboard);
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
    cell.style.backgroundColor = color;
    // cell.id = "bouncyCircle";
    cell.innerText = playerMark;
    cell.classList.add = "animate";
    this.checkWinningCondition();
    togglePlayer();
    cell.style.pointerEvents = "none";
    // bouncyCircle.play();
    // gameboard.checkAnimations();
  }

  resetBoard() {
    console.log('you clicked reset.');
    moves = [
      [],
      []
    ];
    currentPlayer = 0;
    color = 'orange';
    playerMark = 'X';
    playerColor.style.backgroundColor = color;
    let cells = document.querySelectorAll('.cell');
    gameboard.destroyBoard();
    gameboard.build();
    document.querySelector('.winStatusSection').style.display = 'none';
    document.querySelector('.gameStatus').style.display = 'block';
    // this.build();
  }

  destroyBoard() {
    // Remove existing gameboard.
    function removeAllChildNodes(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
    console.log('Destroy gameboard.');
    let removeMe = document.querySelector('.gameboard');
    console.log('gameboard destroyed.');
    removeAllChildNodes(removeMe);
    removeMe.remove();
  }

  placePiece() {

    console.log("game piece placed.");
  }

  checkWinningCondition() {
    console.log('Searching for winning conditions. ');

    function isWinPresent(moves, winCondition) {
      return winCondition.every(vals => {
        return moves.includes(vals);
      });
    }

    this.winningConditions.forEach(arr => {
      if (isWinPresent(moves[currentPlayer], arr)) {
        let winningColor = document.querySelector('.color').style.backgroundColor;
        document.querySelector('.winStatus').innerHTML = '<h1>Player Wins!</h1>';
        document.querySelector('.winningColor').style.backgroundColor = winningColor;
        freezeGameBoard();
      } else if (moves[0].length >= 5) {
        document.querySelector('.gameStatus').style.display = "none";
        document.querySelector('.winStatusSection').style.display = 'block';
        document.querySelector('.winStatus').innerHTML = "<h1>Cat's Game! Draw.</h1>";
      }
    });

    function freezeGameBoard() {
      let boxes = document.querySelectorAll('.cell');
      boxes.forEach(cell => {
        cell.style.pointerEvents = "none";
      });
      document.querySelector('.gameStatus').style.display = 'none';
      document.querySelector('.winStatusSection').style.display = 'inline-block';
    }

  }



  checkAnimations() {
    const bouncyCircle = new mojs.Shape({
      parent: '.cell',
      shape: 'circle',
      fill: {
        '#F64040': '#FC46AD'
      },
      radius: {
        20: 80
      },
      duration: 2000,
      isYoyo: true,
      isShowStart: true,
      easing: 'elastic.inout',
      repeat: 1,
    });

    bouncyCircle.play();
  }

}

console.log('Gameboard imported!');
