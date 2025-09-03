// atm.js
let balance = 5000;
let option = "withdraw"; // try: "balance"

if (option === "withdraw") {
  let amount = 2000;
  if (amount <= balance) {
    balance -= amount;
    console.log("💸 Withdraw Successful! Remaining Balance:", balance);
  } else {
    console.log("❌ Insufficient Balance!");
  }
} else if (option === "balance") {
  console.log("📊 Your Balance is:", balance);
} else {
  console.log("Invalid option selected");
}
