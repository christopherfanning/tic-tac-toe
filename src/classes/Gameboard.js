class Gameboard {

  constructor(arg) {
    console.log(arg);
  }

  build() {
    // Builds new gameboard if one doesn't exist. 
    console.log('gameboard built.');
    let div = document.createElement('div');
    let main = document.querySelector('main');

    div.className = 'cell';
    main.appendChild(div);

    // return box;


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
