const quizQuestions = [
  {
    question: "How do you insert COMMENTS in Python code?",
    options: ["#This is a comment", "/*This is a comment", "//This is a comment","All of the above" ],
    correctAnswer: "#This is a comment"
  },
  {
    question: "Which one is NOT a legal variable name?",
    options: ["my-var", "_myvar", "my_var", "Myvar"],
    correctAnswer: "my-var"
  },
  {
    question: "What is the correct file extension for Python files?",
    options: [".pyth",".py",".pyt",".pt"],
    correctAnswer: ".py"
  },
  {
    question: "What is the correct syntax to output the type of a variable or object in Python?",
    options: ["print(type(x))","print(typeOf(x))","print(typeof x)","print(typeof(x))"],
    correctAnswer: "print(type(x))"
   },
  {
    question: "Which method is used to remove whitespaces from both the beginning and the end of a string?",
    options: ["ptrim()","trim()","len()","strip()"],
    correctAnswer: "trim()"
  },
  {
    question: "Which method can be used to return a string in upper case letters?",
    options: ["uppercase()","upperCase()","upper()","toUpperCase()"],
    correctAnswer: "upper()"
  },
 {
    question: "Which method can be used to replace parts of a string?",
    options: ["switch()","replace()","replaceString()","repl()"],
    correctAnswer: "replace()"
  },
 {
    question: "Which of these collections defines a LIST?",
    options: ["[1,2,3,4]","(1,2,3,4)","{1,2,3,4}","None of the above"],
    correctAnswer: "[1,2,3,4]"
  },
 {
    question: "Which collection is ordered, changeable, and allows duplicate members?",
    options: ["DICTIONARY","TUPLE","LIST","SET"],
    correctAnswer: "LIST"
  },
 {
    question: "How do you start writing an if statement in Python?",
    options: ["if x > y then :","if(x>y)","if x > y :","if(x>y);"],
    correctAnswer: "if x > y :"
  },
 {
    question: "Which statement is used to stop a loop?",
    options: ["break","stop","return","exit"],
    correctAnswer: "break"
  },
 {
    question: "What is the correct way to create a function in Python?",
    options: ["function myfunction():","def myFunction():","create myFunction():","All the above"],
    correctAnswer: "def myFunction():"
  }

];

// Variables to track quiz state
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 120;
let timerInterval;

// Function to start the quiz
function startQuiz() {
  // Hide the start button and display the first question
  document.getElementById("start-button").style.display = "none";
  displayQuestion();
  startTimer();
}

// Function to display a question and its options
function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");

  // Clear previous question and answer options
  questionText.innerHTML = "";
  answerButtons.innerHTML = "";

  // Display the current question
  questionText.innerHTML = currentQuestion.question;

  // Create answer buttons for each option
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);

    // Add click event listener to check the answer
    button.addEventListener("click", function() {
      checkAnswer(option);
    });
  });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Check if the selected answer is correct
  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }

  // Move to the next question or end the quiz if all questions are answered
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;

    // Update the timer text
    document.getElementById("timer").textContent = timeLeft;

    // End the quiz if time runs out
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

// Function to end the quiz
function endQuiz() {
  // Stop the timer
  clearInterval(timerInterval);

  // Calculate the score percentage
  const scorePercentage = (score / quizQuestions.length) * 100;

  // Display the final score
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} out of ${quizQuestions.length}</p>
    <p>Score Percentage: ${scorePercentage}%</p>
  `;
}

// Add event listener to start the quiz when the start button is clicked
document.getElementById("start-button").addEventListener("click", startQuiz);