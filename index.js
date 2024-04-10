const { default: Feedback } = require("react-bootstrap/esm/Feedback");

function changeMode() {
  let body = document.body;
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    localStorage.setItem("mode", "dark");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    localStorage.setItem("mode", "light");
  }
}

function initializeMode() {
  let mode = localStorage.getItem("mode");
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.add("light-mode");
  }
}

// Add event listener to the mode toggle button
document
  .getElementById("mode-toggle-btn")
  .addEventListener("click", changeMode);

// Initialize color mode when the page loads
initializeMode();

function submitFeedback() {
  // Get the user input from the textarea
  let userInput = document.getElementById("user-input").value;

  // Create a new paragraph element to display the feedback
  let feedback = document.createElement("p");
  feedback.textContent = userInput;

  // Append the feedback paragraph to the feedback list
  document.getElementById("user-feedback").appendChild(feedback);

  // Clear the textarea after submitting feedback
  document.getElementById("user-input").value = "";
}
