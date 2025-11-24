
/*
Q1 – Dynamic Data Parser
You receive mixed API data:
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14",
null, undefined];

Tasks:
1. Convert each value into a Number, Boolean, and String form.
2. Skip invalid numbers (NaN, " ", "100px") but log them separately.
3. Build two arrays — one for valid numeric data, one for invalid.
4. Print a detailed report using loops and conditional formatting.
*/
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidNumericData = [];

console.log("Data Conversion Report");
console.log("========================");

apiData.forEach((data, index) => {
    console.log(`\nProcessing item ${index + 1}: ${data}`);

    // String conversion
    const stringValue = String(data);
    console.log(`  As String: "${stringValue}"`);

    // Boolean conversion
    const booleanValue = Boolean(data);
    console.log(`  As Boolean: ${booleanValue}`);

    // Number conversion and validation
    const numberValue = Number(data);
    if (!isNaN(numberValue) && String(data).trim() !== "" && data !== null) {
        if (typeof data === 'string' && data.includes('px')) {
            invalidNumericData.push(data);
            console.log(`  As Number: Invalid ("${data}" is not a valid number)`);
        } else {
            validNumericData.push(numberValue);
            console.log(`  As Number: ${numberValue}`);
        }
    } else {
        invalidNumericData.push(data);
        console.log(`  As Number: Invalid`);
    }
});


console.log("\n\n--- Summary ---");
console.log("Valid Numeric Data:", validNumericData);
console.log("Invalid Numeric Data:", invalidNumericData);
