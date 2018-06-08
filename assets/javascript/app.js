// array of questions
var questions = [{
    ques: "Who is the half-blood prince?",
    ans: ["Harry Potter", "Ronald Weasley", "Severus Snape", "Neville Longbottom"],
    name: "halfBlood",
    correct: "Severus Snape",
    divClass: ".halfblood"
},
{
    ques: "Who is the Ravenclaw who loves Raddish earrings?",
    ans: ["Helena Ravenclaw", "Luna Lovegood", "Fleur Delacour", "Cho Chang"],
    name: "ravenclaw",
    correct: "Luna Lovegood",
    divClass: ".ravenclaw"
},
{
    ques: "What is Harry Potter's Patronus?",
    ans: ["Otter", "Phoenix", "Doe", "Stag"],
    name: "patronus",
    correct: "Stag",
    divClass: ".patronus"
},
{
    ques: "Where does Harry find Ginny?",
    ans: ["Chamber of Secrets", "Slytherin Common Room", "Girls' Lavatory", "Quidditch Field"],
    name: "ginny",
    correct: "Chamber of Secrets",
    divClass: ".ginny"
},
{

    ques: "Who killed Dumbledore?",
    ans: ["Draco Malfoy", "Harry Potter", "Severus Snape", "Hagrid"],
    name: "dumbledore",
    correct: "Severus Snape",
    divClass: ".dumbledore"
}
];

var labels = ["first", "second", "third", "forth"];


// click to start then display questions
var startGame = $("#start-btn").on('click', function () {
    console.log("start game")
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

// function for displaying questions
var questionDisplay = function () {
    // $(".questions :not('#sub-but')").remove();
    // loops through the 5 questions 

    // For loop that was there before:
    // for (var j = 0; j < questions.length; j++) {
    //     console.log(questions[j])
    //     $('.questions').append('<div class="' + questions[j].name + '"></div>');
    //     $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
    //     // loops through answers for each button
    //     for (var i = 0; i <= 3; i++) {
    //         $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
    //     }
    //     $('.questions').append('<hr />');
    // };

    // start
    for (var i = 0; i < questions.length; i++) {
        var questionDiv = $("<div>");

        questionDiv.text(questions[i].ques);
        $(".questions").append(questionDiv);


        var answerFormDiv = $("<form>");

        for (var y = 0; y < questions[i].ans.length; y++) {
            var answerRadioDiv = $("<input>" + questions[i].ans[y] + "<br>");

            // answerRadioDiv.text(questions[i].ans[y])

            answerRadioDiv.attr({
                "type": "radio",
                "value": questions[i].ans[y],
                "name": questions[i].name

            });
            //    answerFormDiv.append("<br>");
            answerFormDiv.append(answerRadioDiv);


        }

        questionDiv.append(answerFormDiv);
        questionDiv.append("<br>");
    }

    // end

    // Submit button - need an on click but it's below.
    var button = document.createElement("button");
    button.innerHTML = "Submit";
    $(button).css({ "background-color": "mediumpurple" });
    $(button).attr("id", "submitAnswers");
    var body = document.getElementsByTagName("body")[0];

    console.log(body);
    body.appendChild(button);
};



// function for countdown timer
var countdown = function (seconds) {

    var timer = setInterval(function () {
        seconds = seconds - 1;
        $("#timeRemain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            // loop through correctArray & name to match html elements & answers
            for (var i = 0; i < 5; i++) {



                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            // display wrongAnswers
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();

            // alert("Times Up!");
            clearInterval(timer);
            return;
        }
    }, 1000);

    // click event for submit button to stop timer
    $('#submitAnswers').on('click', function () {
        clearInterval(timer);
    })
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = function () {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & name to match html elements & answers
    for (var i = 0; i < 5; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    // once submit is clicked...
    // tests
    // stop timer
    countdown();
    // fade out questions
    $('.container').fadeOut(500);
    // show answerScreen
    $('#answerScreen').show();
    // display correctAnswers
    $('#correctScreen').append(correctAnswers);
    // display wrongAnswers
    $('#wrongScreen').append(wrongAnswers);

};

$(document).on('click', "#submitAnswers", function () {

    gradeQuiz();
})
