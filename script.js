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
    let rank = "Noob"

    myQuestions.forEach( (currentQuestion, questionNumber) => {

    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
    }
    
    if  (numCorrect === 2 ){
        rank = "Plebian"
    } else if (numCorrect === 3) {
        rank = "Web Researcher"
    }
    else if (numCorrect === 4) {
        rank = "Tanks Fan"
    }
    else if (numCorrect === 5) {
        rank = "History Master"
    }
    });
    resultsContainer.innerHTML = `Your score is ${numCorrect * 20}! Rank: ${rank}!`;
}


const Question1 = [
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
        correctAnswer: "A"
    },
];

const Question2 = [
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
        question: "From which country is the Tiger tank?",
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
            B: "powerful enough to destroy german tank easily",
            C: "cheap and easy to produce/maintain",
        },
        correctAnswer: "C"
    },

];

const Question3 = [
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
        question: "What caliber did the Tiger I had?",
        answers: {
            A: "105 MM cannon",
            B: "128 MM cannon",
            C: "88 MM cannon",
        },
        correctAnswer: "C"
    },
    {
        question: "By definition a tank is?",
        answers: {
            A: "armored fighting vehicle",
            B: "pew pew machine",
            C: "troops carrier"
        },
        correctAnswer: "A"
    },
    {
        question: "which tank is the Russian MBT today?",
        answers: {
            A: "M1A2 Abrams",
            B: "T-90",
            C: "Leopard",
        },
        correctAnswer: "B"
    },
    {
        question: "sloping the tank armor is more effective because?",
        answers: {
            A: "it increases the tank armor effectiveness",
            B: "the bullet can go bbrrr",
            C: "it's a slippery slope",
        },
        correctAnswer: "A"
    },
];

    let myQuestions = ''
    let random = Math.ceil(Math.random()*3)
    if (random === 1) {
        myQuestions = Question1
    } else if (random === 2) {
        myQuestions = Question2
    } else if (random === 3) {
        myQuestions = Question3
    }

buildQuiz();

submitButton.addEventListener('click', showResults);
})();