document.addEventListener("DOMContentLoaded", function () {
    const highscoresList = document.getElementById("highscores");
    const clearButton = document.getElementById("clear");

    function displayHighscores() {
        const userData = JSON.parse(localStorage.getItem("highscores")) || [];
    
        highscoresList.innerHTML = "";
    
        if (userData.length > 0) { 
    
            userData.forEach((user, index) => {
                const listItem = document.createElement("li");
                listItem.textContent = `${user.initials} = ${user.score}`;
                highscoresList.appendChild(listItem);
            });
    
        } else {
            const noScoresMessage = document.createElement("li");
            noScoresMessage.textContent = "No high scores yet!";
            highscoresList.appendChild(noScoresMessage);
        }
    }
    
    displayHighscores();
    clearButton.addEventListener("click", function () {
        localStorage.removeItem("highscores");

        displayHighscores();
    });
});

