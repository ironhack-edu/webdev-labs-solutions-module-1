window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function startGame() {
    console.log("start game");
    const myGame = new Game();

    console.log("myGame", myGame);
    myGame.start();
  }

  function restartGame() {
    location.reload();
  }
};
