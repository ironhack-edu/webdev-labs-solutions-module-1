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
    if (!this.questions || !this.questions.length) {
      return undefined;
    }

    const shuffledQuestions = [];
    let last = this.questions.length;

    while (last > 0) {
      last--;
      const randomIndex = Math.floor(Math.random() * last);
      const randomQuestion = this.questions[randomIndex];
      shuffledQuestions.push(randomQuestion);
      this.questions.splice(randomIndex, 1);
    }

    this.questions = shuffledQuestions;
    return this.questions;
  }

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

  filterQuestionsByDifficulty(difficulty) {
    if (difficulty < 1 || difficulty > 3 || typeof difficulty !== "number") {
      return;
    }

    const filteredQuestions = this.questions.filter((question) => {
      return question.difficulty === difficulty;
    });

    this.questions = filteredQuestions;
    return this.questions;
  }

  averageDifficulty() {
    const sumDifficulty = this.questions.reduce((total, question) => {
      const newTotal = total + question.difficulty;
      return newTotal;
    }, 0);

    const averageDifficulty = sumDifficulty / this.questions.length;
    return averageDifficulty;
  }
}