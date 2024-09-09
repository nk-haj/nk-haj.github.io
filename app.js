function subscription() {
  // Ask if the user already has an account
  let hasAccount = prompt("Do you already have an account? (yes/no)")
    .toLowerCase()
    .trim();

  // If the user already has an account
  if (hasAccount === "yes") {
    // Ask for login details
    let email = prompt("Please enter your email to login:");
    let password = prompt("Please enter your password:");

    // Simple check for user inputs
    if (email && password) {
      alert("Welcome back! You've successfully logged in with email: " + email);
    } else {
      alert("Login failed. Please provide both email and password.");
    }
  }
  // If the user does not have an account
  else if (hasAccount === "no") {
    // Ask to create an account
    let name = prompt("What is your name?");
    let email = prompt("Please enter your email to create an account:");
    let password = prompt("Please create a password:");

    // Check for valid account creation inputs
    if (name && email && password) {
      alert(
        "Account created successfully! Welcome, " +
          name +
          ". We'll send a confirmation to your email @" +
          email
      );
    } else {
      alert(
        "Account creation failed. Please provide your name, email, and password."
      );
    }
  }
  // If the user provides an invalid response to the first question
  else {
    alert("Invalid response. Please type 'yes' or 'no'.");
  }
}

// Ensure the DOM is loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function () {
  let subscribeButton = document.querySelector("#cart");
  subscribeButton.addEventListener("click", subscription);
});
