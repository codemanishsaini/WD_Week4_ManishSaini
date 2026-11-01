
let students = ["Manish", "Rahul", "Amit", "Rohit"];

console.log("Student List:", students);


console.log("First Student:", students[0]);
console.log("Second Student:", students[1]);


students.push("Priya");
console.log("After push:", students);


students.unshift("Neha");
console.log("After unshift:", students);


students.pop();
console.log("After pop:", students);


students.shift();
console.log("After shift:", students);


students[1] = "Vikas";
console.log("After updating:", students);


console.log("All Students:");

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


console.log("Using forEach:");

students.forEach(function(eachStudent) {
    console.log(eachStudent);
});


console.log("Is Manish present?", students.includes("Manish"));


console.log("Index of Amit:", students.indexOf("Amit"));


let selectedStudents = students.slice(0, 2);
console.log("Selected Students:", selectedStudents);


students.splice(1, 1);
console.log("After splice:", students);


let numbers = [40, 10, 30, 20];

numbers.sort(function(a, b) {
    return a - b;
});

console.log("Sorted Numbers:", numbers);