class Player extends Component {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    super(gameScreen, left, top, width, height, imgSrc);
  }

  move() {
    document.onkeydown = (event) => {
      const key = event.key;
      const possibleKeystrokes = [
        "ArrowLeft",
        "a",
        "ArrowUp",
        "w",
        "ArrowRight",
        "s",
        "ArrowDown",
        "d",
      ];
      if (possibleKeystrokes.includes(key)) {
        event.preventDefault();
        switch (key) {
          case "ArrowLeft":
          case "a":
            if (this.left >= 10) this.left -= 30;
            break;
          case "ArrowUp":
          case "w":
            if (this.top >= 10) this.top -= 30;
            break;
          case "ArrowRight":
          case "s":
            if (this.left <= 490 - this.width) this.left += 30;
            break;
          case "ArrowDown":
          case "d":
            if (this.top <= 690 - this.height) this.top += 30;
            break;
        }
        this.updatePosition();
      }
    };
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      obstacle.element.classList.add("crash");

      return true;
    } else {
      return false;
    }
  }
}
