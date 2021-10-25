//Selecting items
var start = document.getElementById("startBtn");
var questions = document.getElementById("questions")

//Event listener
start.addEventListener('click', quesPaper);

//Functions
function quesPaper(){
    start.style.display = "none";
    questions.style.display = "block";
}

