function continueToDashboard() {
    const selectedYear = document.getElementById("academicYear").value;
    if (selectedYear === "apr26-mar27") {
        window.location.href = "dashboard-26-27.html";
    } else if (selectedYear === "apr25-mar26") {
        window.location.href = "dashboard-25-26.html";
    } else {
        window.location.href = "dashboard-otherYears.html";
    }
}