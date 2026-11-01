
function greet() {
    console.log("Hello! Welcome to JavaScript.");
}

greet();


function greetStudent(name) {
    console.log("Welcome, " + name);
}

greetStudent("Manish");


function calculateTotal(marks1, marks2, marks3) {
    let total = marks1 + marks2 + marks3;
    return total;
}

let totalMarks = calculateTotal(80, 75, 85);
console.log("Total Marks:", totalMarks);



function calculateAverage(total, subjects) {
    return total / subjects;
}

let average = calculateAverage(totalMarks, 3);
console.log("Average Marks:", average);


function calculatePrice(price, quantity) {
    return price * quantity;
}

let totalPrice = calculatePrice(100, 3);
console.log("Total Price:", totalPrice);



const addNumbers = (a, b) => {
    return a + b;
};

console.log("Addition:", addNumbers(10, 20));



const findSquare = number => number * number;

console.log("Square:", findSquare(5));