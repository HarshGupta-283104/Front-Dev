
/*
Q 1. Write a function greetUser(name, callback) that prints "Hello <name>" and then
executes a callback function showEndMessage() which prints "Welcome to the
course!".
Demonstrate callback flow clearly.
*/

// The callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// The main function that accepts a callback
function greetUser(name, callback) {
    console.log(`Hello, ${name}!`);

    // Execute the callback function after the greeting
    callback();
}


// --- Demonstration ---
console.log("--- Demonstrating Callback Flow ---");
greetUser("Alice", showEndMessage);
