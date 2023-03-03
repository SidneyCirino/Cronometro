const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");
const millisecondsElement = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            milliseconds += 10;
            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesElement.textContent = formatTime(minutes);
            secondsElement.textContent = formatTime(seconds);
            millisecondsElement.textContent = formatMilliseconds(milliseconds);
        }
    }, 10) //executa a cada 10 milliseconds

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";  
}

function formatTime(time) {
    if (time < 10) {
        time = `0${time}`;
    }
    return time;
}
/* 
//formatTime com arrow function:
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
 */

function formatMilliseconds(time) {
    if (time < 100) {
        time = `0${time}`;
    }
    return time;
}
/* 
//formatMilliseconds com arrow function:
function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}
 */

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer() {
    isPaused = false;
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function resetTimer() {
    isPaused = true;
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "none";
    startBtn.style.display = "block";

    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
    millisecondsElement.textContent = formatMilliseconds('0' + milliseconds);
}
