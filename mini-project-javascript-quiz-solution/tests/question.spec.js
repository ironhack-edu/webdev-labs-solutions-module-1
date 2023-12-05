describe("Question", () => {
  describe("class", () => {
    it("should be defined", () => {
      // Check if the Question class is defined
      expect(Question).toBeDefined();
    });

    it("should receive 4 arguments", () => {
      // Check if the Question class takes 4 arguments
      expect(Question.length).toEqual(4);
    });

    it("should receive 'text' string as its 1st argument and assign it to 'text' property", () => {
    // String with the question text to be used in the test and passed to the Quiz constructor
      const testText = "What is 2 + 2?";

      // Instantiate a new Question object with the test text string
      const question = new Question(testText, [], "test");
      
      // Check if the 'text' property of the Question object is equal to the test text string
      expect(question.text).toEqual(testText);
    });

    it("should receive 'choices' array as its 2nd argument and assign it to 'choices' property", () => {
      // Array with the question choices to be used in the test and passed to the Quiz constructor
      const testChoices = ["choice1", "choice2", "choice3"];

      // Instantiate a new Question object with the test choices array
      const question = new Question("test", testChoices, "test");
      
      // Check if the 'choices' property of the Question object is equal to the test choices array
      expect(question.choices).toEqual(testChoices);
    });

    it("should receive 'answer' string as its 3rd argument and assign it to 'answer' property", () => {
      // String with the question answer to be used in the test and passed to the Quiz constructor
      const testAnswer = "This is a test answer";
      
      // Instantiate a new Question object with the test answer string
      const question = new Question("test", [], testAnswer);
      
      // Check if the 'answer' property of the Question object is equal to the test answer string
      expect(question.answer).toEqual(testAnswer);
    });

    it("should receive 'difficulty' string as its 4th argument and assign it to 'difficulty' property", () => {      
      // Instantiate a new Question object and pass the test difficulty (number)
      const question = new Question("question", [], "test", 2);
      
      // Check if the 'difficulty' property of the Question object is equal to the test difficulty (number)
      expect(question.difficulty).toEqual(2);
    });

  });

  describe("shuffleChoices() method", () => {
    it("should be defined", () => {
      // Instantiate a new Question object
      const question = new Question("test", [], "test");
      
      // Check if the 'shuffleChoices' method is defined
      expect(question.shuffleChoices).toBeDefined();
    });

    it("should be a function", () => {
      // Instantiate a new Question object
      const question = new Question("test", [], "test");
      
      // Check if the .shuffleChoices is a function
      expect(typeof question.shuffleChoices).toBe("function");
    });

    it("should receive no arguments", () => {
      // Instantiate a new Question object
      const question = new Question("test", [], "test");
      
      // Check that the .shuffleChoices method takes no arguments
      expect(question.shuffleChoices.length).toEqual(0);
    });

    it("should shuffle the items in the 'choices' array", () => {
      // Array with the question choices to be used in the test and passed to the Quiz constructor
      const testChoices = ["choice1", "choice2", "choice3"];
      
      // Instantiate a new Question object with the test choices array
      const question = new Question("test", testChoices, "test");
      // Call the shuffleChoices() method on the Question object
      question.shuffleChoices();

      // Check that the 'choices' property of the Question object is not equal to the test choices array (i.e. it has been changed/shuffled)
      expect(question.choices).not.toEqual(testChoices);
    });
  });
});
