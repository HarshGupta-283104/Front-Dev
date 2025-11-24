
/*
Q4 – Debugging Mystery
Start with:
"use strict";
function showMessage() {
greeting = "Welcome"; // undeclared
console.log(greeting);
}
showMessage();

Tasks:
1. Identify why this throws an error under strict mode.
2. Fix it and explain how scope declaration rules changed behavior.
3. Add a watch variable and observe the call stack in VS Code’s debugger.
*/

"use strict";

/*
* Task 1: Why it throws an error in strict mode.
* In strict mode, assigning a value to an undeclared variable is prohibited.
* The variable `greeting` is not declared with `var`, `let`, or `const`.
* Without strict mode, JavaScript would have created a global variable `greeting`,
* but strict mode prevents this to avoid accidental globals.
* This results in a ReferenceError.
*/

// Task 2: Fix the code
function showMessage() {
    // FIX: Declare the variable with `let` (or `const`/`var`)
    let greeting = "Welcome";
    console.log(greeting);

    // Task 3: Debugging Observation
    // 1. Add a breakpoint on the `console.log(greeting)` line.
    // 2. Add `greeting` to the "Watch" panel in your debugger.
    // 3. Step through the code.
    // 4. In the "Call Stack" panel, you will see `showMessage` at the top,
    //    indicating it's the currently executing function.
    // 5. In the "Variables" or "Scope" panel, you will see `greeting` listed
    //    under the local scope of `showMessage`.
}

showMessage();
