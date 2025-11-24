/*
Q5 – Hoisting Lab: The Sequence Trap
Predict, then run:

console.log(score);
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() {
console.log(status);
}

Tasks:
1. Explain each hoisted element’s memory state.
2. Fix the code to run properly.
3. Rewrite using arrow functions to compare hoisting differences.
*/
"use strict";

// --- Original Code with Predictions ---

/*
console.log(score); // Prediction: undefined. `var score` is hoisted, but its initialization is not.
announce();         // Prediction: "Game started". Function declarations are fully hoisted.

var score = 50;
function announce() {
    console.log("Game started");
}

let status = "ready";
// startGame(); // Prediction: ReferenceError. `startGame` is a function declaration and is hoisted,
               // but it is called before `status` is initialized. Let/const are not initialized until their definition is evaluated.
               // Correction: The function is hoisted, but it tries to access `status` which is in the TDZ (Temporal Dead Zone).
function startGame() {
    console.log(status);
}
*/


// --- Task 1: Explanation of Hoisting ---
/*
1. `var score`: The declaration `var score` is hoisted to the top of its scope and initialized with `undefined`.
   The assignment `score = 50` happens where it is written. That's why `console.log(score)` prints `undefined`.

2. `function announce()`: The entire function declaration is hoisted to the top of its scope, so it can be called
   before it appears in the code.

3. `let status`: The declaration `let status` is hoisted, but it is not initialized. It enters a "Temporal Dead Zone" (TDZ)
   from the start of the scope until its declaration is encountered. Accessing it in the TDZ causes a ReferenceError.
   The original code would throw this error when `startGame` is called.

4. `function startGame()`: The function declaration is hoisted. However, the call to it happens before `status`
   is initialized, causing the error mentioned above.
*/


// --- Task 2: Fixed Code ---
console.log("--- Fixed Code ---");

// Declare variables and functions before using them.
var score = 50;
let status = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

// Call functions after declarations
announce();
console.log(score);
startGame();


// --- Task 3: Rewritten with Arrow Functions ---
console.log("\n--- Arrow Functions and Hoisting ---");

// const announceArrow = () => {
//     console.log("Game started (Arrow)");
// };
// announceArrow(); // This would work fine.

// Hoisting difference demonstrated:
try {
    // announceArrowHoisted(); // This will cause a TypeError or ReferenceError
} catch (e) {
    console.log("Error calling arrow function before declaration:", e.message);
}

const announceArrowHoisted = () => {
    console.log("This won't be called due to the error.");
};

console.log("Arrow functions are not hoisted in the same way as function declarations.");
console.log("They are treated like variables. If declared with `const` or `let`, they are in the TDZ.");
