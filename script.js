// DROPDOWN
document.querySelectorAll(".dropbtn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.nextElementSibling.classList.toggle("active");
    });
});

// DARK MODE
document.getElementById("darkToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// SEARCH
document.getElementById("searchInput").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    document.querySelectorAll(".dropdown-content a").forEach(link => {
        link.style.display = link.innerText.toLowerCase().includes(value) ? "block" : "none";
    });
});

// CHARTS
const attendanceChart = new Chart(document.getElementById("attendanceChart"), {
    type: "bar",
    data: {
        labels: ["Aero", "Maths", "Physics"],
        datasets: [{
            label: "Attendance %",
            data: [90, 85, 88]
        }]
    }
});

const caChart = new Chart(document.getElementById("caChart"), {
    type: "pie",
    data: {
        labels: ["Completed", "Pending"],
        datasets: [{
            data: [70, 30]
        }]
    }
});
