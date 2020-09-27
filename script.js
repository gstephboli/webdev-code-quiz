// console.log("hello world");

var homepageContainer = document.getElementById("quiz-main");
var startButton = document.getElementById("start-quiz");
var options = document.getElementById("options");

var currentQuestion = 0;
var questions = [
  {
    question: "Commonly used data types DO NOT include: ",
    options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    answer: 3,
  },
  {
    question: "The condition in an if/else statement is enclosed within ____.",
    options: [
      "1. Quotes",
      "2. Curly Brackets",
      "3. Parenthesis",
      "4. Square Brackets",
    ],
    answer: 3,
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    options: [
      "1. Numbers and Strings",
      "2. Other arrays",
      "3. Booleans",
      "4. All of the Above",
    ],
    answer: 4,
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    options: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
    answer: 3,
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
    answer: 4,
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



// Initial 'Start Quiz' button to initiate quiz.
startButton.addEventListener("click", function () {
  homepageContainer.style.display = "none";
  var optionsToDisplay = questions[currentQuestion].options;
  renderOptions(optionsToDisplay);
});
