// ===============================
// Day 3 – Conditionals in JavaScript
// ===============================

// 🔹 if condition
let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote ✅");
}

// 🔹 if-else condition
let marks = 40;
if (marks >= 50) {
  console.log("Pass 🎉");
} else {
  console.log("Fail ❌");
}

// 🔹 if-else if-else chain
let score = 75;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// 🔹 switch case
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week 💻");
    break;
  case "Friday":
    console.log("Weekend coming soon 🎉");
    break;
  case "Sunday":
    console.log("Relax day 😴");
    break;
  default:
    console.log("Normal working day 📝");
}

// 🔹 Ternary Operator (short form of if-else)
let isQA = true;
let role = isQA ? "Quality Analyst" : "Developer";
console.log("Your role is:", role);
