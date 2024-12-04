// Declare necessary variables
let startTime;
let elapsedTime = 0;
let timerInterval;
let running = false;
let timeDisplay = document.getElementById('time-display');
let startStopButton = document.getElementById('startStopButton');

// Function to format time in mm:ss:SSS format
function formatTime(ms) {
    const date = new Date(ms);
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}

// Start or stop the stopwatch
function startStop() {
    if (!running) {
        // Start the stopwatch
        startTime = Date.now() - elapsedTime; // Start from the last known time
        timerInterval = setInterval(updateTime, 10); // Update every 10 milliseconds
        running = true;
    } else {
        // Stop the stopwatch
        clearInterval(timerInterval); // Stop the timer
        elapsedTime = Date.now() - startTime; // Save elapsed time
        running = false;
    }
}

// Update the stopwatch display
function updateTime() {
    elapsedTime = Date.now() - startTime; // Calculate elapsed time
    timeDisplay.textContent = formatTime(elapsedTime); // Display the formatted time
}

// Delay the start of the stopwatch by 5 seconds after the page loads
window.onload = function () {
    setTimeout(function () {
        startStop(); // Start the stopwatch after 5 seconds
    }, 5000);
};

// Add event listener to the start/stop button
startStopButton.addEventListener('click', startStop);
