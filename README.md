# Tic Tac Toe Game

This is a simple implementation of the Tic Tac Toe game using JavaScript. The game allows two players to take turns and tries to determine the winner based on the classic Tic Tac Toe rules.

## Description

The game is implemented using an object-oriented approach with a `TicTacToeGame` class. The game board is represented by an array `board` that keeps track of the state of each cell. The current player's turn is stored in the `turn` property.

The game provides the following functionalities:

- `drawBoard()`: Updates the HTML elements on the page to reflect the current state of the game board.
- `makeMove(index)`: Handles the logic for making a move on the game board. It checks if the selected cell is empty, updates the board, checks for a win or a tie, and switches the turn to the next player.
- `playSound()`: Plays a sound effect when a move is made.
- `checkWin()`: Checks if there is a winning combination on the game board.
- `reset()`: Resets the game to its initial state.
- `delay(ms)`: A helper function that introduces a delay in the execution.

The game UI is created with HTML and CSS. Each cell on the game board is associated with a click event listener that triggers the `makeMove()` function when clicked. There is also a reset button that calls the `reset()` function.

## Technologies Used

The Tic Tac Toe game is built using the following technologies:

- **JavaScript**: The core logic and functionality of the game are implemented in JavaScript.
- **HTML**: The game board and UI elements are created using HTML.
- **CSS**: The styling and layout of the game elements are done using CSS.

## How to Use

To play the game, follow these steps:

1. Open the `index.html` file in a web browser.
2. The game board will be displayed on the page.
3. Click on any empty cell on the board to make a move.
4. The game will check for a win or a tie after each move.
5. If a player wins or there is a tie, an alert message will be displayed.
6. Click the reset button to start a new game.

Note: Make sure the sound effect file `Cartoon Weird Noise Short Mouth Popping 02.mp3` is located in the same directory as the `index.html` file for the sound to play correctly.

Have fun playing Tic Tac Toe!
