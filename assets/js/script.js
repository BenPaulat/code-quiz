// define HTML Elements
const questionEl = document.getElementById("question");
const buttConEl = document.getElementById("button-container");
const responseEl = document.getElementById("response");
const optionsEl = document.getElementById("answer-buttons");
const startButtonEl = document.getElementById("start-button");
const timerEl = document.getElementById("time-remaining");

// set variables
var score = 0
var timer = 100
var qNum = 0

// questions as objects
const q0 = {
    question: "____ is the process of finding errors and fixing them within a program.",
    a: "A. Compiling",
    b: "B. Executing",
    c: "C. Debugging",
    d: "D. Scanning",
    answer: "C. Debugging"
}

const q1 = {
    question: "What element is used to store multiple values in a single variable?",
    a: "A. Arrays",
    b: "B. Functions",
    c: "C. Variables",
    d: "D. Strings",
    answer: "A. Arrays"
}

const q2 = {
    question: "The condition in an if/else statement is enclosed with _____.",
    a: "A. quotes",
    b: "B. curly brackets",
    c: "C. parenthesis",
    d: "D. square brackets",
    answer: "C. parenthesis"
}

const q3 = {
    question: "Which tool can you use to ensure code quality?",
    a: "A. Angular",
    b: "B. jQuery",
    c: "C. RequireJS",
    d: "D. ESLint",
    answer: "D. ESLint"
}

let questions = [q0, q1, q2, q3]

// validate user selection
const validateSelection = function(selection) {
    if (selection === questions[qNum].answer) {
        score+= 10;
        responseEl.textContent = "Correct!";
    } else {
        timer-= 10;
        timerEl.textContent = timer;
        responseEl.textContent = "Wrong!";
    }

    qNum++;

    answerSubmit()
}

// Funtion to run quiz
const answerSubmit = function() {

    // check question number
    if (qNum < questions.length) {
    while (buttConEl.firstChild) {
        buttConEl.removeChild(buttConEl.firstChild);
        }
    } else if (qNum = questions.length) {
        while (buttConEl.firstChild) {
            buttConEl.removeChild(buttConEl.firstChild);
            }
        return questionEl.textContent = "You have completed the quiz! Thank you for your participation! Refresh the page to take again."
    }

    // update question and options
    questionEl.textContent = questions[qNum].question;

    var optA = document.createElement("button")
        optA.className ="btn";
        optA.id ="answer-buttons";
        optA.textContent = questions[qNum].a
    var optB = document.createElement("button");
        optB.className ="btn";
        optB.id ="answer-buttons";
        optB.textContent = questions[qNum].b
    var optC = document.createElement("button");
        optC.className ="btn";
        optC.id ="answer-buttons";
        optC.textContent = questions[qNum].c
    var optD = document.createElement("button");
        optD.className ="btn";
        optD.id ="answer-buttons";
        optD.textContent = questions[qNum].d

    buttConEl.appendChild(optA);
    buttConEl.appendChild(optB);
    buttConEl.appendChild(optC);
    buttConEl.appendChild(optD);
}

    // button selection
    const buttonSelect = function() {
        var userSelect = event.target;
        var selection = userSelect.innerText;
        
        if (userSelect.matches("#start-button")) {
            answerSubmit();
        } else {
            answerSubmit();
            validateSelection(selection);
        }
    }

buttConEl.addEventListener("click", buttonSelect);