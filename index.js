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
  let userInput = document.getElementById("user-input").value;
  let feedback = document.createElement("p");
  feedback.textContent = userInput;
  document.getElementById("user-feedback").appendChild(feedback);
  document.getElementById("user-input").value = "";
}

document
  .getElementById("submitRevisionHeaderId")
  .addEventListener("click", submitRevisionHeader);
function submitRevisionHeader() {
  let userDiv = document.createElement("div");
  userDiv.classList.add("col-sm-4");
  let innerDiv = document.createElement("div");
  innerDiv.classList.add("well");

  let userHeader = document.getElementById("user-header").value;
  let header = document.createElement("h3");
  header.textContent = userHeader;
  innerDiv.appendChild(header);
  userDiv.appendChild(innerDiv);

  document.getElementById("partSeven").appendChild(userDiv);
}

function submitRevision() {
  let userDiv = document.createElement("div");
  userDiv.classList.add("col-sm-8");
  let innerDiv = document.createElement("div");
  innerDiv.classList.add("well");

  let userRevision = document.getElementById("user-revision").value;
  let revision = document.createElement("p");
  revision.textContent = userRevision;
  innerDiv.appendChild(revision);
  userDiv.appendChild(innerDiv);

  document.getElementById("partSeven").appendChild(userDiv);
}
