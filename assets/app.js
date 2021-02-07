
// start the quiz
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
        TIMER = setInterval(renderCounter,1000);
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    clearInterval(TIMER);
};

// create questions
var questions = [

new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All The Above"], "All The Above"),

new Question("What is the difference between synchronous and asynchronous programming, and how does asynchronous programming relate to your work with JavaScript?",
     ["An ability to articulate the difference between synchronous and asynchronous programming", 
     "The impact of asynchronous programming on user interfaces", 
     "An understanding of blocking and the subsequent impact on performance",  
     "All The Above"], "All The Above"),

new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework"),


new Question("How would you define functional programming? What is the role of functional programming in JavaScript?",
    ["All of the bellow",
    "Mention of function purity and side effect avoidance", 
    "Ability to provide examples of functional programming languages",
    "Ability to identify the features of JavaScript that enable functional programming"],
    "All of the bellow"),

new Question("There are ____ main components of object oriented programming.", ["10", "4","3", "6"], "4"),


];

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





// startButton.addEventListener("click", startGame);
// //function to get the game started
// function startGame() {
//   startButton.classList.add("hide");
//   questionContainerEl.classList.remove("hide");
//   startButtonContainer.classList.add("hide");
//   setTime();
//   setQuestion(currentQuestionIndex);
// }