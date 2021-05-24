// VARIABLES
var startButton = document.querySelector('#start');
var timer = document.querySelector('#timer');

var quizHead = document.querySelector('#quiz-head');

var quizLocation = 0;
var correct = 0;
var quizContent, quizStatus, question, answers, correct, answer1, answer2, answer3, answer4;

startButton.addEventListener('click', function() {
    startTimer();
});

// TIMER
function startTimer() {
    var countDown = 60;

    var timerInterval = setInterval(function () {
        if (countDown > 1) {
            countDown--;
            timer.textContent = 'Time: ' + countDown + ' seconds';
        }
        else {
            timer.textContent = 'Quiz Over!';
            clearInterval(timerInterval)
        }
    }, 1000)
    askQuestion();
};

//QUIZ
function get(x) {
    return document.getElementById(x);
};

// questions
var questions = [
    {
    question: 'What HTML element defines a paragraph?',
    answers: ['<paragraph>', '<p1>', '<p>', '<par>'],
    correct: '<p>'
    },
    {
    question: 'In CSS, what property specifies the font of a portion of text?',
    answers: ['font', 'font-family', 'font-style', 'font-display'],
    correct: 'font-family'
    },
    {
    question: 'In JavaScript, what is the name for a special variable that holds more than one value? (Example: var names = ["John", "Paul", "Ringo"];)',
    answers: ['String', 'Boolean', 'Loop', 'Array'],
    correct: 'Array'
    },
    {
    question: 'How can JavaScript access and change elements within an HTML document?',
    answers: ['the DOM', 'jQuery', 'the Server', 'APIs'],
    correct: 'the DOM'
    }
];

function get(x) {
    return document.getElementById(x);
}

function askQuestion() {

    quizHead.style.display = 'none';

    quizContent = get('quiz-content');
    if (quizLocation >= questions.length) {
        quizContent.innerHTML = '<h2>QUIZ OVER</h2>';
        get('quiz-status').innerHTML = 'quiz complete';
        quizLocation = 0;
        correct = 0;
        return false;
    }

    get('quiz-status').innerHTML = "Question "+(quizLocation+1)+" of "+questions.length;

    var question = questions[quizLocation].question;
    var answer1 = questions[quizLocation].answers[0].question[1];
    var answer2 = questions[quizLocation].answers[1].question[1];
    var answer3 = questions[quizLocation].answers[2].question[1];
    var answer4 = questions[quizLocation].answers[3].question[1];
    
    quizContent.innerHTML = '<h3>'+question+'</h3';

    quizContent.innerHTML += "<button id='answer-button'>"+answer1+"</button>";
    quizContent.innerHTML += "<button id='answer-button'>"+answer2+"</button>";
    quizContent.innerHTML += "<button id='answer-button'>"+answer3+"</button>";
    quizContent.innerHTML += "<button id='answer-button'>"+answer4+"</button>";
    
    var answerButton = document.getElementById('#answerButton');

    // answerButton.addEventListener('click', checkAnswer());
}

// function checkAnswer() {
//     options = document.getElementByName('options');
//     for (var i = 0; i < options.length; i++) {
//         if (options[i].checked) {
//             option = options[i].value;
//         }
//     }
//     if (option == questions[quizLocation].correct) {
//         correct++;
//     }
//     quizLocation++;

//     askQuestion ();
// }
// VARIABLES
// Score variables
// var finalScore = 0;
// var scoreNow = 0;

// // HTML elements converted to variables
// var startButton = document.querySelector('#start');
// var timer = document.querySelector('#timer');

// // HTML sections converted to variables
// var quizHead = document.querySelector('#quiz-head');
// var quizContent = document.querySelector('#quiz-content');

// var quizQuestion = document.querySelector('#question');

// var answer1 = document.querySelector('#answer1');
// var answer2 = document.querySelector('#answer2');
// var answer3 = document.querySelector('#answer3');
// var answer4 = document.querySelector('#answer4');

// // New elements for questions and answers
// var questDiv = document.createElement('div'); 
// var ansDiv = document.createElement('div'); 

// // New elements for answer options
// var answers1 = document.createElement('div'); 
// var answers2 = document.createElement('div'); 
// var answers3 = document.createElement('div'); 
// var answers4 = document.createElement('div');

// // Assign classes to new elements
// questDiv.setAttribute('class', 'questions');
// ansDiv.setAttribute('class', 'answers');
// answers1.setAttribute('class', 'option-1');
// answers2.setAttribute('class', 'option-2');
// answers3.setAttribute('class', 'option-3');
// answers4.setAttribute('class', 'option-4');


// QUIZ
// Function to start questions
// function startQuestions () {
//     // Hide start elemets when quiz is runnings
//     quizHead.style.display = 'none';

//     // Score reset
//     finalScore = 0;
//     scoreNow = 0;

//     // Append question divs, add question to page
    
//     // Append answer divs, add answers to page
//     ansDiv.appendChild(answers1);
//     ansDiv.appendChild(answers2);
//     ansDiv.appendChild(answers3);
//     ansDiv.appendChild(answers4);
    
//     questDiv.textContent = questions[i].quiz;

    // answer1.textContent = questions [i++].answers[0];
    // answer1.textContent = questions [i++].answers[1];
    // answer1.textContent = questions [i++].answers[2];
    // answer1.textContent = questions [i++].answers[3];
// };

// TIMER
// Function for timer opperation


// Function to start timer when button is clicked
// startButton.addEventListener('click', function(){
//     startTimer();
// });

// // Function to move to next question
// function nextQuestion() {
//     questionDiv.textContent = questions[1].answers[0]
//     questionDiv.textContent = questions[1].answers[1]
//     questionDiv.textContent = questions[1].answers[2]
//     questionDiv.textContent = questions[1].answers[3]
// };

// ansDiv.addEventListener('click', nextQuestion);


// when start button is clicked, timer starts, user is presented with a question

// when question is answered, user is prompted with another question

// when question is answered incorrectly time is subtracted from the timer

// when all questions are answered or timer reaches 0, game over

// when game is over, user is able to save initials and score