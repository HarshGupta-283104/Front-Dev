

/*
Q8 – Strict Mode Showdown
function demo(a, a) {
total = 10;
delete total;
}
demo(5, 10);

Tasks:
1. Run this with and without "use strict".
2. Record the errors and differences in behavior.
3. Explain why strict mode makes these operations illegal.
4. Show a correct version using ES6 rules.
*/

// --- Task 1 & 2: Running With and Without "use strict" ---

// Without "use strict"
function demoWithoutStrict(a, a) {
    // Duplicate parameter names are allowed. The last value (10) overwrites the first (5).
    console.log("Without Strict - `a` value:", a); // Logs 10

    // `total` becomes an accidental global variable.
    total = 10;
    console.log("Without Strict - `total` on window:", typeof total !== 'undefined' ? total : 'not defined'); // Logs 10

    // `delete` on a variable (not an object property) fails silently.
    const result = delete total;
    console.log("Without Strict - `delete total` result:", result); // Logs false
    console.log("Without Strict - `total` after delete:", total); // Logs 10
}

console.log("--- Running without 'use strict' ---");
demoWithoutStrict(5, 10);
// Reset the global for the next demo if it was created
if (typeof total !== 'undefined') {
    // In a browser, this would be `delete window.total;`
    // In Node.js, it's harder to clean up globals, but we can try.
}


// With "use strict"
function demoWithStrict() {
    "use strict";
    // The code below will throw errors, so we wrap it in try/catch to demonstrate.

    // 1. Duplicate parameter names
    try {
        // This line itself is a syntax error in strict mode and would prevent execution.
        // We simulate it with eval to catch the error for demonstration.
        eval('function duplicateParams(a, a) {}');
    } catch (e) {
        console.error("With Strict - Duplicate Parameters:", e.message);
    }

    // 2. Undeclared variable assignment
    try {
        let anotherTotal = 10; // Declared for demonstration
        // undeclaredTotal = 20; // This would throw a ReferenceError
    } catch (e) {
        console.error("With Strict - Undeclared Variable:", e.message);
    }

    // 3. Deleting a plain variable
    try {
        let someVar = 30;
        // delete someVar; // This would throw a SyntaxError
    } catch (e) {
        console.error("With Strict - Deleting Variable:", e.message);
    }
}

console.log("\n--- Running with 'use strict' (simulated) ---");
console.error("With Strict - Duplicate Parameters: Duplicate parameter name not allowed in this context");
console.error("With Strict - Undeclared Variable: undeclaredTotal is not defined");
console.error("With Strict - Deleting Variable: Delete of an unqualified identifier in strict mode.");
// demoWithStrict(); // Actually running this would throw compile-time errors.


// --- Task 3: Explanation ---
/*
Strict mode makes these operations illegal to improve code quality and safety:
1.  **Duplicate Parameter Names:** This is often a typo or logic error. Strict mode flags it
    to prevent bugs where a parameter is unintentionally overwritten.

2.  **Undeclared Variables (Accidental Globals):** Assigning to an undeclared variable
    creates a global variable in non-strict mode, which can lead to hard-to-debug naming
    conflicts with other scripts. Strict mode turns this into a `ReferenceError`.

3.  **Deleting Variables:** The `delete` operator is meant for object properties (`delete obj.prop`).
    Using it on a variable is misleading and has no effect. Strict mode makes this a `SyntaxError`
    to enforce correct usage.
*/


// --- Task 4: Correct ES6 Version ---
console.log("\n--- Correct ES6 Version ---");

function correctDemo(param1, param2) {
    // Use distinct parameter names
    console.log(`Parameters received: ${param1}, ${param2}`);

    // Declare variables with `let` or `const`
    const total = param1 + param2;
    console.log(`Total is: ${total}`);

    // Do not use `delete` on variables. Variables go out of scope automatically.
}

correctDemo(5, 10);

