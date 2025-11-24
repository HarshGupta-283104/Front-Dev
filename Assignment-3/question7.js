
/*
Q7 – Smart Calculator
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

Tasks:
1. Use a switch to handle each operation.
2. Add custom error handling for divide by 0 and root of negative number.
3. If operation not recognized, throw InvalidOperationError.
4. Wrap in try...catch and print results in a formatted summary.
*/
"use strict";

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

function calculator(num1, num2, operation) {
    try {
        let result;
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                if (num2 === 0) {
                    throw new Error("Division by zero is not allowed.");
                }
                result = num1 / num2;
                break;
            case "power":
                result = Math.pow(num1, num2);
                break;
            case "root":
                if (num1 < 0) {
                    throw new Error("Cannot calculate the square root of a negative number.");
                }
                result = Math.sqrt(num1);
                break;
            default:
                throw new InvalidOperationError(`Operation '${operation}' is not recognized.`);
        }
        return `Success: ${num1} ${operation} ${num2} = ${result}`;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

const operations = ["add", "subtract", "multiply", "divide", "power", "root", "modulo"];
const num1 = 25;
const num2 = 5;
const num3 = 0;
const num4 = -9;


console.log("--- Smart Calculator Results ---");

operations.forEach(op => {
    let result;
    if (op === 'divide' && num2 === 0) {
        result = calculator(num1, num3, op);
    } else if (op === 'root') {
        result = calculator(num4, 0, op); // Test root of negative
    } else if (op === 'modulo') {
        result = calculator(num1, num2, op); // Test invalid operation
    }
    else {
        result = calculator(num1, num2, op);
    }
    console.log(result);
});

// Specific test for division by zero
console.log(calculator(10, 0, "divide"));

