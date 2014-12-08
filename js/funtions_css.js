/**
 * Created with JetBrains WebStorm.
 * User: pwanwu
 * Date: 18/09/2013
 * Time: 17:41
 * To change this template use File | Settings | File Templates.
 */

var questions = [{
    question: "What does CSS stand for?",
    choices: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    correctAnswer: 2 
}, {
    question: "What is the correct HTML for referring to an external style sheet?",
    choices: ["&lt;style src=&quot;mystyle.css&quot;&gt;", "&lt;stylesheet&gt;mystyle.css&lt;/stylesheet&gt;", "&lt;style sr=&quot;mystyle.cssss&quot;&gt;", "&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;mystyle.css&quot;&gt;"],
    correctAnswer: 3
}, {
    question: "Where in an HTML document is the correct place to refer to an external style sheet?",
    choices: ["In the &lt;body&gt; section", "In the &lt;head&gt; section", "At the top of the document", 
    "At the end of the document"],
    correctAnswer: 1
}, {
    question: "Which HTML tag is used to define an internal style sheet?",
    choices: ["&lt;css&gt;", "&lt;style&gt;", " &lt;script&gt;", "&lt;line&gt;"],
    correctAnswer: 1
}, {
    question: "Which HTML attribute is used to define inline styles?",
    choices: ["Style", "styles", "class", "font"],
    correctAnswer: 0
}, {
    question: "Which is the correct CSS syntax?",
    choices: [" body {color: black;}", "body:color=black;", " {body;color:black;}", "&lt;h1&gt;"],
    correctAnswer: 0
}, {
    question: "How do you insert a comment in a CSS file",
    choices: ["// this is a comment", "/* this is a comment */", "italic/&gt;", "// this is a comment //"],
    correctAnswer: 1    
}, {
    question: "Which property is used to change the background color?",
    choices: ["Color", "Bgcolor","Background-color", "Backgroundcolor"],
    correctAnswer: 2
}, {
    question: "How do you add a background color for all <h1> elements?",
    choices: ["h1 {background-color:#FFFFFF;}", "h1.all {background-color:#FFFFFF;}", "all.h1 {background-color:#FFFFFF;}", "&lt;line&gt;"],
    correctAnswer: 0
}, {
    question: "Which CSS property is used to change the text color of an element?",
    choices: ["text-color", "color", "fgcolor", "bgcolor"],
    correctAnswer: 1
}, {
    question: "Which CSS property controls the text size?",
    choices: ["font-style", "text-size", "text-style", "font-size"],
    correctAnswer: 3
}, {
    question: "What is the correct CSS syntax for making all the <p> elements bold?",
    choices: ["&lt;p &gt;", "&lt;p &gt;", " p {text-size:bold;}", "p {font-weight:bold;}"],
    correctAnswer: 3
}, {
    question: "How do you display hyperlinks without an underline",
    choices: ["a {text-decoration:none;}", "a {decoration:no-underline;}", "& a {underline:none;}", " a {text-decoration:no-underline}"],
    correctAnswer: 0
}, {
    question: "How do you make each word in a text start with a capital letter?",
    choices: ["text-transform:uppercase", "You can't do that with CSS", "Text-transform:capitalize", "text-transform:lowercase"],
    correctAnswer: 2
}, {
    question: "Which property is used to change the font of an element?",
    choices: ["font", "font-family", "Both font-family and font can be used", "None of the above"],
    correctAnswer: 2
},{           
    question: "How do you make the text bold?",
    choices: ["font:bold;", "style:bold;", "font-weight:bold;", "weight:bold;"],
    correctAnswer: 2
},{           
    question: "How do you display a border like this<br/>The top border = ten pixels<br/>The bottom border = five pixele<br/>The left border = twenty pixels<br/>The right border = one pixel?",
    choices: ["border-width:10px 1px 5px 20px;", "border-width:10px 20px 5px 1px;", "border-width:10px 5px 20px 1px;", "border-width:5px 20px 10px 1px;"],
    correctAnswer: 0
},{           
    question: "How do you change the left margin of an element?",
    choices: ["Indent", "padding-left", "margin-left", "margin-right"],
    correctAnswer: 2
},{           
    question: "To define the space between the element's border and content, you use the padding property, but are you allowed to use negative values?",    
    choices: ["No", "Yes", " None of the above", "Both"],
    correctAnswer: 0
}, {           
    question: "How do you make a list that lists its items with squares?",
    choices: ["list-style-type: square;", " list-type: square;", 
              " list: square;", "list-: square;"],
    correctAnswer: 0                      
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
}

function hideScore() {
    $(document).find(".result").hide();
}

function changeThis(){
	var formInput = document.getElementById("theInput").value;
	document.getElementById("aboutMe").innerHTML = formInput;
}


