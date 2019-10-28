$(document).ready(function() {
    const question = [{
                "question": "whats my name",
                "correct": 0,
                "answerChoices": ["dan", "bill", "dave", "steve"]
            },
            {
                "question": "whats my sisters name",
                "correct": 1,
                "answerChoices": ["laura", "kelly", "mary", "pat"]
            },

            {
                "question": "whats my brothers name?",
                "correct": 2,
                "answerChoices": ["bill", "steve", "brian", "bananaman"]
            }
        ]
        //keeps track of what question we are on
    let count = 0;
    let qInterval;
    // number of correct answers
    let score = 0;
    let gameOver = false;
    let currentCorrect;


    displayQuestion();



    //FUNCTIONS

    //displays a question

    function displayQuestion() {
        $("#status").empty()
        $("#answers").empty()


        qInterval = setTimeout(displayTimeout, 3000)

        if (gameOver) {
            displayScore()
        } else {
            const questionDisplay = question[count];
            currentCorrect = questionDisplay.answerChoices[[question[count].correct]]
            $("#question").text(questionDisplay.question);
            for (let i = 0; i < questionDisplay.answerChoices.length; i++) {
                button = $("<button>");
                button.addClass("button expanded");
                button.val(i);
                button.text(questionDisplay.answerChoices[i]);
                $("#answers").append(button);

            }

            $("button").on("click", function() {
                clearTimeout(qInterval);
                isCorrect($(this).val(), questionDisplay.correct)
            })


        }
    }

    //increase the question count and check if the last question

    function nextQuestion() {

        count++

        if (count === question.length) {
            gameOver = true;
        }

        displayQuestion();

    }
    // check if the answer selected is the correct one

    function isCorrect(choice, answer) {

        if ((parseInt(choice)) === answer) {

            score++;

            displayCorrect();


        } else {
            displayWrong();
        }


    }
    // display the final screen

    function displayScore() {
        console.log("hello")
        $("#question").text("You're all done!")
        $("#answers").text("your score was= " + score + "/" + question.length)
        clearTimeout(qInterval)


    }


    //displayed after correct answer

    function displayCorrect() {

        $("#question").text("Correct");
        $("#answers").text("");
        setTimeout(nextQuestion, 3000);
    }

    //displayed after inccorect answer
    function displayWrong() {

        $("#question").text("wrong");
        $("#answers").text("the correct answer was: " + currentCorrect)

        setTimeout(nextQuestion, 3000);

    }

    // displays if no answer is given
    function displayTimeout() {
        $("#question").text("Times up!")
        $("#answers").text(currentCorrect + " was the correct answer")


        setTimeout(nextQuestion, 3000)

    }



})