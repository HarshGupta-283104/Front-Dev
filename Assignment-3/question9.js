

/*
Q9 – JSON Audit
const rawData = [
'{"user":"Alex","age":25}"',
'{"id":2}"',
'{invalid}',
'{"user":"Mina","age":"22"}'
];

Tasks:
1. Parse each entry in a loop using try...catch.
2. Detect missing keys (user, age) and invalid JSON.
3. Push valid entries to a clean array; log errors with line numbers.
4. Debug step-by-step to see how control flows on error.
5. Add bonus: convert age to Number and filter under-18 users.
*/
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}', // Missing 'user' and 'age'
    '{invalid}', // Invalid JSON format
    '{"user":"Mina","age":"22"}',
    '{"user":"Sam","age":17}', // For age filtering
    '{"user":"Leo"}' // Missing 'age'
];

const cleanData = [];
const errorLog = [];

console.log("--- JSON Audit ---");

rawData.forEach((jsonString, index) => {
    // To debug, place a breakpoint on the `try` line below.
    try {
        // Task 1: Parse the JSON string
        const parsed = JSON.parse(jsonString);

        // Task 2: Detect missing keys
        if (!parsed.user || !parsed.age) {
            throw new Error("Missing 'user' or 'age' key.");
        }

        // Bonus Task: Convert age to Number
        const age = Number(parsed.age);
        if (isNaN(age)) {
            throw new Error("'age' is not a valid number.");
        }

        // Bonus Task: Filter under-18 users
        if (age < 18) {
            // This is a valid entry, but we are choosing to filter it out.
            // Logging it as an info message rather than an error.
            console.log(`INFO: Filtering out user ${parsed.user} (under 18). Line: ${index + 1}`);
        } else {
             // Task 3: Push valid entries
            cleanData.push({ ...parsed, age });
        }

    } catch (e) {
        // Task 3: Log errors with line numbers
        errorLog.push({
            line: index + 1,
            rawData: jsonString,
            error: e.message
        });
    }
});

console.log("\n--- Audit Complete ---");

console.log("\n--- Valid User Data (18 and over) ---");
console.table(cleanData);

console.log("\n--- Error Log ---");
console.table(errorLog);

// Task 4: Debugging
// To debug, set a breakpoint on the `try` keyword inside the forEach loop.
// Add `jsonString`, `parsed`, and `e` to the watch list.
// - On the first iteration, execution flows through the `try` block successfully.
// - On the second, it hits the `if (!parsed.user ...)` and jumps to `catch`.
// - On the third, `JSON.parse` fails and jumps to `catch`.
// - On the fourth, it flows through successfully.
// This shows how `try...catch` provides robust error handling during the loop.

