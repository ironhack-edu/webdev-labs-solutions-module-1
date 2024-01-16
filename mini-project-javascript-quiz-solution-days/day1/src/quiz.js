class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    for (let i = 0; i < this.questions.length; i++) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      
      const temp = this.questions[i];
      this.questions[i] = this.questions[randomIndex];
      this.questions[randomIndex] = temp;
    }
  }
  // // Another way of doing it:
  // shuffleQuestions() {
  //   if (!this.questions || !this.questions.length) {
  //     return undefined;
  //   }

  //   const shuffledQuestions = [];
  //   let last = this.questions.length;

  //   while (last > 0) {
  //     last--;
  //     const randomIndex = Math.floor(Math.random() * last);
  //     const randomQuestion = this.questions[randomIndex];
  //     shuffledQuestions.push(randomQuestion);
  //     this.questions.splice(randomIndex, 1);
  //   }

  //   this.questions = shuffledQuestions;
  // }

  checkAnswer(answer) {
    const question = this.getQuestion();
    const isCorrectAnswer = question.answer === answer;

    if (isCorrectAnswer) {
      this.correctAnswers++;
    }
  }

  hasEnded() {
    return this.currentQuestionIndex === this.questions.length;
  }
}
