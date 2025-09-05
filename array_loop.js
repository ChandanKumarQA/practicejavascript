// array_loop.js
let cities = ["Patna", "Delhi", "Mumbai"];

for (let i = 0; i < cities.length; i++) {
  console.log("City:", cities[i]);
}

cities.forEach((city, index) => {
  console.log(`Index ${index}: ${city}`);
});
