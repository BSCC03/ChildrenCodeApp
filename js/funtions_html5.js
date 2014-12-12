/**
 * Created with JetBrains WebStorm.
 * User: pwanwu
 * Date: 18/09/2013
 * Time: 17:41
 * To change this template use File | Settings | File Templates.
 */

var questions = [{
    question: "Which doctype is correct for HTML5?",
    choices: ["&lt;! DOCTYPE HTML PUBLIC &quot;- &quot; &quot;&quot;&gt;", "&lt;!DOCTYPE html&gt", " &lt;!DOCTYPE HTML5&gt", "HTML 4.9"],
    correctAnswer: 1 
}, {
    question: "Which HTML5 element is used to specify a footer for a document or section?",
    choices: ["&lt;footer&gt;", "&lt;section&gt;", "&lt;bottom&gt;", "&lt;h1&gt;"],
    correctAnswer: 0
}, {
    question: "n HTML5, onblur and onfocus are?",
    choices: ["Style attributes", "Event attributes", "HTML elements", "HTML 5 elements"],
    correctAnswer: 1
}, {
    question: "What is the correct HTML5 element for playing video files?",
    choices: ["&lt;video&gt;", "&lt;media&gt;", "&lt;movie&gt;", "&lt;line&gt;"],
    correctAnswer: 0
}, {
    question: "What is the correct HTML5 element for playing audio files?",
    choices: ["&lt;mp3&gt;", "&lt;sound&gt;", " &lt;audio&gt;", "&lt;body background=&gt;"],
    correctAnswer: 2
}, {
    question: " Which attribute for <script> elements is no longer required in HTML5?",
    choices: ["Rel", "Type", "Href", "Src"],
    correctAnswer: 1
}, {
    question: "In HTML5, which method is used to get the current location of a user?",
    choices: ["getUserPosition", "getCurrentPosition", "getPosition<a name=&quot;_GoBack&quot;></a>", "&lt;h1&gt;"],
    correctAnswer: 1  
    }];

var correctAnswers = JSON.parse(localStorage.getItem('gameProgress'));
var currentQuestion = 0;
var quizOver = false;

if(correctAnswers == null)
    {
        correctAnswers = 0;
        localStorage.setItem('gameProgress',JSON.stringify(correctAnswers));
    }
    else
    {
        console.log(correctAnswers);
    }

$(document).ready(function () {
    
    for(var i=0;i<document.getElementsByClassName("points_up").length;i++) {
        document.getElementsByClassName("points_up")[i].innerHTML = correctAnswers;
        console.log(i);
    }
    for(var i=1;i<13;i++) {
       if (correctAnswers >= 5*i) {
            $('.badge'+i).css('-webkit-filter', "grayscale(0)");
        } 
    }

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                    localStorage.setItem('gameProgress',JSON.stringify(correctAnswers));
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".ui-button-text").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".ui-button-text").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("input").remove();
    $(choiceList).find("label").remove();
    $(choiceList).find("fieldset").remove();
    

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<div data-role="controlgroup"><input type="radio" value=' + i + ' name="radio-choice" id="radio-choice-'+i+'" /><label for="radio-choice-'+i+'">' + choice + '</label></div>').appendTo(choiceList);
    }
//    $("input[type='radio']").checkboxradio().checkboxradio("refresh"); 
    $(".choiceList").trigger('refresh');
    $(".choiceList").trigger('create');
}

function resetQuiz() {
    currentQuestion = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
    for(var i=1;i<13;i++)
    {
       if (correctAnswers == 5*i) {
            $('.badge'+i).css('-webkit-filter', "grayscale(0)");
        } 
    }
}

function hideScore() {
    $(document).find(".result").hide();
}

function changeThis(){
	var formInput = document.getElementById("theInput").value;
	document.getElementById("aboutMe").innerHTML = formInput;
}


