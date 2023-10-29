const savedName = document.getElementById("name")

savedName.innerHTML = localStorage.getItem("name") +": "+ localStorage.getItem("score")