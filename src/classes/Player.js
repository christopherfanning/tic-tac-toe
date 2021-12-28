class Player {

  constructor(name, gamePiece) {
    this.gamePiece = gamePiece;
    this.name = name;
  }


  win() {
    console.log(`${this.name} wins`);
  }

  lose() {

    console.log(`Someone lost. `);
  }


}

console.log('Player, imported!');
