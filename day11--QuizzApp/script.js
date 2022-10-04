// create a quizz class

class Quiz {
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;

    }
        //properties
        getQuestionIndex() {
            return this.questions[this.questionIndex]
        }

        guess(answer) {
            if (this.questionIndex().isCorrectAnswer(answer)) {
                this.score++;
            }
            this.questionIndex++;
        }

        isEnded() {
            return this.questionIndex == this.questions.length
        }
}

// create a question class

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    } 

    //properties

    isCorrectAnswer(choice) {
        return this.answer == choice;
    }
}

//display questions

function displayQuestion() {
    if (Quiz.isEnded) {
        showScores()
    }else{
        // show next questions
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options 
        let choices = Quiz.getQuestionIndex().choices;
        for (let i = 0 ; i < choices.length ; i++) {
            let choiceElement = document.getElementById("choice"+i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);

        }

        showProgress();

    }
};

//guess function

function guess (id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quizz.guess(guess);
        displayQuestion();
    }

}

//show quiz progree

function showProgress() {
    let currentQuestionNumber = Quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML= `Question ${currentQuestionNumber} of ${Quiz.question.length}`
}

//show score

function showScore() {
    let quizEndHTML = 
    `
        <h1>Quiz Completed</h1>
        <h2 id="score>You scored : ${Quiz.score} of ${Quiz.question.length}</h2>
        <div class="quizz-repeat">
            <a href="index.html">Take Quiz Again</a>
        </div>
    `;

    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
}

