// VARIABLES
// Score variables
var finalScore = 0;
var scoreNow = 0;

// HTML elements converted to variables
var startButton = document.querySelector('#start');
var timer = document.querySelector('#timer');

// HTML sections converted to variables
var quizStart = document.querySelector('quiz-start');
var quizQuestions = document.querySelector('quiz-questions');

// Created HTML elements for questions and answers
var questDiv = document.createElement('div'); 
var ansDiv = document.createElement('div'); 

questDiv.setAttribute('class', 'questions');
ansDiv.setAttribute('class', 'answers');

// Created HTML elements for answer options
var answer1 = document.createElement('div'); 
var answer2 = document.createElement('div'); 
var answer3 = document.createElement('div'); 

answer1.setAttribute('class', 'option-1');
answer2.setAttribute('class', 'option-2');
answer3.setAttribute('class', 'option-3');

// QUESTIONS
var questions = [{
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
    // Score reset
    finalScore = 0;
    scoreNow = 0;

    // Hide start elemets when quiz is running
    quizStart.style.display = 'none';

    // Append question divs, add question to page
    quizQuestions.appendChild(questDiv);
    quizQuestions.appendChild(ansDiv);

    questDiv.textContent = question[0].questions;

    // Append answer divs, add answers to page
    ansDiv.appendChild(answer1);
    ansDiv.appendChild(answer2);
    ansDiv.appendChild(answer3);
    
    answer1.textContent = question[0].answers[0];
    answer2.textContent = question[0].answers[1];
    answer3.textContent = question[0].answers[2];
};



// when start button is clicked, timer starts, user is presented with a question

// when question is answered, user is prompted with another question

// when question is answered incorrectly time is subtracted from the timer

// when all questions are answered or timer reaches 0, game over

// when game is over, user is able to save initials and score