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

  // DAY 2: Implement method filterQuestionsByDifficulty()
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

  // DAY 2: Implement method averageDifficulty()
  averageDifficulty() {
    const sumDifficulty = this.questions.reduce((total, question) => {
      const newTotal = total + question.difficulty;
      return newTotal;
    }, 0);

    const averageDifficulty = sumDifficulty / this.questions.length;
    return averageDifficulty;
  }
}
