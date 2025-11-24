/**
 * ASSIGNMENT 2 - QUESTION 2: String Manipulation Report
 * 
 * Purpose: Format and clean product titles for an e-commerce site display
 * using various string methods.
 * 
 * String Methods Used:
 * - trim(): Remove whitespace from both ends
 * - toLowerCase(): Convert to lowercase
 * - split(): Break string into array
 * - map(): Transform array elements
 * - join(): Combine array into string
 * - replace(): Replace text
 * - length: Get string length
 */

"use strict";

console.log("=== STRING MANIPULATION REPORT ===\n");

// Original product name with formatting issues
let productName = "   wireless headphones PRO   ";

console.log("Original Product Name:");
console.log(`"${productName}"`);
console.log(`Length: ${productName.length} characters\n`);

/**
 * Step 1: Trim extra spaces from both ends
 * trim() removes leading and trailing whitespace
 */
let trimmedName = productName.trim();
console.log("--- STEP 1: Trim Whitespace ---");
console.log(`Result: "${trimmedName}"`);
console.log(`Length after trim: ${trimmedName.length} characters\n`);

/**
 * Step 2: Convert to lowercase for consistent formatting
 * toLowerCase() converts all characters to lowercase
 */
let lowerCaseName = trimmedName.toLowerCase();
console.log("--- STEP 2: Convert to Lowercase ---");
console.log(`Result: "${lowerCaseName}"\n`);

/**
 * Step 3: Capitalize first letter of each word
 * Process:
 * 1. split(' ') - Break into array of words
 * 2. map() - Transform each word
 * 3. Capitalize first letter, keep rest lowercase
 * 4. join(' ') - Combine back into string
 */
let words = lowerCaseName.split(' ');  // Split into array
console.log("--- STEP 3: Split into Words ---");
console.log("Words array:", words);

// Capitalize first letter of each word
let capitalizedWords = words.map(function(word) {
    // Take first character, uppercase it, then add rest of word
    return word.charAt(0).toUpperCase() + word.slice(1);
});

console.log("Capitalized words:", capitalizedWords);

// Join words back into single string
let properTitle = capitalizedWords.join(' ');
console.log(`Result: "${properTitle}"\n`);

/**
 * Step 4: Replace "pro" with "Pro Edition"
 * replace() finds first occurrence and replaces it
 * Case-sensitive search
 */
console.log("--- STEP 4: Replace 'Pro' with 'Pro Edition' ---");
let finalTitle = properTitle.replace("Pro", "Pro Edition");
console.log(`Result: "${finalTitle}"\n`);

/**
 * Final Summary: Display cleaned title and its properties
 */
console.log("=== FINAL PRODUCT TITLE ===");
console.log(`Title: ${finalTitle}`);
console.log(`Length: ${finalTitle.length} characters`);
console.log(`Word Count: ${finalTitle.split(' ').length} words`);

// Additional string information
console.log("\n--- Additional Info ---");
console.log(`First Character: ${finalTitle.charAt(0)}`);
console.log(`Last Character: ${finalTitle.charAt(finalTitle.length - 1)}`);
console.log(`Uppercase Version: ${finalTitle.toUpperCase()}`);
console.log(`Includes 'Edition': ${finalTitle.includes('Edition')}`);

console.log("\n✓ Product title successfully formatted for display!\n");

