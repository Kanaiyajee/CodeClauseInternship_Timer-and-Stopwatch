let timerInterval;
let timerSeconds = 0;

let stopwatchInterval;
let stopwatchSeconds = 0;

document.getElementById("startTimer").addEventListener("click", startTimer);
document.getElementById("stopTimer").addEventListener("click", stopTimer);
document.getElementById("resetTimer").addEventListener("click", resetTimer);

document.getElementById("startStopwatch").addEventListener("click", startStopwatch);
document.getElementById("stopStopwatch").addEventListener("click", stopStopwatch);
document.getElementById("resetStopwatch").addEventListener("click", resetStopwatch);

function startTimer() {
    timerInterval = setInterval(() => {
        timerSeconds++;
        updateTimerDisplay();
        updateTimerProgress();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerSeconds = 0;
    updateTimerDisplay();
    updateTimerProgress();
}

function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        stopwatchSeconds++;
        updateStopwatchDisplay();
        updateStopwatchProgress();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    updateStopwatchDisplay();
    updateStopwatchProgress();
}

function updateTimerDisplay() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    document.getElementById("timer-display").innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function updateStopwatchDisplay() {
    const hours = Math.floor(stopwatchSeconds / 3600);
    const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    const seconds = stopwatchSeconds % 60;
    document.getElementById("stopwatch-display").innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

function updateTimerProgress() {
    const progress = (timerSeconds % 60) / 60 * 360;
    document.getElementById("timer-progress").style.background = `conic-gradient(#4CAF50 ${progress}deg, #ccc ${progress}deg 360deg)`;
}

function updateStopwatchProgress() {
    const progress = (stopwatchSeconds % 60) / 60 * 100;
    document.getElementById("stopwatch-bar").style.width = `${progress}%`;
}
