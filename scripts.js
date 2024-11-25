let timer;
let isRunning = false;
let elapsedTime = 0;
let startTime = 0;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');

startStopButton.addEventListener('click', toggleStartStop);
resetButton.addEventListener('click', resetStopwatch);

// Automatically start the stopwatch after 9 seconds
window.onload = function() {
    setTimeout(() => {
        startStopButton.click(); // Simulate the click on "Start"
    }, 9000); // 9 seconds = 9000 milliseconds
};

function toggleStartStop() {
    if (isRunning) {
        // Stop the timer
        clearInterval(timer);
        startStopButton.textContent = 'Start';
        isRunning = false;
    } else {
        // Start the timer
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 100);
        startStopButton.textContent = 'Stop';
        isRunning = true;
    }
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    const seconds = Math.floor(elapsedTime / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 100);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    display.textContent = `${formatTime(minutes)}:${formatTime(remainingSeconds)}.${milliseconds}`;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function resetStopwatch() {
    clearInterval(timer);
    elapsedTime = 0;
    display.textContent = '00:00.0';
    startStopButton.textContent = 'Start';
    isRunning = false;
}