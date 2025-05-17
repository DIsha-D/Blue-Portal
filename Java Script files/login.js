document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");
    let forgotPasswordLink = document.getElementById("forgotPassword");

    if (username !== "sapna.deepak" || password !== "Disha@16") {
        errorMessage.textContent = "Incorrect username or password!";
        forgotPasswordLink.style.display = "block";
    } else {
        errorMessage.textContent = "";
        forgotPasswordLink.style.display = "none";
        // Redirect to AcademicYearSelection.html
        window.location.href = "html files/AcademicYearSelection.html";
    }
});

document.getElementById("forgotPassword").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Contact helpdesk to reset your password.");
});