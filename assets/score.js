var returnHome = document.querySelector("#home");
var clearBtn = document.querySelector("#clear");
var list = document.getElementById("list");


//button to return the user back to the home page
returnHome.addEventListener("click", function () {
  location.href = "index.html";
});


//button for the users to clear out the highscore list if they choose
clearBtn.addEventListener("click", function () {
  window.localStorage.clear();
  list.innerHTML = "";
});


//function to display the scores on the page that were saved in local storage
function displayScores() {
  var highscores = JSON.parse(localStorage.getItem("highscores"));
  for (let i = 0; i < highscores.length; i++) {
    var li = document.createElement("li");
    const element = highscores[i];
    li.innerHTML = element.initials + element.score;
    list.append(li);
  }
}

//-- run function display scores --//

displayScores();
