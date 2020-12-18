const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('wrapper');
const submitButton = document.getElementById('submit');

(function(){
function buildQuiz(){
    const output = [];
    myQuestions.forEach(
    (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
        answers.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter}:
            ${currentQuestion.answers[letter]} 
            </label>`
        );
        }
        output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
        );
    }
    );
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    let rank = "noob"
    myQuestions.forEach( (currentQuestion, questionNumber) => {

    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
    }
    
    if  (numCorrect >= 3 && numCorrect <= 5 ){
        rank = "plebian"
    } else if (numCorrect === 6 || numCorrect === 7) {
        rank = "web researcher"
    }
    else if (numCorrect === 8 || numCorrect === 9) {
        rank = "Tanks fan"
    }
    else if (numCorrect === 10) {
        rank = "History Master!"
    }
    });
    resultsContainer.innerHTML = `Your score is ${numCorrect * 10}! Rank: ${rank}`;
}

const myQuestions = [
    {
        question: "What Tank is shown above?",
        answers: {
            A: "AMX-13",
            B: "M1 Abrams",
            C: "T-90",
        },
        correctAnswer: "A"
    },
    {
    question: "When was tank first appeared?",
    answers: {
        A: "World War I",
        B: "world War II",
        C: "Idk, when war happened... I guess?"
    },
    correctAnswer: "A"
    },
    {
    question: "Which country invented the tank?",
    answers: {
        A: "Some wack country",
        B: "Germany",
        C: "British"
    },
    correctAnswer: "C"
    },
    {
    question: "Which tank is named after a general?",
    answers: {
        A: "Abrams",
        B: "Patton",
        C: "Panzerkampfwagen",
    },
    correctAnswer: "B"
    },
    {
        question: "In WW2, which tank was used in Indonesia by the allies?",
        answers: {
            A: "M4 sherman",
            B: "Sturmgeschütz",
            C: "M1 Abrams",
        },
        correctAnswer: "a"
    },
    {
        question: "The Tiger tank is from....?",
        answers: {
            A: "Germany",
            B: "USA",
            C: "France",
        },
        correctAnswer: "A"
    },
    
    {
        question: "Why are the allies scared of the Soviet tanks?",
        answers: {
            A: "stalin is on their side",
            B: "It has sloped and thick armor and powerful gun",
            C: "It has ICBM mounted on their turrets",
        },
        correctAnswer: "B"
    },
    
    {
        question: "Which statement is true?",
        answers: {
            A: "Smooth bore barrel offers more accuracy",
            B: "Rifled barrel offers more accuracy",
            C: "None of the above",
        },
        correctAnswer: "B"
    },
    
    {
        question: "T-34 is...",
        answers: {
            A: "a failed tank example",
            B: "can destroy german tank easily",
            C: "cheap and easy to produce/maintain",
        },
        correctAnswer: "C"
    },
    {
        question: "The M4 Sherman use the.... suspension system",
        answers: {
            A: "leaf",
            B: "spring",
            C: "The Vertical Volute Spring",
        },
        correctAnswer: "C"
    },
];

buildQuiz();

submitButton.addEventListener('click', showResults);
})();