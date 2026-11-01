
let studentsList = [];

let studentForm = document.getElementById("studentForm");
let studentName = document.getElementById("studentName");
let studentCourse = document.getElementById("studentCourse");
let studentMarks = document.getElementById("studentMarks");
let studentList = document.getElementById("studentList");
let totalStudents = document.getElementById("totalStudents");


function displayStudents() {
    studentList.innerHTML = "";

    if (studentsList.length === 0) {
        studentList.textContent = "No student records available.";
    }

    studentsList.forEach(function(eachStudent) {
        let studentCard = document.createElement("div");
        studentCard.classList.add("student-card");

        let studentDetails = document.createElement("div");
        studentDetails.classList.add("student-details");

        let name = document.createElement("p");
        name.textContent = "Name: " + eachStudent.name;

        let course = document.createElement("p");
        course.textContent = "Course: " + eachStudent.course;

        let marks = document.createElement("p");
        marks.textContent = "Marks: " + eachStudent.marks;

        studentDetails.appendChild(name);
        studentDetails.appendChild(course);
        studentDetails.appendChild(marks);

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        deleteButton.addEventListener("click", function() {
            deleteStudent(eachStudent.id);
        });

        studentCard.appendChild(studentDetails);
        studentCard.appendChild(deleteButton);

        studentList.appendChild(studentCard);
    });

    totalStudents.textContent =
        "Total Students: " + studentsList.length;
}


function addStudent(name, course, marks) {
    let student = {
        id: Date.now(),
        name: name,
        course: course,
        marks: marks
    };

    studentsList.push(student);

    displayStudents();
}


function deleteStudent(id) {
    studentsList = studentsList.filter(function(eachStudent) {
        return eachStudent.id !== id;
    });

    displayStudents();
}


studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = studentName.value.trim();
    let course = studentCourse.value.trim();
    let marks = Number(studentMarks.value);

    if (name === "" || course === "") {
        return;
    }

    if (marks < 0 || marks > 100) {
        alert("Please enter marks between 0 and 100.");
        return;
    }

    addStudent(name, course, marks);

    studentForm.reset();
});