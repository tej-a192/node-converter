const exchangeRate = 82.5; 

// Function to convert INR to USD
function inrToUsd(amount) {
  return amount / exchangeRate; // INR to USD
}

// Function to convert USD to INR
function usdToInr(amount) {
  return amount * exchangeRate; // USD to INR
}

// User input dynamically using readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to show the menu and handle user input
function showMenu() {
  console.log("\nSelect an option:");
  console.log("1. Convert INR to USD");
  console.log("2. Convert USD to INR");
  console.log("3. Exit");

  rl.question("Enter your choice (1/2/3): ", (choice) => {
    switch (choice) {
      case "1":
        // Convert INR to USD
        rl.question("Enter amount in INR: ", (amountInput) => {
          const amount = parseFloat(amountInput);
          if (isNaN(amount) || amount <= 0) {
            console.log("Please enter a valid positive amount.");
          } else {
            const result = inrToUsd(amount);
            console.log(`${amount} INR is equal to ${result.toFixed(2)} USD`);
          }
          showMenu(); // Go back to the menu
        });
        break;

      case "2":
        // Convert USD to INR
        rl.question("Enter amount in USD: ", (amountInput) => {
          const amount = parseFloat(amountInput);
          if (isNaN(amount) || amount <= 0) {
            console.log("Please enter a valid positive amount.");
          } else {
            const result = usdToInr(amount);
            console.log(`${amount} USD is equal to ${result.toFixed(2)} INR`);
          }
          showMenu(); // Go back to the menu
        });
        break;

      case "3":
        console.log("Goodbye!");
        rl.close();
        break;

      default:
        console.log("Invalid choice! Please select 1, 2, or 3.");
        showMenu(); // Show menu again for invalid input
        break;
    }
  });
}

// Start the menu
showMenu();
