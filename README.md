# Tic-Tac-Toe game. #
- - - -

#### Summary of deliverables: ####
  * A reset button
  * Display of current player's turn
  * Display of winning condition
  * Display of which player won the game
  * Display of cat's game (Draw condition)
  * Don't allow clicks after gameover condition.
  * This readme file

### Technology used: ###
* javascipt ES6
* html
* CSS
* Bootstrap for the layout and sensible default styles.



### Planning pseudo: ###
* Flexbox container for the board squares ( changed to bootstrap )
* divs for squares.
* add click handlers to them.
* Change to players background color when clicked. 
* Mobile first approach:

![Wire Frame](https://christopherfanning.github.io/img/ttt.png)



### Winning Conditions ###
* Currently using an array containing the 8 possible winning conditions and checking that against another array of player moves.
``` 
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
```

### Favorite features: ###
 * The loops for building out the board elements was fun to write.
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

- - - - 
#### Presentation ####
  * What would you do differently?
    * Less code.  I feel like I over-complicated it.

  * What are you most proud of?
    * The two arrays to track user moves.

  * What would you do next?
    * Probably another refactor. 
    * The 2d nested array matrix

  * How did you plan your project?
    * I used the userstories provided to drive the process.
    * I tried a few things out that I haven't played with much before
      * Tried passing data in from node. 
      * Tried a Class based approach with js. 

  * What did you learn?
    * Stay simple. 
    * JS's classes are weird.
    * A pen-and-paper is handy when working through problems. 

  * Q & A
