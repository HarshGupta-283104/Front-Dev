

/*
Q 5 . Create a Person constructor with property name. Then create a Student constructor
that inherits from Person and adds property branch. Add methods to print both name and
branch using prototypes. Demonstrate the prototype chain working.
*/

// --- Parent Constructor ---
function Person(name) {
    this.name = name;
}

// Add a method to the Person prototype
Person.prototype.printName = function() {
    console.log(`Name: ${this.name}`);
};


// --- Child Constructor ---
function Student(name, branch) {
    // Call the parent constructor to set the name property
    // .call() executes the Person function, setting `this` inside Person to be the current student instance.
    Person.call(this, name);
    this.branch = branch;
}

// --- Setting up the Prototype Chain for Inheritance ---

// 1. Create a new object with Person.prototype as its prototype.
//    This links the Student's prototype to the Person's prototype.
Student.prototype = Object.create(Person.prototype);

// 2. (Good practice) Reset the constructor property.
//    After the step above, Student.prototype.constructor points to Person. We fix it to point back to Student.
Student.prototype.constructor = Student;

// Add a method to the Student prototype
Student.prototype.printBranch = function() {
    console.log(`Branch: ${this.branch}`);
};


// --- Demonstration ---

const student1 = new Student("Charlie", "Computer Science");

console.log("--- Calling methods on Student object ---");

// Calling the method from the Person prototype (inherited)
student1.printName(); // Output: Name: Charlie

// Calling the method from the Student prototype
student1.printBranch(); // Output: Branch: Computer Science


// --- Demonstrating the Prototype Chain ---
console.log("\n--- Inspecting the Prototype Chain ---");

// The object `student1` inherits from `Student.prototype`
console.log(Object.getPrototypeOf(student1) === Student.prototype); // true

// `Student.prototype` inherits from `Person.prototype`
console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype); // true

// And `Person.prototype` inherits from `Object.prototype`
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true
