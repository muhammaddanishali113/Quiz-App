const questions = [
  {
    question: "HTML ka full form kya hai?",
    answers: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "HTML mein heading ke liye kya use hota hai?",
    answers: ["<p>", "<h1>", "<img>", "<div>"],
    correctAnswer: "<h1>",
  },
  {
    question: "Image show karne ke liye kaunsa tag hai?",
    answers: ["<link>", "<image>", "<img>", "<src>"],
    correctAnswer: "<img>",
  },
  {
    question: "Link banane ke liye kaunsa tag use hota hai?",
    answers: ["<a>", "<p>", "<button>", "<link>"],
    correctAnswer: "<a>",
  },
  {
    question: "HTML mein paragraph ke liye kya use hota hai?",
    answers: ["<h1>", "<text>", "<p>", "<para>"],
    correctAnswer: "<p>",
  },
];

const questionElement = document.querySelector("#question");
const answersElement = document.querySelector("#answers");
const nextBtn = document.querySelector("#next");
const countElement = document.querySelector("#count");
const scoreElement = document.querySelector("#score");

let index = 0;
let score = 0;

const showQuestion = () => {
  const currentQuestion = questions[index];

  questionElement.textContent = currentQuestion.question;

  countElement.textContent = `Question ${index + 1} / ${questions.length}`;

  answersElement.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");

    button.textContent = answer;
    answersElement.appendChild(button);

    
    button.addEventListener('click', () => {
      if(answer === currentQuestion.correctAnswer) {
        score++
      }
    })
  });
};

nextBtn.addEventListener('click', () => {
  index++
  
  if (index < questions.length) {
     showQuestion();
     console.log(score);
     scoreElement.textContent = score;
    } else { 
      questionElement.textContent = 'Quiz Completed!';
      answersElement.innerHTML = '';
      
      countElement.textContent = `Your Score ${score} / ${questions.length}`;
      scoreElement.innerHTML = '';
  }
})

showQuestion();
scoreElement.textContent = score;
