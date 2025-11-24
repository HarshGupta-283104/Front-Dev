
/*
Q 6. Create a prototype chain using constructor functions:
● Person → Faculty → Professor
Each should have its own property and method.
Show how a Professor object can access all methods up the chain.
*/

// --- Level 1: Person ---
function Person(name) {
    this.name = name;
}
Person.prototype.introduce = function() {
    console.log(`My name is ${this.name}.`);
};


// --- Level 2: Faculty (inherits from Person) ---
function Faculty(name, department) {
    Person.call(this, name); // Call parent constructor
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype); // Set up prototype chain
Faculty.prototype.constructor = Faculty; // Fix constructor property

Faculty.prototype.work = function() {
    console.log(`I work in the ${this.department} department.`);
};


// --- Level 3: Professor (inherits from Faculty) ---
function Professor(name, department, subject) {
    Faculty.call(this, name, department); // Call parent constructor
    this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype); // Set up prototype chain
Professor.prototype.constructor = Professor; // Fix constructor property

Professor.prototype.teach = function() {
    console.log(`I teach ${this.subject}.`);
};


// --- Demonstration ---

const prof = new Professor("Dr. Evans", "Science", "Physics");

console.log("--- Professor object accessing methods up the chain ---");

// 1. Accessing own method (Professor.prototype)
prof.teach();

// 2. Accessing inherited method from Faculty.prototype
prof.work();

// 3. Accessing inherited method from Person.prototype
prof.introduce();


// --- Inspecting the Chain ---
console.log("\n--- Prototype Chain Inspection ---");
console.log("Professor object:", prof);
console.log("Professor's prototype is Faculty.prototype:", Object.getPrototypeOf(prof) === Faculty.prototype);
console.log("Faculty's prototype is Person.prototype:", Object.getPrototypeOf(Faculty.prototype) === Person.prototype);
console.log("Person's prototype is Object.prototype:", Object.getPrototypeOf(Person.prototype) === Object.prototype);
