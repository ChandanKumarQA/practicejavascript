let name = "Chandan";  // can be changed
const role = "QA";     // cannot be changed
let city = "patna";
console.log("initial city" + city); 
city = "Bihar";
city = 123;
 // ✅ works, let can be reassigned
console.log( "updateded city"+city);

 const  country = "India"; // cannot be changed         
//country = "USA"; // ❌ error, const cannot be reassigned

 console.log(name, role, city, country);       

 // 🔹 Primitive Data Types
let fullName = "Chandan Kumar";  // String
let age = 25;                    // Number
let isEmployee = true;           // Boolean
let salary=78678687;                      // Undefined
let bonus = null;                // Null

console.log("Name:", fullName);
console.log("Age:", age);
console.log("Is Employee:", isEmployee);
console.log("Salary:", salary);
console.log("Bonus:", bonus);
// 🔹 Object Example
let employee = {
  id: 101,
  name: "Chandan Kumar",
  department: "QA"
};
console.log("Employee Object:", employee);

let config = {
  url: "https://google.com",
  username: "testuser",
  password: "12345"
};

// Object क्या होता है?

// JavaScript में Object एक data structure है जहाँ values को key–value pair में store करते हैं।
// यानी हर property का एक नाम (key) और उसकी value होती है।

// 👉 ऊपर वाले employee object में:

// id → key (value = 101)

// name → key (value = "Chandan Kumar")

// department → key (value = "QA")
// Access कैसे करते हैं?

// Dot notation

// console.log(employee.name);   // "Chandan Kumar"
// console.log(employee.id);     // 101


// Bracket notation

// console.log(employee["department"]);  // "QA"

console.log("Login with:", config);

// 🔹 Array Example
let skills = ["JavaScript", "Playwright", "Selenium"];
console.log("Skills:", skills);