/**
 * Created with JetBrains WebStorm.
 * User: pwanwu
 * Date: 18/09/2013
 * Time: 17:41
 * To change this template use File | Settings | File Templates.
 */

var questions = [{
    question: ". What does HTML stand for?",
    choices: ["Home Tool Mark-up Language", "Hyperlinks and Text Mark-up Language", "Hyper Text Mark-up Language", "Huge Text Make-up Language"],
    correctAnswer: 2 //Correct awsner number 0,1,2,3
}, {
    question: "Who is making the Web standards?",
    choices: ["Mozilla", "Google", "Microsoft", "The World Wide Web Consortium"],
    correctAnswer: 3
}, {
    question: "Choose the correct HTML tag for the largest heading",
    choices: ["&lt;heading&gt;", "&lt;head&gt;", "&lt;h6&gt;", "&lt;h1&gt;"],
    correctAnswer: 3
}, {
    question: "What is the correct HTML tag for inserting a line break?",
    choices: ["&lt;lb&gt;", "&lt;br&gt;", "&lt;break&gt;", "&lt;line&gt;"],
    correctAnswer: 2
}, {
    question: "What is the preferred way for adding a background color in HTML?",
    choices: ["&lt;body background=&gt;", "&lt;body &gt;", "&lt;background&gt;yellow&lt;/background&gt;", "&lt;body background=&gt;"],
    correctAnswer: 2
}, {
    question: "Choose the correct HTML tag to make a text bold?",
    choices: ["&lt;bold&gt;", "&lt;head&gt;", "&lt;h6&gt;", "&lt;h1&gt;"],
    correctAnswer: 2
}, {
    question: " Choose the correct HTML tag to make a text italic?",
    choices: ["&lt;i&gt;", "&lt;italic&gt;", "italic/&gt;", "&lt;h1&gt;"],
    correctAnswer: 0
}, {
    question: "What is the correct HTML for creating a hyperlink?",
    choices: ["&lt;a name=&quot;http:&quot;&gt; &lt;/a&gt;", "&lt;a href&quot;http:&quot;&gt; &lt;/a&gt;","&lt;break&gt;", "&lt;line&gt;"],
    correctAnswer: 1
}, {
    question: " How can you create an e-mail link?",
    choices: ["&lt;mail href=&quot;xxx@yyy&quot;&gt;", "&lt;br&gt;", "&lt;a href=&quot;mailto:xxx@yyy&quot;&gt;", "&lt;line&gt;"],
    correctAnswer: 2
}, {
    question: "How can you open a link in a new tab/browser window?",
    choices: ["&lt;lb&gt;", "&lt;a href=&quot;url&quot; new&gt;", "&lt;break&gt;", "&lt;a href=&quot;url&quot; target=&quot;_blank&quot;&gt;"],
    correctAnswer: 3
}, {
    question: " Which of these tags are all <table> tags?",
    choices: ["&lt;table&gt;&lt;head&gt;&lt;tfoot&gt;", " &lt;table&gt;&lt;tr&gt;&lt;td&gt;", "&lt;break&gt;", "&lt;line&gt;"],
    correctAnswer: 1
}, {
    question: "In HTML, inline elements are normally displayed without starting a new line.?",
    choices: ["True", "False", "Both", "None of the Above"],
    correctAnswer: 0
}, {
    question: "How can you make a numbered list?",
    choices: ["&lt;dl&gt;", "&lt;list&gt;", "&lt;ol&gt;", "&lt;ul&gt;"],
    correctAnswer: 2
}, {
    question: "How can you make a bulleted list?",
    choices: ["&lt;ul&gt;", "&lt;list&gt;", "&lt;ol&gt;", "&lt;dl&gt;"],
    correctAnswer: 0
}, {
    question: "What is the correct HTML for making a checkbox?",
    choices: ["&lt;check&gt;", "&lt;input type=&quot;check&quot;&gt;", "lt;input type=&quot;checkbox&quot;&gt;", "&lt;line&gt;"],
    correctAnswer: 2
},{           
    question: "What is the correct HTML for making a drop-down list?",
    choices: ["&lt;list&gt;", "&lt;input type=&quot;list&quot;&gt;", "&lt;select&gt;", "&lt;dl&gt;"],
    correctAnswer: 2
},{           
    question: "What is the correct HTML for making a text area?",
    choices: ["&lt;input type=&quot;textarea&quot;&gt;", "&lt;input type=&quot;textbox&quot;&gt;", "&lt;input type=&quot;text&quot;&gt;", "&lt;textarea&gt;"],
    correctAnswer: 3
},{           
    question: "What is the correct HTML for inserting an image?",
    choices: ["&lt;img src=&quot;image.gif&quot; alt=&quot;MyImage&quot;&gt;", "&lt;image src=&quot;image.gif&quot; alt&quot;MyImage&quot;&gt;", "&lt;input type=&quot;text&quot;&gt;", "&lt;img alt=&quot;MyImage&quot;&gt;image.gif&lt;/img&gt;"],
    correctAnswer: 0
},{           
    question: "What is the correct HTML for inserting a background image?",
    choices: ["&lt;img src=&quot;image.gif&quot; alt=&quot;MyImage&quot;&gt;", "&lt;body background=&quot;background.gif&quot;&gt;", 
              " &lt;background img=&quot;background.gif&quot;&gt;", "&lt;img alt=&quot;MyImage&quot;&gt;image.gif&lt;/img&gt;"],
    correctAnswer: 1
}, {           
    question: "What is the correct HTML for making a text input field?",
    choices: ["&lt;textinput type=&quot;text&quot;&gt;", " &lt;input type=&quot;textfield&quot;&gt;", 
              " &lt;background img=&quot;background.gif&quot;&gt;", "&lt;input type=&quot;text&quot;&gt;"],
    correctAnswer: 3
                           
     
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
    for(var i=0;i<document.getElementsByClassName("points_up").length;i++)
    {
        document.getElementsByClassName("points_up")[i].innerHTML = correctAnswers;
        console.log(i);
    }
}

function hideScore() {
    $(document).find(".result").hide();
}

function changeThis(){
	var formInput = document.getElementById("theInput").value;
	document.getElementById("aboutMe").innerHTML = formInput;
}

function addScore()
{
    obj.score++;
    localStorage.setItem('gameStorage', JSON.stringify(obj));
    console.log(obj);
}


