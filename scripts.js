document.addEventListener("DOMContentLoaded", function () {
    let timer;
    let seconds = 0;
    let minutes = 0;
    let isRunning = false;
    let startTime = null;

    // Select the elements for time display and the circle button
    const timeDisplay = document.getElementById('time-display');
    const startStopButton = document.getElementById('startStopButton');

    // Function to format the time as MM:SS
    function formatTime() {
        const minutesFormatted = minutes < 10 ? '0' + minutes : minutes;
        const secondsFormatted = seconds < 10 ? '0' + seconds : seconds;
        return `${minutesFormatted}:${secondsFormatted}`;
    }

    // Update time display on the page
    function updateTime() {
        timeDisplay.textContent = formatTime();
    }

    // Start the stopwatch
    function startStopwatch() {
        if (!isRunning) {
            console.log('Stopwatch started!'); // Debugging line to confirm the stopwatch has started
            startTime = Date.now() - seconds * 1000 - minutes * 60000; // Initialize start time
            timer = setInterval(function () {
                const elapsedTime = Date.now() - startTime;
                seconds = Math.floor((elapsedTime / 1000) % 60);
                minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
                updateTime();
            }, 1000); // Update time every second
            isRunning = true;
            startStopButton.style.backgroundColor = "green"; // Change circle color to green when running
        }
    }

    // Stop the stopwatch
    function stopStopwatch() {
        clearInterval(timer);
        isRunning = false;
        startStopButton.style.backgroundColor = "red"; // Change circle back to red when stopped
        console.log('Stopwatch stopped!'); // Debugging line to confirm the stopwatch was stopped
    }

    // Toggle between start and stop on click
    startStopButton.addEventListener('click', function () {
        if (isRunning) {
            stopStopwatch();  // Stop if running
        } else {
            startStopwatch(); // Start if stopped
        }
    });

    // Automatically start the stopwatch after 5 seconds
    setTimeout(function () {
        console.log('5 seconds passed. Starting stopwatch...'); // Debugging line
        startStopwatch(); // Start automatically after 5 seconds
    }, 5000); // 5000 milliseconds = 5 seconds
});
