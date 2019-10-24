const question = [{ "question": "whats my name", "correct": 0, "answerChoices": ["dan", "bill", "dave", "steve"] },
    { "question": "whats my sisters name", "correct": 1, "answerChoices": ["laura", "kelly", "mary", "pat"] }
]

function displayQuestion() {
    const questionDisplay = question[0];
    $("#question").text(questionDisplay.question)
    for (let i = 0; i < questionDisplay.answerChoices.length; i++) {
        $("#answers").append("<h2>" + questionDisplay.answerChoices[i] + "</h2>")
    }
}

displayQuestion()