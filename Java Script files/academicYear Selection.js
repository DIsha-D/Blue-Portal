function continueToDashboard() {
    const selectedYear = document.getElementById("academicYear").value;
    if (selectedYear === "apr25-mar26") {
        window.location.href = "dashboard-25-26.html";
    } else {
        window.location.href = "dashboard-otherYears.html";
    }
}