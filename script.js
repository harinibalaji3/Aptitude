let currentTopic = null;
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 180;
let timerInterval;

const topicSelection = document.getElementById("topic-selection");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const explanationElement = document.getElementById("explanation");
const timerElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

// Display topics
document.querySelector(".topics").innerHTML = Object.keys(topics).map(topic => 
  `<div class="topic" onclick="startQuiz('${topic}')">${topic}</div>`
).join("");

// Start Quiz
function startQuiz(topic) {
  currentTopic = topic;
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 180;
  topicSelection.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  startTimer();
  displayQuestion();
}

// Display question
function displayQuestion() {
  const question = topics[currentTopic][currentQuestionIndex];
  questionElement.innerText = question.question;
  optionsElement.innerHTML = question.options.map(option => 
    `<div class="option" onclick="checkAnswer(this)">${option}</div>`
  ).join("");
  explanationElement.classList.add("hidden");
  nextButton.disabled = true;
}

// Check answer
function checkAnswer(selectedOption) {
  const question = topics[currentTopic][currentQuestionIndex];
  const options = optionsElement.querySelectorAll(".option");
  options.forEach(option => {
    option.onclick = null; // Disable further clicks
    if (option.innerText === question.answer) {
      option.classList.add("correct");
    }
  });

  if (selectedOption.innerText === question.answer) {
    score++;
    explanationElement.innerText = "Correct! " + question.explanation;
  } else {
    selectedOption.classList.add("incorrect");
    explanationElement.innerText = "Wrong! Correct answer: " + question.answer + ". " + question.explanation;
  }

  explanationElement.classList.remove("hidden");
  nextButton.disabled = false;
}

// Next question
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < topics[currentTopic].length) {
    displayQuestion();
  } else {
    endQuiz();
  }
});

// End quiz
function endQuiz() {
  clearInterval(timerInterval);
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreElement.innerText = score;
}

// Timer
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.innerText = `${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, "0")}`;
    if (timeLeft <= 0) endQuiz();
  }, 1000);
}

// Restart quiz
restartButton.addEventListener("click", () => {
  resultContainer.classList.add("hidden");
  topicSelection.classList.remove("hidden");
});