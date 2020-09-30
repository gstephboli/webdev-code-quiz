// console.log("hello world");

// Gets the score stored in local storage
var storedScoreArray = JSON.parse(localStorage.getItem("userScores"));

// Targets the ul to populate the scores list under
var highScores = document.getElementById("scores");
var clearHighScores = document.getElementById("clear-history");
// when the page loads, the renderScore function  is executed
window.onload = function renderScores() {
  for (var i = 0; i < storedScoreArray.length; i++) {
    var scoreList = document.createElement("li");
    scoreList.setAttribute("class", "list-group-item list-group-item-primary");
    scoreList.textContent =
      i +
      1 +
      "." +
      " " +
      storedScoreArray[i].name +
      " - " +
      storedScoreArray[i].score;
    highScores.appendChild(scoreList);
  }
};

clearHighScores.addEventListener("click", function(event){
  event.preventDefault();
  window.localStorage.clear();
  while (highScores.firstChild){
    highScores.removeChild(highScores.firstChild);
  }
});

// // When a element inside of the todoList is clicked...
// highScores.addEventListener("click", function(event) {
//   var element = event.target;

//   // If that element is a button...
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);

//     // Re-render the list
//     renderTodos();
//   }
// });
