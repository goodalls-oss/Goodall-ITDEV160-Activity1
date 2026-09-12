//Activity 1: Hello World and Variable Fun!

console.log("Hello, World! ");

document.getElementById("output").innerHTML = "<h2>Hello, World!</h2>"

let studentName = "Sierra Goodall";

const age = 22;

let isStudent = true;

let emptyValue = null;

let notAssigned;

console.log("=== Variable Values ===");
console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Is Student", isStudent);
console.log("Empty Value", emptyValue);
console.log("Not Assigned", notAssigned);

console.log("=== Variable Values ===");
console.log("typeof studentName:", typeof studentName);
console.log("typeof age:", typeof age);
console.log("typeof isStudent", typeof isStudent);
console.log("typeof emptyValue", typeof emptyValue);
console.log("typeof notAssigned", typeof notAssigned);

console.log("=== Variable Reassignment ===");
console.log("Original studentName:", studentName);
studentName = "Sierra Goodall";
console.log("Updated studentName", studentName);