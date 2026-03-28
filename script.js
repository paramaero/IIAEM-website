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


/* ===========================
   🔴 LIVE DATA SCRIPT START
   =========================== */

// GOOGLE SHEETS API
const sheetURL = "https://opensheet.elk.sh/18NVYml7AwOsIX6sOBA-HzzsESVdGnbF3ZsNIXID_DkE/Sheet1";

// Fetch Data
fetch(sheetURL)
.then(res => res.json())
.then(data => {

    let totalCourses = 0;
    let attendanceEntered = 0;

    let caTotal = 0;
    let caCompleted = 0;

    data.forEach(row => {

        if (!row["Course Name"]) return;

        totalCourses++;

        if (row["Attendance Entry Status in erp"] &&
            row["Attendance Entry Status in erp"].toLowerCase().includes("entered")) {
            attendanceEntered++;
        }

        let caFields = [
            "Assignment 1","Assignment 2","Assignment 3","Assignment 4",
            "MCQ 1","MCQ 2","MCQ 3","MCQ 4","MCQ 5","IA 1","IA 2"
        ];

        caFields.forEach(field => {
            if (row[field] && row[field].toLowerCase().includes("entered")) {
                caCompleted++;
            }
        });

        caTotal += caFields.length;
    });

    createCharts(attendanceEntered, totalCourses, caCompleted, caTotal);
});

// Chart Function
function createCharts(attDone, total, caDone, caTotal) {

    new Chart(document.getElementById("attendanceChart"), {
        type: "doughnut",
        data: {
            labels: ["Entered", "Pending"],
            datasets: [{
                data: [attDone, total - attDone]
            }]
        }
    });

    new Chart(document.getElementById("caChart"), {
        type: "doughnut",
        data: {
            labels: ["Completed", "Pending"],
            datasets: [{
                data: [caDone, caTotal - caDone]
            }]
        }
    });
}
