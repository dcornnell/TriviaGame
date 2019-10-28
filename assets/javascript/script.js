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
    displayQuestion();





    function displayQuestion() {
        $("#status,#question,#answers").empty();



        const questionDisplay = question[count];
        $("#question").text(questionDisplay.question);
        for (let i = 0; i < questionDisplay.answerChoices.length; i++) {
            button = $("<button>");
            button.val(i);
            button.text(questionDisplay.answerChoices[i]);
            $("#answers").append(button);

        }

        $("button").on("click", function() {

            isCorrect($(this).val(), questionDisplay.correct)
        })

        nextQuestion()
    }

    function nextQuestion() {

        qInterval = setTimeout(displayQuestion, 3000)
        count++
        if (count === question.length + 1) {
            displayScore()
        }
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
        console.log("you did it, your score was " + score);

        clearInterval(qInterval);
    }

    function displayCorrect() {

        $("#status").text("Correct");
        $("#question").empty();
        $("#answers").empty();

    }

    function displayWrong() {

        $("#status").text("Wrong")
        $("#question").empty();
        $("#answers").empty();

    }
})