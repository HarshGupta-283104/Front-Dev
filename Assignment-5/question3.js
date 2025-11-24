

/*
Q 3 . Create an object user with:
● a property name
● a method showName written as an arrow function
Log the output and explain why this.name is undefined.
Then fix it by using a normal function.
*/

// --- The Problem with Arrow Functions and `this` ---

const userWithArrow = {
    name: "Alex",
    // An arrow function does not have its own `this` context.
    // It inherits `this` from the parent scope (in this case, the global scope, e.g., `window` in a browser).
    showName: () => {
        console.log("Using arrow function:", this.name);
    }
};

console.log("--- Demonstrating the `this` issue with an arrow function ---");
userWithArrow.showName(); // Logs `undefined` because `this` refers to the global object, which does not have a `name` property.


// --- Explanation ---
/*
Why is `this.name` undefined?
Arrow functions do not bind their own `this` value. Instead, they lexically capture the `this`
from their enclosing (parent) scope. When `userWithArrow` is defined in the global scope,
the arrow function `showName` captures the global `this` (which is `window` in browsers or
an empty object in a Node.js module). Since `window.name` or `global.name` is not "Alex",
the result is `undefined`.
*/


// --- The Fix using a Normal Function ---

const userWithFunction = {
    name: "Barbara",
    // A traditional function gets its `this` value from how it is called.
    // When called as a method of an object (`user.showName()`), `this` refers to the object itself.
    showName: function() {
        console.log("Using normal function:", this.name);
    },

    // ES6 method syntax also works correctly
    showNameModern() {
        console.log("Using ES6 method syntax:", this.name);
    }
};

console.log("\n--- Fixing the issue with a normal function ---");
userWithFunction.showName(); // Logs "Barbara" because `this` correctly refers to `userWithFunction`.
userWithFunction.showNameModern(); // Also logs "Barbara".

