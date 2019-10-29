# Trivia Game

## About
    A simple quiz game made to work with javascript timers, jquery click events and dom manipulation. The questions aren't mine, they are from the Earth Worm Jim video game.
## Technologies used:
    - html
    - css
    - foundation
    - javascript
    - jquery

## sudo code
const questions  [{question:text of question, 
                   correctAnswer:1, 
                   answerchoices:["answer choice 1", "answer choice 2", "answer choice3", "answer choice4"],[],[],[]}
}

let correctAnswers
let questioncount = questions.length

function nextquestion(){
    wait some time....
    dispalyQuestions
}

function displayQuestion(){
    start timer
     if correct answer
         correctAnswer++
        "you got it right"
        checkGameover
        
    else if
        "you got it wrong"
        checkGameover
    else 
        "your out of time"
        checkGameover
        

function checkGameover(){
    if (number of question === quesitons.length
        display results
        
    } else
        nextquestion()


grab random question
    displayQuestion()






