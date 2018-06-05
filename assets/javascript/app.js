// array of questions
var questions = [{
    ques: "Who is the half-blood prince?",
    ans: ["Harry Potter", "Ronald Weasley", "Severus Snape", "Neville Longbottom"],
    name: "halfBlood",
    correct: "Severus Snap",
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
]

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();
    // loops through the 3 questions 
    for (var j = 0; j < 3; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        // loops through answers for each radio button
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}


// function for countdown timer
var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            // loop through correctArray & radioName to match html elements & answers
            for (var i = 0; i < 3; i++) {

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
    $('#sub-but').on('click', function() {
        clearInterval(timer);
    })
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 3; i++) {

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

}); 
// click start
// var startGame = $("start-btn").on('click', function () {
//     $(this).parent().hide();
//     $('.container').show();
//     countdown(60);
//     questionDisplay();
// });

// // function to display questions
// var questionDisplay = function () {
//     $(".questions :not('#sub-but')").empty();
//     // loop through the 3 questions
//     for (var i = 0; i < 3; i++) {
//         $('.questions').prepend('<div class="' + questions[i].name + '"></div>');
//         // loops through answers for each radio button
//         for (var h = 0; h <= 3; i++) {
//             $(questions[h].divClass).append('<input type="radio"  name="' + questions[i].name + '" value="' + questions[i].ans[h] + '"/><label for="' + labels[i] + '">' + questions[i].ans[h] + '</label>');
//         }
//         $('.questions').prepend('<hr />');
//     }
// };
// // timer
// var countdown = function (seconds) {
//     var timer = setInterval(funcation() {
//         seconds = seconds - 1;
//         $('#timeRemain').html(seconds);
        
//         if(seconds <= 0) {
//             $('.container').fadeOut(500);
//     var correctAnswers = 0;
//     var wrongAnswers = 0;
//     var unAnswered = 0;
//     // loop though correctArray and radioName to match html elements and answers
//     for (var i = 0; i < 3; i++) {
//         if ($('inputLradio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
//             correctAnswers++;
//             console.log("this is correct! numbeR:" + i)
//         }
//         else {
//             console.log("this is wrong! number:" + i)
//         };
//     }
//     $('#correctTimesUp').append(correctAnswers);
//     // display wrongAnswers
//     $('#wrongTimesUp').append(wrongAnswers);
//     $('#timesUp').fadeIn(1000).show();

//     // alert for Times up!
//     clearinterval(timer);
//     return;
// }
//     }, 1000);
// // to submit and stop timer
// $('#sub-but').on('click', function () {
//     clearInterval(timer);
// })
// };

// // to grade quiz when the submit button is pushed
// var gradeQuiz = $('#sub-but').on('click', function () {
//     var correctAnswers = 0;
//     var wrongAnswers = 0;
//     var unAnswered = 0;

//     // loop through correct and radioName 
//     for (var i = 0; i < 3; i++) {
//         if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
//             correctAnswers++;
//         } else {
//             wrongAnswers++;
//         };
//     };
//     // stop timer
//     countdown();
//     // fade questions out
//     $('.container').fadeOut(500);
//     // answer screen
//     $('#answerScreen').append(correctAnswers);
//     // display wrong answers
//     $('#wrongScreen').append(wrongAnswers);
// });
