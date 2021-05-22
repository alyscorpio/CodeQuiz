// Declare starting variables
var startButton = document.querySelector('#start');
var timer = document.querySelector('#timer');
var quizStart = document.querySelector('quiz-start');
var quizQuestions = document.querySelector('quiz-questions');

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
};

startButton.addEventListener('click', function(){
    startTimer();
});

// when start button is clicked, timer starts, user is presented with a question

// when question is answered, user is prompted with another question

// when question is answered incorrectly time is subtracted from the timer

// when all questions are answered or timer reaches 0, game over

// when game is over, user is able to save initials and score