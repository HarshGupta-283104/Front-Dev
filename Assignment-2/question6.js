/**
 * ASSIGNMENT 2 - QUESTION 6: Event-Based Counter Simulation
 * 
 * Purpose: Simulate button click events using functions to increment
 * and decrement a counter, demonstrating function scope and closures.
 * 
 * Concepts:
 * - Function scope
 * - Variable modification
 * - Nested functions
 * - Simulating event handling
 */

"use strict";

console.log("=== EVENT-BASED COUNTER SIMULATION ===\n");

// Counter variable - shared across increment and decrement functions
let count = 0;

console.log(`Initial Count: ${count}\n`);

/**
 * Increment Function
 * Increases count by 1 and logs the new value
 * Simulates a "+" button click
 */
function increment() {
    count++;  // Increase count by 1
    console.log(`[INCREMENT] Button clicked → Count: ${count}`);
    
    /**
     * Nested function to demonstrate function scope
     * This inner function can access the outer function's variables
     * and the global count variable
     */
    function logIncrementDetails() {
        console.log(`  ↳ Previous value was: ${count - 1}`);
        console.log(`  ↳ Current value is: ${count}`);
    }
    
    logIncrementDetails();
}

/**
 * Decrement Function
 * Decreases count by 1 and logs the new value
 * Simulates a "-" button click
 */
function decrement() {
    count--;  // Decrease count by 1
    console.log(`[DECREMENT] Button clicked → Count: ${count}`);
    
    /**
     * Nested function with access to outer scope
     */
    function logDecrementDetails() {
        console.log(`  ↳ Previous value was: ${count + 1}`);
        console.log(`  ↳ Current value is: ${count}`);
    }
    
    logDecrementDetails();
}

/**
 * Reset Function
 * Sets count back to 0
 */
function reset() {
    let previousCount = count;  // Store previous value (local variable)
    count = 0;
    console.log(`[RESET] Button clicked → Count reset from ${previousCount} to ${count}`);
}

// Simulate multiple button clicks
console.log("--- Simulating Click Events ---\n");

increment();  // Click +
console.log("");

increment();  // Click +
console.log("");

increment();  // Click +
console.log("");

decrement();  // Click -
console.log("");

increment();  // Click +
console.log("");

decrement();  // Click -
console.log("");

decrement();  // Click -
console.log("");

reset();  // Click Reset
console.log("");

increment();  // Click +
console.log("");

console.log(`\n╔═══════════════════════════════╗`);
console.log(`║    FINAL COUNT: ${count.toString().padStart(2)}           ║`);
console.log(`╚═══════════════════════════════╝\n`);

console.log("✓ Counter simulation completed!");
console.log("  - Global 'count' variable accessible to all functions");
console.log("  - Each function modifies the shared state");
console.log("  - Nested functions demonstrate scope chain\n");

