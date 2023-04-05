class Game {
  constructor() {
    this.gameScreen = document.getElementById("game-screen");
    this.startScreen = document.getElementById("game-intro");
    this.gameEndScreen = document.getElementById("game-end");
    this.car = new Player(
      this.gameScreen,
      200,
      550,
      100,
      150,
      "./images/car.png"
    );
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.crashedObstacles = [];
    this.background = undefined;
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;

    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
  }

  start() {
    this.hideStartScreen();
    this.showGameScreen();
    this.createObstacle();
    this.gameLoop();
  }

  endGame() {
    this.car.element.remove();
    this.obstacles.forEach(function (obstacle) {
      obstacle.element.remove();
    });

    this.gameIsOver = true;
    this.hideGameScreen();
    this.showGameEndScreen();
  }

  gameLoop() {
    if (this.gameIsOver) return;

    this.update();

    window.requestAnimationFrame(() => this.gameLoop());
  }

  showGameScreen() {
    this.gameScreen.style.display = "block";
  }

  hideGameScreen() {
    this.gameScreen.style.display = "none";
  }

  showStartScreen() {
    this.startScreen.style.display = "block";
  }

  hideStartScreen() {
    this.startScreen.style.display = "none";
  }

  showGameEndScreen() {
    this.gameEndScreen.style.display = "block";
  }

  update() {
    this.car.move();

    // Check for collision and if obstacle is still on the screen
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      if (this.car.didCollide(obstacle)) {
        const crashedObstacle = this.obstacles.splice(i, 1)[0];
        this.crashedObstacles.push(crashedObstacle);
        i--;
        this.lives--;
      } else if (obstacle.top > this.height) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      }
    }

    // Check if crashed obstacle is still on the screen
    for (let i = 0; i < this.crashedObstacles.length; i++) {
      const crashedObstacle = this.crashedObstacles[i];
      crashedObstacle.move();

      if (crashedObstacle.top > this.height) {
        crashedObstacle.element.remove();
        this.crashedObstacles.splice(i, 1);
        i--;
      }
    }

    if (this.lives === 0) {
      this.endGame();
    }

    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.createObstacle();
    }
  }

  createObstacle() {
    this.obstacles.push(new Obstacle(this.gameScreen));
  }
}
