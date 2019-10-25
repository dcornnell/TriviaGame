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
    displayQuestion();





    function displayQuestion() {
        $("#answers").empty();
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
        if (count === question.length) {
            displayScore()
        }
    }

    function isCorrect(choice, answer) {

        if ((parseInt(choice)) === answer) {
            console.log("thats the right answer")
        } else {
            console.log("wrong answer")
        }
    }

    function displayScore() {
        console.log("you did it");
        clearInterval(qInterval);
    }

})