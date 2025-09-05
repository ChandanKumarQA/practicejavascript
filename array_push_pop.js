// array_push_pop.js
let numbers = [1, 2, 3];
numbers.push(4);   // add at end
console.log("After push:", numbers);

numbers.pop();     // remove from end
console.log("After pop:", numbers);

numbers.unshift(0); // add at start
console.log("After unshift:", numbers);

numbers.shift();   // remove from start
console.log("After shift:", numbers);
console.log("Final array:", numbers);