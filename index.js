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
