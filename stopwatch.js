let timerDisplay = document.querySelector(".timer_display");
let stopButton = document.querySelector(".stop_button");
let startButton = document.querySelector(".start_button");
let resetButton = document.querySelector(".reset_button");

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

startButton.addEventListener('click', function(){
    if(timerId != null)
    {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopButton.addEventListener('click', function(){
    clearInterval(timerId);
});

resetButton.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = 0;
    secs = 0;
    mins = 0;
});

function startTimer() {
    msec++;
    if(msec==100)    
    {
        msec = 0;
        secs++;
        if(secs==60)
        {
            secs = 0;
            mins++;
        }
    }
 
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}

