document.addEventListener("DOMContentLoaded", () => {

  // HTML ELEMENTS - views
  const quizView = document.getElementById("quizView");
  const endView = document.getElementById("endView");

  // HTML ELEMENTS - quiz view
  const progressBar = document.getElementById("progressBar");
  const questionCount = document.getElementById("questionCount");
  const questionContainer = document.getElementById("question");
  const choiceContainer = document.getElementById("choices");
  const nextButton = document.getElementById("nextButton");

  // HTML ELEMENTS - end view
  const resultContainer = document.getElementById("result");


  // SET VISIBILITY OF VIEWS
  // Show the quiz view (div#quizView) and hide the end view (div#endView)
  quizView.style.display = "block";
  endView.style.display = "none";


  // QUIZ DATA
  // Array with the quiz questions
  const questions = [
    new Question("What is 2 + 2?", ["3", "4", "5", "6"], "4", 1),
    new Question("What is the capital of France?", ["Miami", "Paris", "Oslo", "Rome"], "Paris", 1),
    new Question("Who created JavaScript?", ["Plato", "Brendan Eich", "Lea Verou", "Bill Gates"], "Brendan Eich", 2),
    new Question("What is the mass–energy equivalence equation?", ["E = mc^2", "E = m*c^2", "E = m*c^3", "E = m*c"], "E = mc^2", 3),
    // Add more questions here
  ];
  const quizDuration = 120; // 120 seconds (2 minutes)
  

  // QUIZ INSTANCE
  // Create a new Quiz instance object
  const quiz = new Quiz(questions, quizDuration, quizDuration);

  // Shuffle the quiz questions
  quiz.shuffleQuestions();


  // SHOW TIME REMAINING
  // Convert the time remaining in seconds to minutes and seconds, and pad the numbers with zeros if needed
  const minutes = Math.floor(quiz.timeRemaining / 60).toString().padStart(2, "0");
  const seconds = (quiz.timeRemaining % 60).toString().padStart(2, "0");

  // Display the time remaining in the time remaining container
  const timeRemainingContainer = document.getElementById("timeRemaining");
  timeRemainingContainer.innerText = `${minutes}:${seconds}`;


  // SHOW FIRST QUESTION
  showQuestion();


  // EVENT LISTENERS
  nextButton.addEventListener("click", nextButtonHandler);



  /************  FUNCTIONS  ************/

  // nextButtonHandler() - Handles the click on the next button
  // showQuestion() - Displays the current question and its choices
  // showResults() - Displays the end view and the quiz results


  /* DAY 3: Implement the DOM logic - function nextButtonHandler() */
  function nextButtonHandler () {
    // A variable to store the selected answer value
    let selectedAnswer;


    // 1. Get all the choice elements. You can use the `document.querySelectorAll()` method.
    const choices = document.querySelectorAll("input[name=choice]");

    // 2. Loop through all the choice elements and check which one is selected
      // Hint: Radio input elements have a property `.checked` (e.g., `element.checked`).
      //  When a radio input gets selected the `.checked` property will be set to true.
      //  You can use check which choice was selected by checking if the `.checked` property is true.
    choices.forEach((choice) => {
      if (choice.checked) {
        selectedAnswer = choice.value;
      }
    });

    // 3. If an answer was selected (`selectedAnswer`) check if answer is correct and move to the next question
    if (selectedAnswer) {
      // Check if selected answer is correct by calling the quiz method `checkAnswer()` with the selected answer.
      // Move to the next question by calling the quiz method `moveToNextQuestion()`.
      // Show the next question by calling the function `showQuestion()`.
      quiz.checkAnswer(selectedAnswer);
      quiz.moveToNextQuestion();
      showQuestion();
    }
  }  

  /* DAY 3: Implement the DOM logic - function showQuestion() */
  function showQuestion() {
    // A function that displays the current question and its choices
    // If the quiz has ended, show the results
    if (quiz.hasEnded()) {
      // Show the end view with the results
      showResults();

      return;
    }

    // Clear the previous question text and question choices
    questionContainer.innerText = "";
    choiceContainer.innerHTML = "";

    // Get the current question from the quiz by calling the Quiz class method `getQuestion()`
    const question = quiz.getQuestion();
    // Shuffle the choices of the current question by calling the method 'shuffleChoices()' on the question object
    question.shuffleChoices();
    
    
    // 1. Update the inner text of the question container element and show the question text
    questionContainer.innerText = question.text;

    
    // 2. Update progress bar width so that the green bar shows the percentage of questions answered
    const progressPercentage = (quiz.currentQuestionIndex / quiz.questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;


    // 3. Update the question count text to show the currrent question out of total questions
    const questionCountText = `Question ${quiz.currentQuestionIndex + 1} of ${quiz.questions.length}`;
    questionCount.innerText = questionCountText;

    // 4. Loop through the choices of the current question, create an input element with label for each choice,
    // and append it to the choice container.
    // Each choice should be displayed as a radio input element with a label:
    /* 
        <input type="radio" name="choice" value="CHOICE TEXT HERE">
        <label>CHOICE TEXT HERE</label>
       <br>
    */
    question.choices.forEach((choice) => {
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "choice";
      radio.value = choice;
      choiceContainer.appendChild(radio);

      const label = document.createElement("label");
      label.innerText = choice;
      choiceContainer.appendChild(label);

      const br = document.createElement("br");
      choiceContainer.appendChild(br);
    });
  }

  /* DAY 3: Implement the DOM logic - function showResults() */
  function showResults() {

    // 1. Hide the quiz view (div#quizView)
    quizView.style.display = "none";

    // 2. Show the end view (div#endView)
    endView.style.display = "flex";

    // 3. Update the result container (div#result) inner text to show the number of correct answers out of total questions
    resultContainer.innerText = `You scored ${quiz.correctAnswers} out of ${quiz.questions.length} correct answers!`;
  }

  /* DAY 3: Implement a “Restart Quiz” button: */
  const restartButton = document.getElementById("restartButton");
  restartButton.addEventListener("click", function restartQuiz() {
    // Hide the end view (Results)
    endView.style.display = "none";
    // Show the quiz view
    quizView.style.display = "block";
    // Reset the currentQuestionIndex to 0
    quiz.currentQuestionIndex = 0;
    // Reset the correctAnswers to 0
    quiz.correctAnswers = 0;
    // Shuffle the questions
    quiz.shuffleQuestions();
    // Show the first question
    showQuestion();
  });
});
