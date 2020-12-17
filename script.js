const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('wrapper');
const submitButton = document.getElementById('submit');

(function(){
function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
    (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]} 
            </label>`
        );
        }

        // add this question and its answers to the output
        output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
        );
    }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    let rank = "noob"

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
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
    // show number of correct answers out of total
    resultsContainer.innerHTML = `Your score is ${numCorrect * 10}! Rank: ${rank}`;

}

// const myQuestions = Math.ceil(Math.random(pertanyaan)* 5)
const myQuestions = [
    {
        question: "What Tank is shown above?",
        answers: {
            a: "AMX-13",
            b: "M1 Abrams",
            c: "T-90",
        },
        correctAnswer: "a"
    },
    {
    question: "When was tank first appeared?",
    answers: {
        a: "World War I",
        b: "world War II",
        c: "Idk, when war happened... I guess?"
    },
    correctAnswer: "a"
    },
    {
    question: "Which country invented the tank?",
    answers: {
        a: "Some wack country",
        b: "Germany",
        c: "British"
    },
    correctAnswer: "c"
    },
    {
    question: "Which tank is named after a general?",
    answers: {
        a: "Abrams",
        b: "Patton",
        c: "Panzerkampfwagen",
    },
    correctAnswer: "b"
    },
    {
        question: "In WW2, which tank was used in Indonesia by the allies?",
        answers: {
            a: "M4 sherman",
            b: "Sturmgeschütz",
            c: "M1 Abrams",
        },
        correctAnswer: "a"
    },
    {
        question: "The Tiger tank is from....?",
        answers: {
            a: "Germany",
            b: "USA",
            c: "France",
        },
        correctAnswer: "a"
    },
    
    {
        question: "Why are the allies scared of the Soviet tanks?",
        answers: {
            a: "stalin is on their side",
            b: "It has sloped and thick armor and powerful gun",
            c: "It has ICBM mounted on their turrets",
        },
        correctAnswer: "b"
    },
    
    {
        question: "Which statement is true?",
        answers: {
            a: "Smooth bore barrel offers more accuracy",
            b: "Rifled barrel offers more accuracy",
            c: "None of the above",
        },
        correctAnswer: "b"
    },
    
    {
        question: "T-34 is...",
        answers: {
            a: "a failed tank example",
            b: "can destroy german tank easily",
            c: "cheap and easy to produce/maintain",
        },
        correctAnswer: "c"
    },
    {
        question: "The M4 Sherman used the.... suspension system",
        answers: {
            a: "leaf",
            b: "spring",
            c: "The Vertical Volute Spring",
        },
        correctAnswer: "c"
    },
];

// Kick things off
buildQuiz();


// Event listeners
submitButton.addEventListener('click', showResults);
})();