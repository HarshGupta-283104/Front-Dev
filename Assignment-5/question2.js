
/*
Q 2 . Create a function applyOperation(numbers, operation) that takes an array and a
callback function.
Use it to:
● Double each number in [1,2,3,4]
● Square each number in [1,2,3,4]
*/

function applyOperation(numbers, operationCallback) {
    // The map method is perfect for this, as it applies a function to every element
    // and returns a new array.
    return numbers.map(operationCallback);
}


// --- Callbacks ---

// Callback to double a number
const double = (num) => num * 2;

// Callback to square a number
const square = (num) => num * num;


// --- Demonstration ---

const numbers = [1, 2, 3, 4];

console.log("Original Array:", numbers);

// Use the function to double the numbers
const doubledNumbers = applyOperation(numbers, double);
console.log("Doubled:", doubledNumbers); // Expected: [2, 4, 6, 8]

// Use the function to square the numbers
const squaredNumbers = applyOperation(numbers, square);
console.log("Squared:", squaredNumbers); // Expected: [1, 4, 9, 16]
