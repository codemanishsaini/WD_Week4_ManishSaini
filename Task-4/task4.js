
let heading = document.getElementById("heading");
let description = document.getElementById("description");
let content = document.getElementById("content");


let textBtn = document.getElementById("textBtn");

textBtn.addEventListener("click", function() {
    heading.textContent = "Hello Manish!";
});


let htmlBtn = document.getElementById("htmlBtn");

htmlBtn.addEventListener("click", function() {
    description.innerHTML = "<b>JavaScript makes webpages interactive!</b>";
});


let styleBtn = document.getElementById("styleBtn");

styleBtn.addEventListener("click", function() {
    heading.style.color = "green";
    heading.style.fontSize = "35px";
    heading.style.backgroundColor = "#dcfce7";
});


let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function() {
    let newElement = document.createElement("p");

    newElement.textContent = "This is a new element added using JavaScript.";

    content.appendChild(newElement);
});



let removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", function() {
    let lastElement = content.lastElementChild;

    if (lastElement !== null) {
        content.removeChild(lastElement);
    }
});