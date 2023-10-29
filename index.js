const start = document.getElementById("game");
const button = document.getElementById("startbtn");
const showQuestion = document.getElementById("showquestion");
const questionOne = document.getElementById("question-1");
const questionTwo = document.getElementById("question-2");
const questionThree = document.getElementById("question-3");
const correctOne = document.getElementById("correct-1");
const correctTwo = document.getElementById("correct-2");
const correctThree = document.getElementById("correct-3");
const incorrect = document.querySelectorAll(".incorrect");
const over = document.getElementById("gameOver");
const wrongAnswer = document.getElementById("wrong");
let time = document.getElementById("timer");
const showEndscreen = document.getElementById("showendscreen");
const scoreBoard = document.getElementById("scoreboard");
const scoreBtn = document.getElementById("scoreBtn")
const userInput = document.getElementById("userInput");
let seconds = 60;
let score = 0;

//main game and start
questionOne.remove();
questionTwo.remove();
questionThree.remove();
over.remove();
wrongAnswer.remove();

button.addEventListener("click",function (){
    start.remove()
    showQuestion.append(questionOne)
    /*if(seconds <= 0){
        seconds--
        time.innerHTML = seconds
    }*/
    const setTimer = setInterval(second, 1000);
    function second(){
        seconds--
        time.innerHTML = "Time: " + seconds
        if(seconds <= 0){
            clearInterval(setTimer)
            showQuestion.remove()
            showEndscreen.append(over)
            scoreBoard.innerHTML = "Your final score is: " + score
            time.remove()
            
        

        }
    }
});

correctOne.addEventListener("click",function (){
    questionOne.remove()
    showQuestion.append(questionTwo)
    eraseWrong()
    score += 5
});

correctTwo.addEventListener("click",function (){
    questionTwo.remove()
    showQuestion.append(questionThree)
    eraseWrong()
    score += 5
});

correctThree.addEventListener("click",function(){
    questionThree.remove()
    showQuestion.append(over)
    eraseWrong()
    score += 5
    time.remove()
    scoreBoard.innerHTML = "Your final score is: " + score
    
});
//for letting query selector select all incorrect buttons
for(let i=0; i < incorrect.length; i++){
incorrect[i].addEventListener("click",function(){
    seconds -= 10
    score -= 2
    showQuestion.append(wrongAnswer)
})};
//function used to erase the wrong answer txt under the question
function eraseWrong(){
    if (wrongAnswer){
        wrongAnswer.remove()
    }
};
//saves score to local storage
scoreBtn.addEventListener("click",function(){
    let savedUser = userInput.value
    localStorage.setItem("name",savedUser)
    localStorage.setItem("score",score)
})