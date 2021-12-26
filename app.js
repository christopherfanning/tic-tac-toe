const express = require('express');
let ejs = require('ejs');

const Gameboard = require('./Classes/Gameboard.js');
const Player = require('./Classes/Player.js');
// require classes  

const app = express();
const port = 3000;

app.set('view engine', 'ejs');


// Kick off game data. 

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.render('index', {
    // player1: player1
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
