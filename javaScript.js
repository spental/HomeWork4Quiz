const listOfQuestions = [
{
    question : "what's my age?",
    choices : [
        "A. this one",
        "B. this two",
        "C. this three",
        "D. this four"],
    correctChoice : "b"
},
{ 
    question : "what's my height?",
    choices : ["a","b","c","d"],
    correctChoice : "b"
},
{
    question : "what's my weight?",
    choices : ["a","b","c","d"],
    correctChoice : "b"
},
{
    question : "what's my smell?",
    choices : ["a","b","c","d"],
    correctChoice : "b"
},
]
var currentQuestionIndex = 0;
var currentAnswerIndex = 0 ;

// function to run above in order of clear then post. 
function startQuiz(){
    removeElement();
    createQuestions();
    createAnswersChoices();
}

// event listeners





// removes everthing off the page when ["Begin Quiz"] button is pressed.
function removeElement() {
    document.getElementById("startScreen").style.display = "none";
}
    // create element to create and <h1> / set text to be lisf questions as i, 
function createQuestions (){
    document.getElementById("questionScreen").style.display = "block";
    var currentquestion = listOfQuestions[currentQuestionIndex];
    var question = document.createElement("h1");
    question.textContent = currentquestion.question;
    document.getElementById("questionScreen").append(question);
}
// Show Answer List 
function createAnswersChoices(){
    document.getElementById("questionScreen").style.display = "block";
    var currentAnswerlist = listOfQuestions[currentAnswerIndex];
    var choices = document.createElement("h2");
    choices.textContent = currentAnswerlist.choices;
    document.getElementById("questionScreen").append (choices);
}





