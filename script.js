document.getElementById("hie").onclick = function () {
    window.location.href = "page2.html"; // Replace with your target URL
};
// Get references to the buttons
const startButton = document.getElementById("StartButton");
const stopButton = document.getElementById("hie");
startButton.onclick = function() {
    alert("You clicked the wrong button!😠"); // Display the pop-up message
};
