// nested_function.js
function outer() {
  console.log("This is outer function");

  function inner() {
    console.log("This is inner function");
  }

  inner(); // calling inner
}
outer();
