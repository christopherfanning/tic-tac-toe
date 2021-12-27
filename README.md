# Tic-Tac-Toe game. #
- - - -

#### Summary of deliverables: ####
  * A reset button
  * Display of current player's turn
  * Display of winning condition
  * Display of which player won the game
  * Display of cat's game (Draw condition)
  * This readme file

### Technology used: ###
* javascipt ES6
* html
* CSS



### Planning: ###
* Flexbox container for the board squares ( changed to bootstrap )
* divs for squares.
* add click handlers to them.
* Change to players background color when clicked. 

![Wire Frame](https://christopherfanning.github.io/img/ttt.png)



### Winning Conditions ###
* Currently using an array containing the 8 possible winning conditions and checking that against another array of player moves.

### Favorite features: ###
 * Using 2 arrays to track each players moves
 ```moves = [ [5, 4, 7], [3, 9, 0] ]; ```
 * and then checking against the winning conditions to see if either player had achieved a winning condition yet. 
 * The gameboard was setup this way:
 ![diagram of board design](https://christopherfanning.github.io/img/box.png)


### Bronze (MVP) ###
* Minimal working game
* Winning conditions that work
* reset button (required per spec)


### Silver ###
* Pretty it up. 
* hover effects. 
* winning conditions that are calculated based on board matrix. 


### Gold ###
* Animation frame work
* Sounds
* Font awesome for choosing custom piece. 
* Save state in db, with code/ cookie. 

#### Things I would change ####
  * The class implementation is a bit long. 
  * The 2d array matrix for the board would have been cooler. 
  * Maybe use an image or something other than text for the player marker.
