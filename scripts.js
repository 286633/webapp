// Get elements from the DOM
let startStopButton = document.getElementById("startStopButton");
let timeDisplay = document.getElementById("time-display");

let isRunning = true;  // Start with the stopwatch running
let timer;
let seconds = 0;
let minutes = 0;

// Start the stopwatch immediately when the page loads
window.onload = function() {
    startStopwatch();  // Automatically start the stopwatch
};

// Function to start/stop the stopwatch
function startStopwatch() {
    if (isRunning) {
        // Start the stopwatch
        timer = setInterval(updateTime, 1000);
        startStopButton.style.backgroundColor = "red";  // Change circle color to indicate it's running
    } else {
        // Stop the stopwatch
        clearInterval(timer);
        startStopButton.style.backgroundColor = "green";  // Change circle color to indicate it's stopped
    }

    isRunning = !isRunning;  // Toggle running state
}

// Update the time
function updateTime() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    timeDisplay.textContent = formatTime(minutes, seconds);
}

// Format time in MM:SS format
function formatTime(minutes, seconds) {
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
}

// Event listener for the circle button
startStopButton.addEventListener("click", startStopwatch);
