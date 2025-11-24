

/*
Q10 – Nested Hoisting and Closures
function outer() {
console.log(count);
var count = 5;
function inner() {
console.log(count);
var count = 10;
}
inner();
}
outer();

Tasks:

1. Predict and explain output.
2. Show how hoisting creates separate memory contexts.
3. Convert the inner function to an arrow and note behavior changes.
4. Add a debug session and explain the call stack flow.
*/
"use strict";

// --- Original Code ---

/*
// Task 1: Prediction and Explanation
function outer() {
    // Hoisting moves `var count` declaration here: `var count;`
    console.log(count); // Prediction: undefined. The variable `count` is hoisted but not yet assigned.
    var count = 5;      // Assignment happens here.

    function inner() {
        // Hoisting moves `var count` here: `var count;` (This is a NEW variable in the inner scope)
        console.log(count); // Prediction: undefined. The `count` from the inner scope is hoisted, shadowing the outer `count`.
        var count = 10;     // Assignment to the inner `count` happens here.
    }
    inner();
}
// outer(); // Predicted output: undefined, undefined
*/
console.log("--- Predicted Output ---");
console.log("undefined");
console.log("undefined");


console.log("\n--- Actual Output ---");
function outer() {
    console.log(count);
    var count = 5;
    function inner() {
        console.log(count);
        var count = 10;
    }
    inner();
}
outer();

// Task 2: Separate Memory Contexts (Execution Contexts)
/*
- **Global Context**: Contains `outer`.
- **`outer()` Execution Context**:
  - A variable `count` is created and initialized to `undefined` during the creation phase (hoisting).
  - The first `console.log(count)` prints `undefined`.
  - `count` is assigned the value `5`.
  - `inner()` is called, creating a new execution context.
- **`inner()` Execution Context**:
  - A NEW variable `count` is created in this context and initialized to `undefined` (hoisting). This is a different `count` from the one in `outer`.
  - This inner `count` *shadows* the outer `count`.
  - The second `console.log(count)` prints `undefined` (from the inner scope).
  - The inner `count` is assigned the value `10`.
  - `inner()` finishes and its context is popped off the stack.
- `outer()` finishes and its context is popped off the stack.
*/


// Task 3: Convert Inner Function to Arrow Function
console.log("\n--- With Inner Arrow Function ---");
function outerWithArrow() {
    console.log(count); // Still `undefined` due to hoisting in this scope
    var count = 5;

    const inner = () => {
        // Arrow functions do not have their own `this` binding, but they follow standard lexical scope rules for variables.
        // The behavior for `var` hoisting within a new scope block would be the same if we created a block.
        // However, an arrow function does not create a new scope for `var` in the same way a `function` declaration does for its variables.
        // Let's demonstrate with a block scope to be clear.
        {
             console.log(count); // Here, it would access the outer `count` (5) if not redeclared.
             // var count = 10; // If we use var, it's still function-scoped to outerWithArrow, causing issues.
             let count = 10; // Using `let` creates a block-scoped variable.
             console.log(count); // This would print 10.
        }
    };
    // The key takeaway is that hoisting behavior is tied to `var` and `function` declarations,
    // not the type of function (arrow vs. regular). The scoping rules of `var`, `let`, and `const` are what matter.
    // The original code's behavior is due to `var` being function-scoped.
}
// outerWithArrow(); // This would behave similarly if `var` is used inside. The interesting change comes from using `let` or `const`.


// Task 4: Call Stack Explanation
/*
1.  **`main()` (or Global Scope):** The script starts. `outer()` is called.
    - Call Stack: [`main`]

2.  **`outer()` is called:** A new frame for `outer()` is pushed onto the stack.
    - Call Stack: [`outer`, `main`]
    - `outer()` executes its code. It logs `undefined`, sets `count = 5`, and then calls `inner()`.

3.  **`inner()` is called:** A new frame for `inner()` is pushed onto the stack.
    - Call Stack: [`inner`, `outer`, `main`]
    - `inner()` executes. It logs its own hoisted, `undefined` `count`, then sets it to `10`.

4.  **`inner()` finishes:** The `inner()` frame is popped off the stack. Control returns to `outer()`.
    - Call Stack: [`outer`, `main`]

5.  **`outer()` finishes:** The `outer()` frame is popped off the stack. Control returns to the global scope.
    - Call Stack: [`main`]

6.  **Script ends.**
*/
console.log("\nCall stack explanation is in the comments.");

