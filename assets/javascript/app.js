// setting up the timer to connect to HTML
document.getElementById('timer').innerHTML = 01 + ":" + 00;
startTimer();

// function for timer to start
function startTimer (){
    var presentTime =
    document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1]- 1));
    if (s==59){m=m-1}

    document.getElementById('timer').innerHTML = m + ":" + s;
    setTimeout(startTimer, 1000);
}

// function for seconds
function checkSecond(sec){
    if (sec < 10 && sec >= 0) {sex = "0" + sec};
    if (sec < 0) {sec = "59"};
    return sec;
}
