$(document).ready(function() {
    const question = [{ "question": "whats my name", "correct": 0, "answerChoices": ["dan", "bill", "dave", "steve"] },
        { "question": "whats my sisters name", "correct": 1, "answerChoices": ["laura", "kelly", "mary", "pat"] }
    ]



    displayQuestion()



    function displayQuestion() {
        const questionDisplay = question[0];
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
    }

    function isCorrect(choice, answer) {

        if ((parseInt(choice)) === answer) {
            console.log("thats the right answer")
        } else {
            console.log("wrong answer")
        }
    }


})