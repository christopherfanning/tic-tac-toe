class Gameboard {

  constructor() {

  }

  build() {
    // Builds new gameboard if one doesn't exist. 
    console.log('gameboard built.');

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
