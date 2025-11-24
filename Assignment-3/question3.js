

/*
Q3 – Transaction Validator
const transactions = [
{ id: 1, amount: 2000 },
{ id: 2, amount: -500 },
{ id: 3 },
null
];

Tasks:
1. Loop through each transaction.
2. Throw custom errors for:

○ Negative amount
○ Missing amount or id
○ Null entries
3. Catch and categorize each error type in arrays (invalid, valid).
4. Print final reports with counts of successful and failed transactions.
5. Use a breakpoint to watch variable states.
*/
"use strict";

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null,
    { id: 4, amount: 1500 },
    { amount: 3000 },
    { id: 5, amount: 0 }
];

const validTransactions = [];
const invalidTransactions = [];

transactions.forEach((tx, index) => {
    try {
        if (tx === null) {
            throw new ValidationError("Null transaction entry");
        }
        if (tx.id === undefined || tx.amount === undefined) {
            throw new ValidationError("Missing id or amount");
        }
        if (tx.amount < 0) {
            throw new ValidationError("Negative amount");
        }

        validTransactions.push(tx);

    } catch (error) {
        invalidTransactions.push({ transaction: tx, error: error.message, index: index });
    }
});


console.log("--- Transaction Validation Report ---");
console.log(`Successful transactions: ${validTransactions.length}`);
console.log(`Failed transactions: ${invalidTransactions.length}`);

console.log("\n--- Valid Transactions ---");
console.table(validTransactions);


console.log("\n--- Failed Transactions Details ---");
invalidTransactions.forEach(item => {
    console.log(`Index: ${item.index}, Transaction: ${JSON.stringify(item.transaction)}, Error: ${item.error}`);
});

// To use a breakpoint, you would run this in a debugger (like in VS Code or browser dev tools)
// and place a breakpoint on the line inside the forEach loop.
console.log("\nTo debug, place a breakpoint inside the loop and run with a debugger.");
