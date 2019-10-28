$(document).ready(function() {
    const question = [{
                "question": "What is Princess What's Her Name's real name?",
                "correct": 2,
                "answerChoices": ["HEY YOU!", "Chip Butty", "What's Her Name"]
            },
            {
                "question": "Phrase your response in the form of a question.",
                "correct": 1,
                "answerChoices": ["No", "Huh?", "Maybe"]
            },

            {
                "question": "Does misery love company?",
                "correct": 0,
                "answerChoices": ["None of your beeswax", "No, 3 is company", "No, misery is not mature enough to distinguish between a simple-pre adolescent crush and true love"]
            },

            {
                "question": "Use what in place of butter when cooking?",
                "correct": 0,
                "answerChoices": ["Shortening", "Lengthening", "Weasel Feathers"]
            },

            {
                "question": "How many doughnuts in a dozen?",
                "correct": 2,
                "answerChoices": ["Do I have to share them?", "13, if you smile nicely", "8, by the time you get home."]
            },


            {
                "question": "FORE!",
                "correct": 1,
                "answerChoices": ["4", "Nice Shot!", "Four"]
            },

            {
                "question": "Would you like that on account or gift certificate?",
                "correct": 2,
                "answerChoices": ["Gift certificate please", "I'll take the ceramic dalmation for $1500", "On account of I'm cool"]
            },
            {
                "question": "The correct answer is?",
                "correct": 1,
                "answerChoices": ["None of the below", "I'm not really sure", "Neither of the Above"]
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


        qInterval = setTimeout(displayTimeout, 7000)

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

        $("#question").text("Wrong");
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