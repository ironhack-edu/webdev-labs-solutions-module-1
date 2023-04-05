class Obstacle extends Component {
  constructor(gameScreen) {
    super(
      gameScreen,
      Math.floor(Math.random() * 300 + 70),
      0,
      100,
      150,
      "./images/redCar.png"
    );
  }

  move() {
    if (Math.floor(Math.random() * 20) % 3 === 0) {
      this.top += 10;
      this.updatePosition();
    }
  }
}
