/*########### creating an database by array and passing the questions, options, and answers #############*/
var quesDb = [
  {
  question: "1. What does PHP stand for?",
  ans: "option1",
  
  option1: "Hypertext Preprocessor",
  option2: "Hypertext Programming",
  option3: "Hypertext Preprogramming",
  option4: "Hometext Preprocessor"
  },
  
  {
    question: "2. What does CSS stand for?",
    ans: "option4",
    
    option1:"Common Style Sheet",
    option2:"Colorful Style Sheet",
    option3:"Computer Style Sheet",
    option4:"Cascading Style Sheet"
  },
  
  {
  question: "3. What does HTML stand for?",
  ans: "option2",

  option1:"Hyper Text Preprocessor",
  option2:"Hyper Text Markup Language",
  option3:"Hyper Text Multiple Language",
  option4:"Hyper Tool Multi Language"
  },
  
  {
    question: "4. What does XML stand for?",
    ans: "option1",

    option1:"eXtensible Markup Language",
    option2:"eXecutable Multiple Language",
    option3:"eXTra Multi-Program Language",
    option4:"eXamine Multiple Language"
  },
  
  {
    question: "5. What does SQL stand for?",
    ans: "option4",

    option1:"Stylish Question Language",
    option2:"Stylesheet Query Language",
    option3:"Statement Question Language",
    option4:"Structured Query Language"
  },
];

/*##################### Start Button Functionality ########################*/

/*#### Selecting items ####*/
var rules = document.querySelector('#rules');
var questionsBox = document.getElementById("questionsContainer");
var start = document.getElementById("startBtn");

/*#### Event listener ####*/
start.addEventListener('click', showRules);

/*##### Functions #####*/
function showRules(){
  start.style.display = "none";
  rules.style.display = "grid";
}

/*##################### Continue Functionality ########################*/
/*#### Selecting items ####*/
var continueBtn = document.querySelector("#continueBtn");

/*#### Event listener ####*/
continueBtn.addEventListener('click', quesPaper);

/*##### Functions #####*/
function quesPaper(){
  rules.style.display = "none";
  questionsBox.style.display = "grid";
}

/*##################### Continue Functionality ########################*/
/*#### Selecting items ####*/
var exitBtn = document.querySelector("#exitBtn");

/*#### Event listener ####*/
exitBtn.addEventListener('click', exitExam);

/*##### Functions #####*/
function exitExam(){
  start.style.display = "grid";
  rules.style.display = "none";
  questionsBox.style.display = "none";
}

/*##################### Loading Question From Database Array ########################*/
/*##### Selecting items ####*/
var question = document.getElementById("question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");

/*#### Creating Variable ####*/
var questionCount = 0;
var score = 0;

/*##### Functions #####*/
function loadQuestion(){
  var questionList = quesDb[questionCount];
  question.innerHTML = questionList.question;
  option1.innerHTML = `<input type="radio" name="question" id="option1" class="option"> ${questionList.option1}`;
  option2.innerHTML = `<input type="radio" name="question" id="option2" class="option"> ${questionList.option2}`;
  option3.innerHTML = `<input type="radio" name="question" id="option3" class="option"> ${questionList.option3}`;
  option4.innerHTML = `<input type="radio" name="question" id="option4" class="option"> ${questionList.option4}`;
}
loadQuestion();

/*##################### Next Button Functionality ########################*/

/*##### Selecting items ####*/
var nextBtn = document.getElementById("nextBtn");

/*#### Event listener #####*/
/* ()=> arrowFunction */
nextBtn.addEventListener('click', ()=>{
  var answer = document.querySelector('input:checked').id;
  var answerDb = quesDb[questionCount].ans;
  if (answer === answerDb){
    score++;
  }
  
  questionCount++;
  
  if(questionCount < quesDb.length){
    loadQuestion();
  }
  else{
    questionsBox.style.display = "none";
    
    scoreFromHtml = document.getElementById("score");
    scoreFromHtml.style.display="grid";
    
    scoreFromHtml.innerHTML = `<h3>Your Score is ${score} <br> 
    <a href="index.html"> <button id="tryAgain">Try Again</button> <a>`;
  }
});


/*##################### Back Button Functionality ########################*/

/*##### Selecting items ####*/
var backBtn = document.getElementById("backBtn");

/*#### Event listener #####*/
/* ()=> arrowFunction */
backBtn.addEventListener('click', () => {
  questionCount--;
  if(questionCount < quesDb.length){
    loadQuestion();
  }
});