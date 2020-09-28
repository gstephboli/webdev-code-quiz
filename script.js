// console.log("hello world");

var homepageContainer = document.getElementById("quiz-main");
var questionHeader = document.getElementById("header");
var startButton = document.getElementById("start-quiz");
var options = document.getElementById("options");
var answerContainer = document.getElementById("answers");
var answerChoice = document.createElement("button");

var correctAnswer = 0;
var currentQuestion = 0;
var allQuestions = [
  {
    question: "Commonly used data types DO NOT include: ",
    options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correctAnswer: 3,
  },
  {
    question: "The condition in an if/else statement is enclosed within ____.",
    options: [
      "1. Quotes",
      "2. Curly Brackets",
      "3. Parenthesis",
      "4. Square Brackets",
    ],
    correctAnswer: 3,
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    options: [
      "1. Numbers and Strings",
      "2. Other arrays",
      "3. Booleans",
      "4. All of the Above",
    ],
    correctAnswer: 4,
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    options: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
    correctAnswer: 3,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. Terminal/bash",
      "3. For loops",
      "4. Console Log",
    ],
    correctAnswer: 4,
  },
];

function renderOptions(array) {
  for (var i = 0; i < array.length; i++) {
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-info");
    button.textContent = array[i];
    button.setAttribute("data-value", array[i]);
    options.append(button);
  }
}

function renderQuestion(index) {
    questionHeader.textContent = allQuestions[index].question;

    for (var i=0; i < allQuestions[index].options.length); i++){
        var answerChoices = document.createElement("button");

        answerChoices.setAttribute("class", "btn btn-primary btn-block");
        answerChoices.setAttribute("index" , i);
        answerChoices.textContent = questionHeader[index].choices[i];

        
    }
}


// 'Start Quiz' button to initiate quiz.
startButton.addEventListener("click", function () {
  homepageContainer.style.display = "none";
  var optionsToDisplay = questions[currentQuestion].options;
  renderOptions(optionsToDisplay);
});