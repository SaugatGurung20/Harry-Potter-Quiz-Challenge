document.getElementById("start").addEventListener("click", startQuizHandler);

function startQuizHandler() {
    const serverQuestions = questions
  
    console.log(serverQuestions); 
  
    questionsData = serverQuestions;
  
    currentQuestionIndex = 0;
    timeLeft = 60;
    score = 0;
  
    startQuiz();
  }

    function startQuiz() {
      document.getElementById("start-screen").classList.add("hide");
      document.getElementById("questions").classList.remove("hide");
   
      timeLeft = 60; 
      updateTimer();
  
      timerInterval = setInterval(function () {
        timeLeft--;
        updateTimer();
  
        if (timeLeft <= 0 || currentQuestionIndex === questions.length) {
          endQuiz();
        }
      }, 1000);
  
      displayQuestion();
    }
  
function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
  
    document.getElementById("question-title").textContent = currentQuestion.title;
  
    document.getElementById("choices").innerHTML = "";
  
    currentQuestion.choices.forEach(function (choice, index) {
      var choiceButton = document.createElement("button");
      choiceButton.textContent = choice;
      choiceButton.addEventListener("click", function () {

        var isCorrect = index === currentQuestion.correctAnswer;
  
        displayAnswerMessage(isCorrect);
  
        if (isCorrect) {
          score += 10; 
        } else {
          timeLeft -= 10; 
        }
  
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          displayQuestion();
        } else {
          endQuiz();
        }
      });
  
      document.getElementById("choices").appendChild(choiceButton);
    });
  }
  
  function displayAnswerMessage(isCorrect) {
    var answerMessage = document.createElement("p");
    answerMessage.textContent = isCorrect ? "Right !!" : "Wrong !!";
    document.getElementById("answer-message").innerHTML = "";
    document.getElementById("answer-message").appendChild(answerMessage);
  }
  
  
    function updateTimer() {
      document.getElementById("time").textContent = timeLeft;
    }
  
    function endQuiz() {
      clearInterval(timerInterval);
  
      document.getElementById("questions").classList.add("hide");
      document.getElementById("end-screen").classList.remove("hide");

      document.getElementById("final-score").textContent = score;
    }

document.getElementById("submit").addEventListener("click", submitHandler);

function submitHandler() {

    const initials = document.getElementById("initials").value;

    const existingScores = JSON.parse(localStorage.getItem("highscores")) || [];

    const userData = {
        initials,
        score,
    };

    existingScores.push(userData);
    localStorage.setItem("highscores", JSON.stringify(existingScores));
    console.log("User submitted data:", userData);
    window.location.href = "highscores.html";
}
