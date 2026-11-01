

let student1 = {
    name: "Manish",
    age: 22,
    course: "B.Sc Mathematics",
    marks: 85
};

let student2 = {
    name: "Rahul",
    age: 21,
    course: "BCA",
    marks: 90
};

let student3 = {
    name: "Amit",
    age: 22,
    course: "B.Tech",
    marks: 80
};



console.log("Student 1 Name:", student1.name);
console.log("Student 2 Course:", student2.course);
console.log("Student 3 Marks:", student3["marks"]);



console.log("Student 1 Details:", student1);
console.log("Student 2 Details:", student2);
console.log("Student 3 Details:", student3);



student1.age = 23;
student1.marks = 95;

console.log("After Updating:", student1);


student1.city = "Alwar";
student1.college = "Matsya PG College Alwar";

console.log("After Adding Properties:", student1);



delete student1.city;

console.log("After Removing City:", student1);


console.log("Object Keys:", Object.keys(student1));


console.log("Object Values:", Object.values(student1));



console.log("Object Entries:", Object.entries(student1));