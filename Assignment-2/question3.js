/**
 * ASSIGNMENT 2 - QUESTION 3: Math Utility Dashboard
 * 
 * Purpose: Create a mathematical operations dashboard using built-in Math methods
 * to perform various calculations on a given number.
 * 
 * Math Methods Used:
 * - Math.round(): Round to nearest integer
 * - Math.sqrt(): Calculate square root
 * - Math.pow(): Calculate power/exponent
 * - Math.random(): Generate random number
 * - Math.floor(): Round down to integer
 */

"use strict";

console.log("=== MATH UTILITY DASHBOARD ===\n");

// Input number for mathematical operations
let x = 16.75;

console.log(`Input Number: ${x}`);
console.log("─────────────────────────────\n");

/**
 * Operation 1: Round to nearest integer
 * Math.round() rounds to the closest whole number
 * - .5 and above rounds up
 * - Below .5 rounds down
 */
let rounded = Math.round(x);
console.log("--- ROUNDING ---");
console.log(`Original: ${x}`);
console.log(`Rounded: ${rounded}`);
console.log(`Explanation: ${x} rounds to ${rounded} (nearest integer)\n`);

/**
 * Operation 2: Calculate Square Root
 * Math.sqrt() returns the square root of a number
 * √x = number that when multiplied by itself gives x
 */
let squareRoot = Math.sqrt(x);
console.log("--- SQUARE ROOT ---");
console.log(`√${x} = ${squareRoot.toFixed(4)}`);
console.log(`Verification: ${squareRoot.toFixed(4)} × ${squareRoot.toFixed(4)} ≈ ${x}\n`);

/**
 * Operation 3: Calculate Power (Exponentiation)
 * Math.pow(base, exponent) raises base to the power of exponent
 * x³ means x × x × x
 */
let cubed = Math.pow(x, 3);
console.log("--- POWER CALCULATION ---");
console.log(`${x}³ = ${cubed.toFixed(2)}`);
console.log(`Calculation: ${x} × ${x} × ${x} = ${cubed.toFixed(2)}\n`);

/**
 * Operation 4: Generate Random Number (10-50)
 * Process:
 * 1. Math.random() generates 0 to 0.999...
 * 2. Multiply by 41 to get 0 to 40.999...
 * 3. Add 10 to shift range to 10 to 50.999...
 * 4. Math.floor() to get integer from 10 to 50
 */
console.log("--- RANDOM NUMBER GENERATION ---");
console.log("Generating random number between 10 and 50...");

// Generate multiple random numbers to show variety
for (let i = 1; i <= 5; i++) {
    let randomNum = Math.floor(Math.random() * 41) + 10;
    console.log(`  Random ${i}: ${randomNum}`);
}

// Store one for the final summary
let finalRandom = Math.floor(Math.random() * 41) + 10;
console.log(`\nSelected Random Number: ${finalRandom}\n`);

/**
 * Additional Math Operations (Bonus)
 * Demonstrating more Math object capabilities
 */
console.log("--- ADDITIONAL OPERATIONS ---");
console.log(`Absolute Value: |${-x}| = ${Math.abs(-x)}`);
console.log(`Ceiling (round up): ${Math.ceil(x)}`);
console.log(`Floor (round down): ${Math.floor(x)}`);
console.log(`Maximum of (x, rounded, finalRandom): ${Math.max(x, rounded, finalRandom)}`);
console.log(`Minimum of (x, rounded, finalRandom): ${Math.min(x, rounded, finalRandom)}`);

/**
 * Final Summary using Template Literals
 * Template literals allow embedded expressions and multi-line strings
 */
console.log("\n╔══════════════════════════════════════════════╗");
console.log("║       MATH DASHBOARD SUMMARY                 ║");
console.log("╠════════════════════════════════════════════════╣");
console.log(`║ Original Number:    ${x.toString().padEnd(20)}║`);
console.log(`║ Rounded:            ${rounded.toString().padEnd(20)}║`);
console.log(`║ Square Root:        ${squareRoot.toFixed(4).padEnd(20)}║`);
console.log(`║ Cubed (x³):         ${cubed.toFixed(2).padEnd(20)}║`);
console.log(`║ Random (10-50):     ${finalRandom.toString().padEnd(20)}║`);
console.log("╚═══════════════════════════════════════════╝\n");

console.log("✓ All mathematical operations completed successfully!\n");

