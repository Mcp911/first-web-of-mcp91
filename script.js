// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    let body = document.documentElement;
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeToggle.innerText = "🌙";
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerText = "☀️";
    }
});

// Load Game in Iframe
function loadGame(path) {
    const frame = document.getElementById('gameFrame');
    frame.src = path;
    frame.parentElement.scrollIntoView({ behavior: 'smooth' });
}
function togglePopup(id) {
    const popup = document.getElementById(id);
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}
function togglePopup(id) {
    const popup = document.getElementById(id);
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
}

function sendFeedback() {
    const text = document.getElementById('feedbackText').value;
    if(text) {
        alert("Thanks Mahesh! Your feedback: " + text);
        togglePopup('settingsPopup');
        document.getElementById('feedbackText').value = "";
    } else {
        alert("Please write something first!");
    }
}
function togglePopup(id) {
    const popup = document.getElementById(id);
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
}

function submitFeedback() {
    const val = document.getElementById('feedbackInput').value;
    if(val) {
        alert("Thank you Mahesh! Feedback received.");
        togglePopup('settingsPopup');
        document.getElementById('feedbackInput').value = "";
    }
}

