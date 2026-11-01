
let clickBtn = document.getElementById("clickBtn");
let clickMessage = document.getElementById("clickMessage");

clickBtn.addEventListener("click", function() {
    clickMessage.textContent = "Button clicked successfully!";
});


let nameInput = document.getElementById("nameInput");
let inputMessage = document.getElementById("inputMessage");

nameInput.addEventListener("input", function() {
    inputMessage.textContent = "Hello, " + nameInput.value;
});


let courseSelect = document.getElementById("courseSelect");
let courseMessage = document.getElementById("courseMessage");

courseSelect.addEventListener("change", function() {
    courseMessage.textContent = "Selected Course: " + courseSelect.value;
});


let myForm = document.getElementById("myForm");
let studentName = document.getElementById("studentName");
let formMessage = document.getElementById("formMessage");

myForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (studentName.value.trim() === "") {
        formMessage.textContent = "Please enter your name.";
    } else {
        formMessage.textContent = "Form submitted successfully!";
    }
});


let mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", function() {
    mouseBox.style.backgroundColor = "#86efac";
    mouseBox.textContent = "Mouse is inside the box!";
});

mouseBox.addEventListener("mouseout", function() {
    mouseBox.style.backgroundColor = "#dbeafe";
    mouseBox.textContent = "Move your mouse here";
});


let keyboardInput = document.getElementById("keyboardInput");
let keyboardMessage = document.getElementById("keyboardMessage");

keyboardInput.addEventListener("keydown", function(event) {
    keyboardMessage.textContent = "You pressed: " + event.key;
});