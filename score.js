const savedName = document.getElementById("name");
const deleteScore = document.getElementById("deleteScore");

savedName.innerHTML = localStorage.getItem("name") +": "+ localStorage.getItem("score")

deleteScore.addEventListener("click",function(){
    localStorage.removeItem("name")
    localStorage.removeItem("score")
    savedName.remove()
})
