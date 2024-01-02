document.addEventListener("DOMContentLoaded", function () {
    const highscoresList = document.getElementById("highscores");
    const clearButton = document.getElementById("clear");

    function displayHighscores() {
        // Retrieve user data from localStorage (assuming you stored them with a key "highscores")
        const userData = JSON.parse(localStorage.getItem("highscores")) || [];
    
        console.log("Retrieved user data:", userData);
    
        // Clear existing highscores list
        highscoresList.innerHTML = "";
    
        if (userData.length > 0) {
            console.log("Displaying high scores...");  // Add this log
    
            // Display a list of high scores
            userData.forEach((user, index) => {
                const listItem = document.createElement("li");
                listItem.textContent = `${user.initials} = ${user.score}`;
                highscoresList.appendChild(listItem);
            });
    
            console.log("High scores displayed.");  // Add this log
        } else {
            // Display a message when there are no high scores
            const noScoresMessage = document.createElement("li");
            noScoresMessage.textContent = "No high scores yet!";
            highscoresList.appendChild(noScoresMessage);
        }
    }
    
    

    // Display highscores when the page loads
    displayHighscores();
    console.log("Displaying high scores...");
    // Event listener for clearing highscores
    clearButton.addEventListener("click", function () {
        // Clear user data from localStorage
        localStorage.removeItem("highscores");

        // Clear the highscores list on the page
        displayHighscores();
        console.log("High scores displayed.");
    });
});

