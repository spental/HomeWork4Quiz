const startTimer = document.querySelector(".countdown");
let secondsLeft = 60;
const startButton = document.querySelector("#start-btn");
const questionContainerEl = document.querySelector("#question-container");
const questionEl = document.querySelector("#question");
const startButtonContainer = document.querySelector(".startBtn");
var highscoreButton = document.querySelector(".scoreList");
let currentQuestionIndex = 0;
var timerInterval;

startButton.addEventListener("click", startGame);
//function to get the game started
function startGame() {
  startButton.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  startButtonContainer.classList.add("hide");

  setTime();
  setQuestion(currentQuestionIndex);
}
//function to set the questions
function setQuestion(question) {
  if (currentQuestionIndex >= questionList.length) {
    gameOver();
    return;
  }
  var main = document.getElementById("main");
  const currentQuestion = questionList[currentQuestionIndex].question;
  const h1 = document.createElement("h1");
  h1.innerHTML = currentQuestion;
  main.append(h1);
  var btnGrid = document.createElement("div");
  btnGrid.setAttribute("class", "answerBtns");
  btnGrid.setAttribute("id", "btn-grid");
  main.append(btnGrid);
  //for loop that runs throught the questions and answers
  for (
    let index = 0;
    index < questionList[currentQuestionIndex].answers.length;
    index++
  ) {
    let element = questionList[currentQuestionIndex].answers[index];
    var btn = document.createElement("button");
    btn.setAttribute("class", "btn options");
    btn.setAttribute("data-answer", element);
    btn.innerHTML = element;
    btn.addEventListener("click", function (event) {
      let currentQuestion = questionList[currentQuestionIndex].correctAnswer;
      let currentAnswer = event.target.getAttribute("data-answer");
      //conditional statement that determines if the userschoice was correct
      if (currentAnswer === currentQuestion) {
        main.innerHTML = "";
        currentQuestionIndex++;
        var div = document.createElement("div");
        main.append(div);
        div.innerHTML = "CORRECT";
        setQuestion(currentQuestionIndex);
      } else if (currentAnswer !== currentQuestion) {
        main.innerHTML = "";
        var div = document.createElement("div");
        main.append(div);
        div.innerHTML = "INCORRECT";
        currentQuestionIndex++;
        setQuestion(currentQuestionIndex);
      }
      //conditional statement that runs time off the clock if the users choice was incorrect
      if (currentAnswer !== currentQuestion) {
        secondsLeft = secondsLeft - 10;
      }
    });
    btnGrid.appendChild(btn);
  }
}
//function to end the game
function gameOver() {
  clearInterval(timerInterval);
  var main = document.getElementById("main");
  main.innerHTML = "";
  var h1 = document.createElement("h1");
  h1.innerHTML = "!!! END OF GAME !!! your score is " + secondsLeft;
  main.append(h1);
  var input = document.createElement("input");
  main.append(input);
  var button = document.createElement("button");
  button.innerText = "SUBMIT";
  main.append(button);
  button.addEventListener("click", function (event) {
    var highscoresStr = window.localStorage.getItem("highscores");
    var highscores = [];
    //conditional statement to store the user score and intials in local storage
    if (highscoresStr && highscoresStr !== "undefined") {
      highscores = JSON.parse(highscoresStr);
    }
    var score = { initials: input.value, score: secondsLeft };
    highscores.push(score);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "/listOfHighScores.html";
  });
}
//function that gets the timer going once the game has been started
function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    startTimer.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
//redirect to highscore page
highscoreButton.addEventListener("click", function () {
  location.href = "/listOfHighScores.html";
});
//question object
const questionList = [
  {
    question: "How far will an adult honeybee fly to find a food source??",
    answers: ["1 mile", "100 yards", "30 feet", "4 Miles"],
    correctAnswer: "4 Miles",
  },
  {
    question: "How far will an adult honeybee fly to find a food source??",
    answers: ["1 mile", "100 yards", "30 feet", "4 Miles"],
    correctAnswer: "4 Miles",
  },
  {
    question: "How far will an adult honeybee fly to find a food source??",
    answers: ["1 mile", "100 yards", "30 feet", "4 Miles"],
    correctAnswer: "4 Miles",
  },
  {
    question: "How far will an adult honeybee fly to find a food source??",
    answers: ["1 mile", "100 yards", "30 feet", "4 Miles"],
    correctAnswer: "4 Miles",
  },
  {
    question: "How far will an adult honeybee fly to find a food source??",
    answers: ["1 mile", "100 yards", "30 feet", "4 Miles"],
    correctAnswer: "4 Miles",
  },

];
