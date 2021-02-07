const startTimer = document.querySelector(".timerCount");
let secondsLeft = 60;
const startButton = document.querySelector(".startQuizBtn");
const questionContainerEl = document.querySelector(".questionDiv");
const questionEl = document.querySelector(".questionContainer");
const startButtonContainer = document.querySelector(".startQuiz");
var highscoreButton = document.querySelector(".highScoreBtn");
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
  var main = document.getElementById("questionDiv");
  const currentQuestion = questionList[currentQuestionIndex].question;
  const h1 = document.createElement("h1");
  h1.innerHTML = currentQuestion;
  questionDiv.append(h1);
  var btnGrid = document.createElement("div");
  btnGrid.setAttribute("class", "answerBtns");
  btnGrid.setAttribute("id", "btn-grid");
  questionDiv.append(btnGrid);




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
  var main = document.getElementById("questionDiv");
  main.innerHTML = "";
  var h1 = document.createElement("h1");
  h1.innerHTML = "Game over your highscore is " + secondsLeft;
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
    window.location.href = "highscores.html";
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
  location.href = "highscores.html";
}






//question object
const questionList = [
  {
    question: "What transformed the turtles?",
    answers: ["ooze", "Dr. Robotnik", "The Winklevoss twins", "slime"],
    correctAnswer: "ooze",
  },
  {
    question: "Which turtle likes to party?",
    answers: ["Michaelangelo", "Donatello", "Leonardo", "Raphael"],
    correctAnswer: "Michaelangelo",
  },
  {
    question: "Who is the turtles arch nemesis?",
    answers: ["Shredder", "Zak the neutrino", "Splinter", "April o Neil"],
    correctAnswer: "Shredder",
  },
  {
    question: "What is the turtles favorite food?",
    answers: ["sushi", "pizza", "tuna sandwiches", "bananas"],
    correctAnswer: "pizza",
  },
  {
    question: "Who created the ninja turtles?",
    answers: [
      "Mark Hamill",
      "Jim Jenkins",
      "Bert & Ernie",
      "Kevin Eastman & Peter Laird",
    ],
    correctAnswer: "Kevin Eastman & Peter Laird",
  },
  {
    question: "What is the name of the turtle van?",
    answers: ["The sled", "The technodrome", "The party wagon", "The foot ski"],
    correctAnswer: "The party wagon",
  },
];
