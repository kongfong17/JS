const quizData = [
  {
    question: "what is 1 + 1?",
    a: "6",
    b: "2",
    c: "1",
    d: "4",
    correct: "b",
  },
  {
    question: "what is the capital of VietNam?",
    a: "Ha Noi",
    b: "HCM",
    c: "Da Nang",
    d: "Can Tho",
    correct: "a",
  },
  {
    question: "who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Joe Biden",
    correct: "d",
  },
  {
    question: "who is the best?",
    a: "Phong",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Joe Biden",
    correct: "a",
  },
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectedAnswer()

  const currentQuizData = quizData[currentQuestion];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  

  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectedAnswer(){
    answerEls.forEach((answerEl) => {  
          answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  console.log(answer);
  if (answer) {
    if(answer === quizData[currentQuestion].correct){
        score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>ur socre is : ${score}/${quizData.length}</h2>
      <h2><button onClick="location.reload()">Reload</button></h2>
      `
    }
  }
});
