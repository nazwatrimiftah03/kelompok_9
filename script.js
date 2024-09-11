let score = 0;
let num1, num2, correctAnswer;

const problemElement = document.getElementById("problem");
const answerInput = document.getElementById("answer");
const submitButton = document.getElementById("submit-btn");
const feedbackElement = document.getElementById("feedback");
const feedbackImage = document.getElementById("feedback-image");
const scoreElement = document.getElementById("score");
const newProblemButton = document.getElementById("new-problem-btn");

// Generate a new math problem
function generateProblem() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;
    problemElement.textContent = `${num1} + ${num2} = ?`;
    answerInput.value = "";
    feedbackElement.textContent = "";
    feedbackImage.style.display = "none";
    submitButton.style.display = "inline-block";
    newProblemButton.style.display = "none";
}

// Check the player's answer
submitButton.addEventListener("click", function() {
    const playerAnswer = parseInt(answerInput.value);
    if (playerAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
        feedbackImage.src = "https://img.icons8.com/ios/50/00FF00/checkmark.png"; // Gambar centang benar
        feedbackImage.style.display = "block";
        feedbackElement.classList.add("correct");
        score++;
        scoreElement.textContent = score;
    } else {
        feedbackElement.textContent = `Wrong! The correct answer was ${correctAnswer}`;
        feedbackElement.style.color = "red";
        feedbackImage.src = "https://img.icons8.com/ios/50/FF0000/delete-forever.png"; // Gambar silang salah
        feedbackImage.style.display = "block";
        feedbackElement.classList.add("wrong");
    }
    submitButton.style.display = "none";
    newProblemButton.style.display = "inline-block";
});

// Generate a new problem when the "New Problem" button is clicked
newProblemButton.addEventListener("click", generateProblem);

// Start the game with the first problem
generateProblem();
