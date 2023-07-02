class TicTacToeGame {
  constructor() {
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.turn = "X";
  }

  drawBoard() {
    for (let i = 0; i < this.board.length; i++) {
      document.getElementsByClassName("cell")[i].innerHTML = this.board[i];
    }
  }

  async makeMove(index) {
    if (this.board[index] === "") {
      this.board[index] = this.turn;
      this.drawBoard();
      await this.delay(200);
      if (this.checkWin()) {
        alert(this.turn + " wins!");
        this.reset();
      } else if (this.board.indexOf("") === -1) {
        alert("It's a tie!");
        this.reset();
      } else {
        this.turn = this.turn === "X" ? "O" : "X";
      }
    }
  }
  playSound() {
    const sound = new Audio("./Cartoon Weird Noise Short Mouth Popping 02.mp3");
    sound.play();
  }
  checkWin() {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winCombos.length; i++) {
      if (
        this.board[winCombos[i][0]] !== "" &&
        this.board[winCombos[i][0]] === this.board[winCombos[i][1]] &&
        this.board[winCombos[i][1]] === this.board[winCombos[i][2]]
      ) {
        return true;
      }
    }
    return false;
  }

  reset() {
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.turn = "X";
    this.drawBoard();
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

const game = new TicTacToeGame();
game.drawBoard();

const cells = document.getElementsByClassName("cell");
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    game.makeMove(i);
    game.playSound();
  });
}
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
  game.reset();
});
