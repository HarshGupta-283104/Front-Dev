

/*
Q6 – Pyramid Pattern Generator
Generate:
*
* * 
* * * 
* * * * 

Then:
1. Replace let with var and observe changes in output.
2. Debug step-by-step to track variable re-use.
3. Add an outer loop limit controlled by user input (default = 5).
4. Use "use strict" to catch undeclared loop variables.
*/
"use strict";

// --- Pyramid Generator with `let` (ES6) ---
console.log("--- Pyramid with `let` ---");
function generatePyramid(limit = 5) {
    for (let i = 1; i <= limit; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}
generatePyramid(4); // Generates the pattern as requested


// --- Task 1: Replace `let` with `var` ---
console.log("\n--- Pyramid with `var` ---");
/*
* Observation:
* When using `var`, the output of the pyramid pattern itself remains the same.
* The key difference is in variable scope.
* With `let`, `i` and `j` are block-scoped, meaning they only exist within their
* respective `for` loops.
* With `var`, `i` and `j` are function-scoped. After the loops finish, `i` and `j`
* would still be accessible within the `generatePyramidWithVar` function.
* This can lead to unexpected behavior in more complex scenarios, especially with closures.
*/
function generatePyramidWithVar(limit = 5) {
    for (var i = 1; i <= limit; i++) {
        var row = '';
        for (var j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
    // `i` is accessible here after the loop
    console.log("Value of `i` after loop with var:", i);
}
generatePyramidWithVar(4);


// --- Task 2: Debugging ---
/*
* To debug, place a breakpoint inside the inner loop (e.g., on `row += '* '`).
* Add `i`, `j`, and `row` to your watch list.
* As you step through:
* - `i` remains constant for each outer loop iteration.
* - `j` increments from 1 up to the current value of `i`.
* - `row` accumulates stars for each inner loop iteration.
* This helps visualize how the nested loops build the pattern row by row.
*/


// --- Task 3: User-defined Limit ---
console.log("\n--- Pyramid with User-defined Limit (e.g., 6) ---");
// The functions above already include a default limit.
// We can call it with a different value.
generatePyramid(6);


// --- Task 4: "use strict" ---
/*
* "use strict" is included at the top of this file.
* If we were to forget a declaration, for example:
* 
* for (i = 1; i <= limit; i++) { ... }
* 
* Strict mode would immediately throw a ReferenceError: "i is not defined",
* preventing us from creating an accidental global variable and helping us
* write cleaner, more reliable code.
*/
console.log("\n`'use strict';` is active. Undeclared variables would cause a ReferenceError.");
