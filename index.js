const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      answer: "Mars"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    }
];
  
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
  
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = "";
  
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    answersEl.innerHTML = "";
  
    currentQuestion.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("answer-btn");
      btn.addEventListener("click", () => {
        selectedAnswer = option;
        document.querySelectorAll(".answer-btn").forEach(b => b.style.backgroundColor = "");
        btn.style.backgroundColor = "#ccc";
      });
      answersEl.appendChild(btn);
    });
}
  
nextBtn.addEventListener("click", () => {
    if (!selectedAnswer) {
      alert("Please select an answer!");
      return;
    }
  
    if (selectedAnswer === quizData[currentQuestionIndex].answer) {
      score++;
    }
  
    selectedAnswer = "";
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
});
  
function showResult() {
    document.getElementById("quiz").style.display = "none";
    resultEl.style.display = "block";
    resultEl.textContent = `You scored ${score} out of ${quizData.length}`;
}
loadQuestion();
  