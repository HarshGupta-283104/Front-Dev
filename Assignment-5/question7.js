

/*
Q 7 . Write a function makeMultiplier(multiplier) that returns another function to
multiply any number by that multiplier.

Example:
const triple = makeMultiplier(3);
console.log(triple(5)); // 15
Explain how closure works in this example.
*/

function makeMultiplier(multiplier) {
    // This outer function creates a lexical environment where the `multiplier` variable exists.

    // It returns another function. This inner function is a "closure".
    return function(number) {
        // This inner function "closes over" or "remembers" the `multiplier`
        // variable from its parent scope, even after `makeMultiplier` has finished executing.
        return number * multiplier;
    };
}


// --- Demonstration ---
const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log("Using the 'triple' closure:");
console.log(triple(5));  // 15
console.log(triple(10)); // 30

console.log("\nUsing the 'double' closure:");
console.log(double(5));  // 10
console.log(double(10)); // 20


// --- Explanation of Closure ---
/*
1.  **Execution of `makeMultiplier(3)`:**
    - The `makeMultiplier` function is called with `multiplier = 3`.
    - It creates a new function (the inner anonymous function).
    - Crucially, it returns this new function. The `makeMultiplier` function's execution is now complete.

2.  **The Closure:**
    - Normally, when a function finishes, its local variables (like `multiplier`) are destroyed.
    - However, because the inner function still needs the `multiplier` variable to work, JavaScript
      preserves it. The combination of the inner function and its "memory" of the outer scope's
      variables (`multiplier`) is called a closure.

3.  **Execution of `triple(5)`:**
    - We are now calling the inner function that was returned and stored in the `triple` variable.
    - This function remembers that its `multiplier` is `3`.
    - It takes its own argument, `number = 5`, and calculates `5 * 3`, returning `15`.

In short, a closure is a function that remembers the environment in which it was created.
*/

