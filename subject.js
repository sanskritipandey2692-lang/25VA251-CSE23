function calculateGrade() {
    let total = 0;

    for (let i = 1; i <= 4; i++) {
        let marks = parseFloat(prompt("Enter marks of Subject " + i));
        total += marks;
    }

    let avg = total / 4;
    let grade;

    if (avg >= 90)
        grade = "A+";
    else if (avg >= 80)
        grade = "A";
    else if (avg >= 70)
        grade = "B";
    else if (avg >= 60)
        grade = "C";
    else if (avg >= 50)
        grade = "D";
    else
        grade = "F";

    document.getElementById("result").innerHTML =
        "<b>Total Marks:</b> " + total + "<br>" +
        "<b>Average Marks:</b> " + avg.toFixed(2) + "<br>" +
        "<b>Grade:</b> " + grade;
}