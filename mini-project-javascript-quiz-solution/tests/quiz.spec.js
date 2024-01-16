describe("Quiz", () => {
  describe("class", () => {
    it("should be defined", () => {
      // Check if the Quiz class is defined
      expect(Quiz).toBeDefined();
    });

    it("should receive 3 arguments", () => {
      // Check if the Quiz class takes 3 arguments
      expect(Quiz.length).toEqual(3);
    });

    it("should receive 'questions' array as its 1st argument and store it in a 'questions' property", () => {
      // Array with questions to be used in the test and passed to the Quiz constructor
      const testQuestions = ["question1", "question2", "question3"];

      // Instantiate a new Quiz object with the test questions
      const quiz = new Quiz(testQuestions, 60, 60);
      // Check if the questions property is equal to the test questions array passed to the constructor
      expect(quiz.questions).toEqual(testQuestions);
    });

    it("should receive 'timeLimit' integer as its 2nd argument and store it in a 'timeLimit' property", () => {
      // Integer with the time limit to be used in the test and passed to the Quiz constructor
      const testTime = 120;
      // Instantiate a new Quiz object with the test time limit
      const quiz = new Quiz([], testTime, 60);
      // Check if the timeLimit property is equal to the test time argument passed to the constructor
      expect(quiz.timeLimit).toEqual(testTime);
    });

    it("should receive 'timeRemaining' integer as its 3rd argument and store it in a 'timeRemaining' property", () => {
      // Integer with the time limit to be used in the test and passed to the Quiz constructor
      const testTime = 120;
      // Instantiate a new Quiz object with the test time limit
      const quiz = new Quiz([], 60, testTime);
      // Check if the timeRemaining property is equal to the test time argument passed to the constructor
      expect(quiz.timeRemaining).toEqual(testTime);
    });    

    it("should have a 'correctAnswers' property initially set to 0", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the correctAnswers property is initially set to 0
      expect(quiz.correctAnswers).toEqual(0);
    });

    it("should have a 'currentQuestionIndex' property initially set to 0", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the currentQuestionIndex property is initially set to 0
      expect(quiz.currentQuestionIndex).toEqual(0);
    });
  });

  describe("getQuestion() method", () => {
    it("should be defined", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the getQuestion() method is defined
      expect(quiz.getQuestion).toBeDefined();
    });

    it("should be a function", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the .getQuestion is a function
      expect(typeof quiz.getQuestion).toBe("function");
    });

    it("should return the item from the 'questions' array at the position of 'currentQuestionIndex'", () => {
      // Array with questions to be used in the test and passed to the Quiz constructor
      const testQuestions = ["question1", "question2", "question3"];

      // Instantiate a new Quiz object with the test questions
      const quiz1 = new Quiz(testQuestions, 60, 60);
      // Check if the getQuestion() method returns the correct question
      expect(quiz1.getQuestion()).toEqual("question1");

      // Instantiate another Quiz object with the test questions
      const quiz2 = new Quiz(testQuestions, 60, 60);
      // Manually set the currentQuestionIndex to 2
      quiz2.currentQuestionIndex = 2;
      // Check if the getQuestion() method returns the correct question
      expect(quiz2.getQuestion()).toEqual("question3");
    });
  });

  describe("moveToNextQuestion() method", () => {
    it("should be defined", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the moveToNextQuestion() method is defined
      expect(quiz.moveToNextQuestion).toBeDefined();
    });

    it("should be a function", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the .moveToNextQuestion is a function
      expect(typeof quiz.moveToNextQuestion).toBe("function");
    });

    it("should increment the 'currentQuestionIndex' by 1", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz(["a", "b", "c"], 60, 60);
      // Call the moveToNextQuestion() method which should increment the currentQuestionIndex by 1
      quiz.moveToNextQuestion();
      // Check if the currentQuestionIndex property has been increased by 1
      expect(quiz.currentQuestionIndex).toEqual(1);
    });
  });

  describe("shuffleQuestions() method", () => {
    it("should be defined", () => {
        // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the shuffleQuestions() method is defined
      expect(quiz.shuffleQuestions).toBeDefined();
    });

    it("should be a function", () => {
        // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the .shuffleQuestions is a function
      expect(typeof quiz.shuffleQuestions).toBe("function");
    });

    it("should shuffle the items in the 'questions' array", () => {
      // Array with questions to be used in the test and passed to the Quiz constructor
      const testQuestions = ["question1", "question2", "question3"];

      // Instantiate a new Quiz object with the test questions
      const quiz = new Quiz(testQuestions, 60, 60);

      // Call the shuffleQuestions() method to shuffle the questions array in the quiz
      quiz.shuffleQuestions();

      // Check if the questions array is not equal to the original array (it has been changed/shuffled)
      expect(quiz.questions).not.toEqual(["question1", "question2", "question3"]);
      expect(quiz.questions.length).toEqual(3);
  });
  });

  describe("checkAnswer() method", () => {
    it("should be defined", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the checkAnswer() method is defined
      expect(quiz.checkAnswer).toBeDefined();
    });

    it("should be a function", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the checkAnswer() method is a function
      expect(typeof quiz.checkAnswer).toBe("function");
    });

    it("should receive 1 argument (answer)", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the checkAnswer() method receives 1 argument
      expect(quiz.checkAnswer.length).toEqual(1);
    });

    it("should increase 'correctAnswers' by 1 when a correct answer is passed as an argument", () => {
      // Array with questions to be used in the test and passed to the Quiz constructor
      const testQuestions = [
        { text: "Question 1", choices: ["a", "b", "c"], answer: "a" },
        { text: "Question 2", choices: ["d", "e", "f"], answer: "e" },
        { text: "Question 3", choices: ["x", "y", "z"], answer: "z" },
      ];

      // Instantiate a new Quiz object with the test questions
      const quiz = new Quiz(testQuestions, 60, 60);

      // Call the checkAnswer() method with the correct answer
      quiz.checkAnswer("a");

      // Check if the correctAnswers property has been increased by 1
      expect(quiz.correctAnswers).toEqual(1);

      // Call the moveNextQuestion() method to move to the next question
      // Call the checkAnswer() method with the correct answer
      quiz.moveToNextQuestion();
      quiz.checkAnswer("e");

      // Check if the correctAnswers property has been increased by 1
      expect(quiz.correctAnswers).toEqual(2);

      // Call the moveNextQuestion() method to move to the next question
      // Call the checkAnswer() method with the correct answer
      quiz.moveToNextQuestion();
      quiz.checkAnswer("z");

      // Check if the correctAnswers property has been increased by 1
      expect(quiz.correctAnswers).toEqual(3);
    });
  });

  describe("hasEnded() method", () => {
    it("should be defined", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the hasEnded() method is defined
      expect(quiz.hasEnded).toBeDefined();
    });

    it("should be a function", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the .hasEnded is a function
      expect(typeof quiz.hasEnded).toBe("function");
    });

    it("should return 'false' when 'currentQuestionIndex' is less than the 'questions' array length", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz(["a", "b", "c"], 60, 60);
      // Manually set the currentQuestionIndex to 2
      quiz.currentQuestionIndex = 2;
      // Check if the hasEnded() method returns false
      expect(quiz.hasEnded()).toBe(false);
    });

    it("should return 'true' when 'currentQuestionIndex' is equal to the 'questions' array length", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz(["a", "b", "c"], 60, 60);
      // Manually set the currentQuestionIndex to 3
      quiz.currentQuestionIndex = 3;
      // Check if the hasEnded() method returns true
      expect(quiz.hasEnded()).toBe(true);
    });
  });


  describe("filterQuestionsByDifficulty() method", () => {
    it("should be defined", () => {
      // YOUR CODE HERE:
      //
      // 1. Instantiate a new Quiz object
      const quiz = new Quiz([], "test", 60);
      // 2. Check if the filterQuestionsByDifficulty() method is defined
      expect(quiz.filterQuestionsByDifficulty).toBeDefined();

    });

    it("should be a function", () => {
      // YOUR CODE HERE:
      //
      // 1. Instantiate a new Quiz object
      const quiz = new Quiz([], "test", 60);
      // 2. Check if the .filterQuestionsByDifficulty is a function
      expect(typeof quiz.filterQuestionsByDifficulty).toBe("function");

    });

    it("should receive 1 argument (difficulty)", () => {
      // YOUR CODE HERE:
      //
      // 1. Instantiate a new Quiz object
      const quiz = new Quiz([], "test", 60);      
      // 2. Check if the filterQuestionsByDifficulty() method takes 1 argument
      expect(quiz.filterQuestionsByDifficulty.length).toEqual(1);

    });

    it("should update the 'questions' array with the questions filtered by difficulty", () => {
      // 1. Read the above test description to understand what this test should do

      // Array with questions to be used in the test and passed to the Quiz constructor
      const questions = [
        {
          text: "Question 1",
          choices: ["a", "b", "c"],
          answer: "a",
          difficulty: 1,
        },
        {
          text: "Question 2",
          choices: ["d", "e", "f"],
          answer: "d",
          difficulty: 2,
        },
        {
          text: "Question 3",
          choices: ["g", "h", "i"],
          answer: "g",
          difficulty: 2,
        },
        {
          text: "Question 4",
          choices: ["j", "k", "l"],
          answer: "j",
          difficulty: 3,
        },
      ];

      // YOUR CODE HERE:
      //
      // 2. Instantiate a new Quiz object with the test questions
      const quiz = new Quiz(questions, "test", 60);      

      // 3. Call the `filterQuestionsByDifficulty()` method with a number between 1 and 3 as a 1st argument.
      quiz.filterQuestionsByDifficulty(2);

      // 4. Check if the questions array has been filtered correctly
      expect(quiz.questions).toEqual([questions[1], questions[2]]);
    });

    it("should not change the 'questions' array if the 1st argument is not a number between 1 and 3", () => {
      // 1. Read the above test description to understand what this test should do


      // Array with questions to be used in the test and passed to the Quiz constructor
      const questions = [
        {
          text: "Question 1",
          choices: ["a", "b", "c"],
          answer: "a",
          difficulty: 1,
        },
        {
          text: "Question 2",
          choices: ["d", "e", "f"],
          answer: "d",
          difficulty: 2,
        },
        {
          text: "Question 3",
          choices: ["g", "h", "i"],
          answer: "g",
          difficulty: 3,
        },
      ];

      // YOUR CODE HERE:
      //
      // 2. Instantiate a new Quiz object with the test questions
      const quiz = new Quiz(questions, "test", 60);

      // 3. Call the `filterQuestionsByDifficulty()` method with a string as a 1st argument (wrong data type).
      quiz.filterQuestionsByDifficulty("foo");

      // 4. Check if the questions array is still the same as the original (it hasn't been filtered)
      expect(quiz.questions).toEqual(questions);
    });
  });

  describe("averageDifficulty() method", () => {
    it("should be defined", () => {
      // YOUR CODE HERE:
      //
      // 1. Instantiate a new Quiz object
      const quiz = new Quiz([], "test", 60);
      // 2. Check if the averageDifficulty() method is defined
      expect(quiz.averageDifficulty).toBeDefined();

    });

    it("should be a function", () => {
      // YOUR CODE HERE:
      //
      // 1. Instantiate a new Quiz object
      const quiz = new Quiz([], "test", 60);

      // 2. Check if the .averageDifficulty is a function
      expect(typeof quiz.averageDifficulty).toBe("function");
    });

    it("should receive no arguments", () => {
      // YOUR CODE HERE:
      //
      // 1. Instantiate a new Quiz object
      const quiz = new Quiz([], "test", 60);

      // 2. Check that the averageDifficulty() method takes no arguments
      expect(quiz.averageDifficulty.length).toEqual(0);
    });

    it("should return the average difficulty of the questions in the quiz", () => {
      // Array with questions to be used in the test and passed to the Quiz constructor
      const questions = [
        {
          text: "Question 1",
          choices: ["a", "b", "c"],
          answer: "a",
          difficulty: 1,
        },
        {
          text: "Question 2",
          choices: ["d", "e", "f"],
          answer: "d",
          difficulty: 2,
        },
        {
          text: "Question 3",
          choices: ["g", "h", "i"],
          answer: "g",
          difficulty: 2,
        },
        {
          text: "Question 4",
          choices: ["j", "k", "l"],
          answer: "j",
          difficulty: 1,
        },
        {
          text: "Question 5",
          choices: ["m", "n", "o"],
          answer: "m",
          difficulty: 3,
        },
      ];

      // YOUR CODE HERE:
      //
      // 1. Instantiate a new Quiz object with the test questions
      const quiz = new Quiz(questions, "test", 60);

      // 2. Check that the averageDifficulty() method returns the correct average when called
      expect(quiz.averageDifficulty()).toEqual(1.8);
    });
  });  
});
