/**
 * ASSIGNMENT 2 - QUESTION 1: Scope Conflict Resolver
 * 
 * Purpose: Demonstrate proper variable scoping in JavaScript by managing
 * global and local variables in a payroll calculation system.
 * 
 * Concepts Covered:
 * - Global vs Local Scope
 * - Function scope
 * - Variable accessibility
 * - How local variables affect global scope
 */

"use strict";  // Enable strict mode for better error detection

// Global variable: Accessible throughout the entire program
var bonus = 5000;  // Company-wide bonus amount in rupees

console.log("=== SCOPE CONFLICT RESOLVER ===\n");
console.log("Initial Global Bonus:", bonus);
console.log("─────────────────────────────\n");

/**
 * Function to calculate employee salary
 * Demonstrates local scope and conditional bonus application
 * 
 * @param {boolean} isPermanent - Employee's employment status
 */
function calculateSalary(isPermanent) {
    // Local variable: Only accessible within this function
    let salary = 40000;  // Base monthly salary
    
    console.log(`\n--- Calculating Salary (isPermanent: ${isPermanent}) ---`);
    console.log(`Base Salary (local): ₹${salary}`);
    console.log(`Bonus Available (global): ₹${bonus}`);
    
    /**
     * Apply bonus only if employee is permanent
     * The bonus variable is accessed from global scope
     * Local salary is modified, but global bonus remains unchanged
     */
    if (isPermanent) {
        salary = salary + bonus;  // Add global bonus to local salary
        console.log(`✓ Permanent employee - Bonus applied!`);
    } else {
        console.log(`✗ Temporary employee - No bonus`);
    }
    
    // Display total salary (local variable)
    console.log(`Total Salary: ₹${salary}`);
    console.log(`Global bonus still: ₹${bonus} (unchanged)`);
}

// Test Case 1: Permanent Employee
console.log("\n=== TEST CASE 1: Permanent Employee ===");
calculateSalary(true);
console.log(`\nAfter calculation, global bonus: ₹${bonus}`);

// Test Case 2: Temporary Employee  
console.log("\n\n=== TEST CASE 2: Temporary Employee ===");
calculateSalary(false);
console.log(`\nAfter calculation, global bonus: ₹${bonus}`);

/**
 * Demonstrating scope behavior:
 * 
 * 1. Global Variable (bonus):
 *    - Declared outside any function
 *    - Accessible everywhere in the program
 *    - Remains unchanged unless explicitly modified
 * 
 * 2. Local Variable (salary):
 *    - Declared inside calculateSalary function
 *    - Only accessible within that function
 *    - Created new each time function is called
 *    - Does not affect global scope
 * 
 * 3. Function Parameter (isPermanent):
 *    - Acts as a local variable within the function
 *    - Its value is scoped to that function call only
 */

console.log("\n\n=== SCOPE DEMONSTRATION ===");
console.log("Global bonus is still:", bonus);
// Uncommenting the next line would cause an error because salary is local
// console.log(salary);  // ReferenceError: salary is not defined

console.log("\n✓ Scope rules working correctly!");
console.log("  - Global variables accessible everywhere");
console.log("  - Local variables confined to their function");
console.log("  - Changes to local variables don't affect global scope\n");

