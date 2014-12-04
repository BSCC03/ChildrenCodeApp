/**
 * Created with JetBrains WebStorm.
 * User: pwanwu
 * Date: 18/09/2013
 * Time: 17:41
 * To change this template use File | Settings | File Templates.
 */

//var questions = [{
//    question: "What does HTML stand for?",
//    choices: ["Home Tool Mark-up Language", "Hyperlinks and Text Mark-up Language", "Hyper Text Mark-up Language", "Hot Tanned Mannly Lines"],
//    correctAnswer: 2
//}, {
//    question: "Who is making the Web standards?",
//    choices: ["Mozilla", "Google", "Microsoft", "The World Wide Web Consortium"],
//    correctAnswer: 3
//}, {
//    question: "Choose the correct HTML tag for the largest heading",
//    choices: ["&lt;heading&gt;", "&lt;head&gt;", "&lt;h6&gt;", "&lt;h1&gt;"],
//    correctAnswer: 3
//}, {
//    question: "What is the correct HTML tag for inserting a line break?",
//    choices: ["&lt;lb&gt;", "&lt;br&gt;", "&lt;break&gt;", "&lt;line&gt;"],
//    correctAnswer: 0
//}, {
//    question: "What is the preferred way for adding a background color in HTML?",
//    choices: ["&lt;body background=&gt;", "&lt;body &gt;", "&lt;background&gt;yellow&lt;/background&gt;", "&lt;body background=&gt;"],
//    correctAnswer: 3
//}, {
//    question: ". Choose the correct HTML tag to make a text bold",
//    choices: ["&lt;bold&gt;", "&lt;head&gt;", "&lt;h6&gt;", "&lt;h1&gt;"],
//    correctAnswer: 3
//}, {
//    question: "Choose the correct HTML tag for the largest heading",
//    choices: ["&lt;heading&gt;", "&lt;head&gt;", "&lt;h6&gt;", "&lt;h1&gt;"],
//    correctAnswer: 3
//}];

var questions = [{
    question 1: ". What does HTML stand for?",
    choices: ["Home Tool Mark-up Language", "Hyperlinks and Text Mark-up Language", "Hyper Text Mark-up Language", "Huge Text Make-up Language"],
    correctAnswer: 2 //Correct awsner number 0,1,2,3
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

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
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    //Change the text in the next button to ask if user wants to play again
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
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type=&quot;radio" value=' + i + ' name=&quot;dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}
function resetQuiz() {
    currentQuestion = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
    for(var i=0;i<document.getElementsByClassName("points_up").length;i++)
    {
        document.getElementsByClassName("points_up")[i].innerHTML = correctAnswers;
        console.log(i);
    }
    for(var i=1;i<13;i++)
    {
       if (correctAnswers == 5*i) {
            $('.badge'+i).css('-webkit-filter', "grayscale(0)");
        } 
    }
    
//    if (correctAnswers == 5) {
//        $('.badge1').css('-webkit-filter', "grayscale(0)");
//    } else
//    if (correctAnswers == 10) {
//        $('.badge2').css('-webkit-filter', "grayscale(0)");
//    } else
//    if (correctAnswers == 15) {
//        $('.badge3').css('-webkit-filter', "grayscale(0)");
//    } else
}

function hideScore() {
    $(document).find(".result").hide();
}

function changeThis(){
	var formInput = document.getElementById('theInput').value;
	document.getElementsByClassName('username').innerHTML = formInput;
}


