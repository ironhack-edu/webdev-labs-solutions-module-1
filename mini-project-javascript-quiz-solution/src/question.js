class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  shuffleChoices() {
    if (!this.choices || !this.choices.length) {
      return undefined;
    }

    const shuffledChoices = [];
    let last = this.choices.length;

    while (last > 0) {
      last--;
      const randomIndex = Math.floor(Math.random() * last);
      const randomChoice = this.choices[randomIndex];
      shuffledChoices.push(randomChoice);
      this.choices.splice(randomIndex, 1);
    }

    this.choices = shuffledChoices;
    return this.choices;
  }
}