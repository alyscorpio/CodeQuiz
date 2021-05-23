// VARIABLES
// Score variables
var finalScore = 0;
var scoreNow = 0;

// HTML elements converted to variables
var startButton = document.querySelector('#start');
var timer = document.querySelector('#timer');

// HTML sections converted to variables
var quizStart = document.querySelector('#quiz-start');
var quizQuestions = document.querySelector('#quiz-questions');

// New elements for questions and answers
var questDiv = document.createElement('div'); 
var ansDiv = document.createElement('div'); 

// New elements for answer options
var answer1 = document.createElement('div'); 
var answer2 = document.createElement('div'); 
var answer3 = document.createElement('div'); 
var answer4 = document.createElement('div');

// Assign classes to new elements
questDiv.setAttribute('class', 'questions');
ansDiv.setAttribute('class', 'answers');
answer1.setAttribute('class', 'option-1');
answer2.setAttribute('class', 'option-2');
answer3.setAttribute('class', 'option-3');
answer4.setAttribute('class', 'option-4');


// QUESTIONS
var questions = [{
    questions: 'What HTML element defines a paragraph?',
    answers: ['<paragraph>', '<p1>', '<p>', '<par>'],
    correct: '<p>'
},
{
    questions: 'In CSS, what property specifies the font of a portion of text?',
    answers: ['font', 'font-family', 'font-style', 'font-display'],
    correct: 'font-family'
},
{
    questions: 'In JavaScript, what is the name for a special variable that holds more than one value? (Example: var names = ["John", "Paul", "Ringo"];)',
    answers: ['String', 'Boolean', 'Loop', 'Array'],
    correct: 'Array'
},
{
    questions: 'How can JavaScript access and change elements within an HTML document?',
    answers: ['the DOM', 'jQuery', 'the Server', 'APIs'],
    correct: 'the DOM'
}];


// TIMER
// Function for timer opperation
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
    startQuestions();
};

// Function to start timer when button is clicked
startButton.addEventListener('click', function(){
    startTimer();
});


// QUIZ
// Function to start questions
function startQuestions () {
    // Hide start elemets when quiz is running
    quizStart.style.display = 'none';

    // Score reset
    finalScore = 0;
    scoreNow = 0;

    // Append question divs, add question to page
    quizQuestions.appendChild(questDiv);
    quizQuestions.appendChild(ansDiv);

    questDiv.textContent = questions[0].questions;

    // Append answer divs, add answers to page
    ansDiv.appendChild(answer1);
    ansDiv.appendChild(answer2);
    ansDiv.appendChild(answer3);
    ansDiv.appendChild(answer4);
    
    answer1.textContent = questions[0].answers[0];
    answer2.textContent = questions[0].answers[1];
    answer3.textContent = questions[0].answers[2];
    answer4.textContent = questions[1].answers[3];
};

// Function to move to next question
function nextQuestion() {
    answer1.textContent = questions[1].answers[0];
    answer2.textContent = questions[1].answers[1];
    answer3.textContent = questions[1].answers[2];
    answer4.textContent = questions[1].answers[3];
}

ansDiv.addEventListener('click', nextQuestion);


// when start button is clicked, timer starts, user is presented with a question

// when question is answered, user is prompted with another question

// when question is answered incorrectly time is subtracted from the timer

// when all questions are answered or timer reaches 0, game over

// when game is over, user is able to save initials and score