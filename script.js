const quizData = [
    {
        question: 'How old is Abdullo?',
        a: '15',
        b: '18',
        c: '29',
        d: '100',
        correct:'b',
    }, {
        question: 'What is the most used programming language in 2022?',
        a: 'javaScript',
        b: 'Python',
        c: 'Java',
        d: 'Php',
        correct: 'a',
    }, {
        question: 'Who is the President of US?',
        a: 'Florin Pop',
        b: 'Donald Tramp',
        c: 'Barak Obama',
        d: 'Joe Biden',
        correct: 'd',
    }, {
        question: 'What is HTML stand for?',
        a: 'Cascading Style Sheet',
        b: 'JSON Object Natation',
        c: 'HyperText Markup Language',
        d: 'Application Programming Interface',
        correct: 'c',
    }, {
        question: 'What year was JavaScript launched?',
        a: '1994',
        b: '2000',
        c: '2010',
        d: 'non of the above',
        correct: 'd',
    }
];

const quiz = document.querySelector('#quiz');
const questionElem = document.querySelector('#question')
const answerElems = document.querySelectorAll('.answer');
const a_test = document.querySelector('#a_test');
const b_test = document.querySelector('#b_test');
const c_test = document.querySelector('#c_test');
const d_test = document.querySelector('#d_test');
const submitBtn = document.querySelector('#submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionElem.innerText = currentQuizData.question; 
    a_test.innerText = currentQuizData.a;
    b_test.innerText = currentQuizData.b;
    c_test.innerText = currentQuizData.c;
    d_test.innerText = currentQuizData.d;
};

function getSelected() {
    let answer = undefined;

    answerElems.forEach((answerElem) => {
        if (answerElem.checked) {
            answer = answerElem.id
        }
    });
    return answer; 
};

function deselectAnswers() {
    answerElems.forEach((answerElem) => {
        answerElem.checked = false;
    });
};

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick='location.reload()'>Reload</button>`;
       }                                   
    }
});