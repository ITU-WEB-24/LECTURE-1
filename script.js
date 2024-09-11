// JavaScript functionality for the starter page

// Task 1: Display alert
document.getElementById("alertButton").addEventListener("click", function() {
    alert("Button clicked!");
});

// Task 2: Display current date
document.getElementById("currentDate").innerHTML = "Today's date is: " + new Date().toLocaleDateString();

// Task 3: Display user's input message
document.getElementById("displayMessageButton").addEventListener("click", function() {
    const userInput = document.getElementById("userInput").value;
    document.getElementById("userMessage").innerHTML = userInput ? "You entered: " + userInput : "Please enter a message!";
});

// Task 4: Change background color
document.getElementById("changeBackgroundButton").addEventListener("click", function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
});

// Task 5: Toggle paragraph visibility
document.getElementById("toggleParagraphButton").addEventListener("click", function() {
    const paragraph = document.getElementById("toggleParagraph");
    paragraph.classList.toggle("hidden");
});
