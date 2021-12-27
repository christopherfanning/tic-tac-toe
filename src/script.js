let cells = document.querySelectorAll('.cell');
let moves = [
  [],
  []
];

let currentPlayer = 0;
let color = "orange";
const playerColor = document.querySelector('.color');
let playerMark = "X";

function togglePlayer() {
  if (currentPlayer === 0) {
    currentPlayer = 1;
    color = "green";
    playerColor.style.backgroundColor = "green";
    playerMark = "O";

  } else {
    currentPlayer = 0;
    color = "orange";
    playerColor.style.backgroundColor = "orange";
    playerMark = 'X';
  }
}



let gameboard = new Gameboard();

const bouncyCircle = new mojs.Shape({
  parent: '#bouncyCircle',
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

gameboard.build();
// const cross = new mojs.Shape({
//   shape: 'cross',
//   radius: 20,
//   radiusY: 30,
//   top: pos.row1,
//   left: pos.col2,
//   stroke: color2, //no fill for this one
//   isShowStart: true,
//   y: -25
// });
