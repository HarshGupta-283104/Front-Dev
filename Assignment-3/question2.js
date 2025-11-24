
/*
Q2 – Employee Bonus Calculator
Given employee data:
const employees = [
{ name: "Amit", salary: "45000", years: "5" },
{ name: "Sara", salary: "38000", years: "2" },
{ name: "Kiran", salary: "52000", years: "7" }
];

Tasks:
1. Convert salary and years to numbers.
2. Calculate bonus = (salary * 0.1) if years > 3 else (salary * 0.05).
3. Apply strict validation using "use strict" (no implicit globals).
4. Use template strings to print each employee’s formatted details.
5. Add try...catch to handle conversion or missing property errors.
*/
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" },
    { name: "Sunil", salary: "abc", years: "4" }, // for error handling
    { name: "Deepa", years: "9" } // for error handling
];

employees.forEach(employee => {
    try {
        if (!employee.name || !employee.salary || !employee.years) {
            throw new Error("Missing property");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (isNaN(salary) || isNaN(years)) {
            throw new Error("Invalid data type for salary or years");
        }

        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

        console.log(`
            Employee: ${employee.name}
            Salary: ₹${salary}
            Years: ${years}
            Bonus: ₹${bonus}
            Total Compensation: ₹${salary + bonus}
        `);

    } catch (error) {
        console.error(`
            Error processing employee: ${employee.name || 'Unknown'}
            Reason: ${error.message}
        `);
    }
});
