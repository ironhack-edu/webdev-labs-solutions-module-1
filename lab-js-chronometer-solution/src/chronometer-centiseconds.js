class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // this.intervalId = setInterval(() => {
    //   this.currentTime++;
    //   if (printTimeCallback) printTimeCallback();
    // }, 1000);


    // Bonus Iteration 9: Centiseconds
    this.intervalId = setInterval(() => {
      if (printTimeCallback) printTimeCallback();
      this.currentTime++;
    }, 10);
    
  }

  getMinutes() {
    // return Math.floor(this.currentTime / 60);
    return Math.floor(this.currentTime / 6000); // Bonus Iteration 9: Centiseconds
  }

  getSeconds() {
    // return this.currentTime % 60;
    return Math.floor(this.currentTime / 100) % 60; // Bonus Iteration 9: Centiseconds
  }

  getCentiseconds() {
    return this.currentTime % 100; // Bonus Iteration 9: Centiseconds
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return `0${value}`;
    return `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());

    return `${minutes}:${seconds}:${centiseconds}`;
  }
}
