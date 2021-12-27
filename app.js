const express = require('express');
let ejs = require('ejs');


const Gameboard = require('./Classes/Gameboard.js');
const Player = require('./Classes/Player.js');
const {
  isBoxedPrimitive
} = require('util/types');
// require classes  

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set('view engine', 'ejs');

let gameboard = new Gameboard(234);

let box = gameboard.build();

// Kick off game data. 

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.render('index', {
    // player1: player1
    gameboard: gameboard,
    box: box
    // Gameboard: Gameboard
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
