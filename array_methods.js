// array_methods.js
let marks = [50, 70, 90, 30];

console.log("Sorted:", marks.sort());
console.log("Reversed:", marks.reverse());
console.log("Slice(1,3):", marks.slice(1, 3)); // part of array
marks.splice(1, 2); // remove 2 elements starting at index 1
console.log("After splice:", marks);
