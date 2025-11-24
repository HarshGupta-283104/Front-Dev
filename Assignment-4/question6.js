

/*
Q 6: Employee Management System (Classes + Object Methods)

Create a class Employee with properties: id, name, department, salary.
● Add method getAnnualSalary() and applyBonus(percent).
● Create 5 employee objects and calculate annual salary for each.
● Use reduce() to calculate total annual payout of the company.
*/

class Employee {
    constructor(id, name, department, salary) {
        if (salary <= 0) {
            throw new Error("Salary must be a positive number.");
        }
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent > 0) {
            const bonusAmount = this.salary * (percent / 100);
            this.salary += bonusAmount;
            console.log(`Applied ${percent}% bonus to ${this.name}. New monthly salary: ₹${this.salary.toFixed(2)}`);
        }
    }
}

// --- Demo ---

const employees = [
    new Employee(101, "Alice", "Technology", 80000),
    new Employee(102, "Bob", "HR", 55000),
    new Employee(103, "Charlie", "Finance", 70000),
    new Employee(104, "David", "Technology", 95000),
    new Employee(105, "Eve", "Marketing", 60000)
];

console.log("--- Employee Annual Salaries ---");
employees.forEach(emp => {
    console.log(`${emp.name}: ₹${emp.getAnnualSalary().toFixed(2)}`);
});

console.log("\n--- Applying a 10% Bonus to Tech Department ---");
employees.forEach(emp => {
    if (emp.department === 'Technology') {
        emp.applyBonus(10);
    }
});


console.log("\n--- Calculating Total Annual Payout of the Company ---");
const totalAnnualPayout = employees.reduce((total, emp) => {
    return total + emp.getAnnualSalary();
}, 0);

console.log(`The total annual payout for the company is: ₹${totalAnnualPayout.toFixed(2)}`);

