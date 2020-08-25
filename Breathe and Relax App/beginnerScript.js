let container = document.querySelector('.container')
let text = document.querySelector('#text')

let totalTime = 10000
let breatheTime = totalTime / 2
let holdTime = 0

let breatheTimeout = null;

let breatheInterval = null;

function breatheAnimation() {
    text.innerHTML = 'Breathe In!'
    container.className = 'container grow'

    breatheTimeout = setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe Out!'
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)
}

// define variables to hold time values
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

// define vars to hold display value
let displayMilliseconds = 0;
let displaySeconds = 0;
let displayMinutes = 0;

// define var to hold setInterval() function
let interval = null;

// define var to hold stopwatch status
let status = "stopped";

// stopwatch function (logic to determine when to increment next value)
function stopwatch() {
    milliseconds++;

    // logic to determine when to increment next value
    if(milliseconds / 100 === 1) {
        milliseconds = 0;
        seconds++;

        if(seconds / 60 === 1) {
            seconds = 0;
            minutes++;

            if(minutes === 5) {
                window.clearInterval(interval);
                document.getElementById("startStop").innerHTML = "Start";
                status = "stopped";
                window.clearInterval(breatheInterval);
                window.clearTimeout(breatheTimeout);
                document.getElementById("pointer-container").style.animationPlayState = "paused";
                document.getElementById("display").innerHTML = "00:00:00";
                document.getElementById("pointer-container").style.animationName = "none";
                milliseconds = 0;
                seconds = 0;
                minutes = 0;
            }
        }
    }

    // if milliseconds/seconds/minutes are only one digit, add a leading 0 to the value
    if(milliseconds < 10) {
        displayMilliseconds = "0" + milliseconds.toString();
    }
    else {
        displayMilliseconds = milliseconds;
    }

    if(seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }

    if(minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }

    // display updated time values to user
    document.getElementById("display").innerHTML = displayMinutes + ":" + displaySeconds + ":" + displayMilliseconds;
}

function startStop() {
    if(status === "stopped") {
        // start the stopwatch by calling the setInterval() function
        interval = window.setInterval(stopwatch, 10);
        breatheAnimation();
        breatheInterval = window.setInterval(breatheAnimation, totalTime);
        document.getElementById("pointer-container").style.animationPlayState = "running";
        document.getElementById("pointer-container").style.animationName = "rotate";
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else {
        window.clearInterval(interval);
        window.clearInterval(breatheInterval);
        window.clearTimeout(breatheTimeout);
        document.getElementById("pointer-container").style.animationPlayState = "paused";
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }
}

// function to reset stopwatch
function reset() {
    window.clearInterval(interval);
    window.clearInterval(breatheInterval);
    window.clearTimeout(breatheTimeout);
    document.getElementById("pointer-container").style.animationName = "none";
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
    text.innerHTML = 'Welcome!';
}

// modal js

//get modal element
var modal = document.getElementById('simpleModal');
//get open modal button
var infoBtn = document.getElementById('infoBtn');
//get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0]; //getElementsByClassName creates an array hence choosing 0

//listen for open click
infoBtn.addEventListener('click', openModal);
//listen for close click
closeBtn.addEventListener('click', closeModal);
//listen for outside click
window.addEventListener('click', outsideClick);

//function to open modal
function openModal() {
    modal.style.display = 'block';
}

//function to close modal
function closeModal() {
    modal.style.display = 'none';
}

//function to close modal if outside click
function outsideClick(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

// open first

instructions();

function instructions() {
    //get modal element
    var modal = document.getElementById('simpleModal');

//get close button
    var closeBtn = document.getElementsByClassName('closeBtn')[0]; //getElementsByClassName creates an array hence choosing 0

    openModal();
//listen for close click
    closeBtn.addEventListener('click', closeModal);
//listen for outside click
    window.addEventListener('click', outsideClick);

//function to open modal
    function openModal() {
        modal.style.display = 'block';
    }

//function to close modal
    function closeModal() {
        modal.style.display = 'none';
    }

//function to close modal if outside click
    function outsideClick(e) {
        if(e.target == modal) {
            modal.style.display = 'none';
        }
    }
}