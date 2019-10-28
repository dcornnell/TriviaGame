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

    let score = 0;
    let gameOver = false;

    displayQuestion();



    //FUNCTIONS

    //displays a question

    function displayQuestion() {
        $("#status").empty()

        clearDisplay()
        qInterval = setTimeout(displayTimeout, 3000)

        if (gameOver) {
            displayScore()
        } else {
            const questionDisplay = question[count];
            $("#question").text(questionDisplay.question);
            for (let i = 0; i < questionDisplay.answerChoices.length; i++) {
                button = $("<button>");
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

    // waits a set amount of time then displays the next questions

    function nextQuestion() {

        count++

        if (count === question.length) {
            gameOver = true;
        }

        displayQuestion();

    }

    function isCorrect(choice, answer) {

        if ((parseInt(choice)) === answer) {

            score++;

            displayCorrect();


        } else {
            displayWrong();
        }
    }

    function displayScore() {
        $("#status").text("your score was= " + score + "/" + question.length)
        clearTimeout(qInterval)


    }

    function displayCorrect() {

        $("#status").text("Correct");
        clearDisplay();
        setTimeout(nextQuestion, 3000);
    }

    function displayWrong() {

        $("#status").text("Wrong")
        clearDisplay();
        setTimeout(nextQuestion, 3000);

    }

    function displayTimeout() {
        $("#status").text("to slow")
        console.log("to slow")
        clearDisplay()
        setTimeout(nextQuestion, 3000)

    }

    function clearDisplay() {
        $("#question").empty();
        $("#answers").empty();
    }
})