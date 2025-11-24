

/*
Q 9 . Rewrite your Person → Student inheritance example using ES6 classes with
extends and super().
Show that both class and prototype versions behave the same.
*/

// --- Original Prototype-based Inheritance (from Q5 for comparison) ---

function PersonProto(name) {
    this.name = name;
}
PersonProto.prototype.printName = function() { console.log(`Proto Name: ${this.name}`); };

function StudentProto(name, branch) {
    PersonProto.call(this, name);
    this.branch = branch;
}
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.printBranch = function() { console.log(`Proto Branch: ${this.branch}`); };

console.log("--- Prototype-based Version ---");
const studentProto = new StudentProto("David", "Mechanical");
studentProto.printName();
studentProto.printBranch();


// --- Rewritten using ES6 Classes ---

// Parent Class
class Person {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`Class Name: ${this.name}`);
    }
}

// Child Class that inherits from Person
class Student extends Person {
    constructor(name, branch) {
        // `super(name)` calls the parent class's constructor
        super(name);
        this.branch = branch;
    }

    printBranch() {
        console.log(`Class Branch: ${this.branch}`);
    }
}

console.log("\n--- ES6 Class-based Version ---");
const studentClass = new Student("Emily", "Civil");
studentClass.printName();  // Inherited method
studentClass.printBranch(); // Own method


// --- Behavioral Comparison ---
/*
ES6 classes are primarily "syntactic sugar" over the existing prototype-based inheritance.
They provide a much cleaner and more intuitive syntax but achieve the same underlying result.

1.  **Inheritance:** `extends` automatically handles the prototype chaining that we did manually
    with `Object.create(Person.prototype)`.

2.  **Constructor Chaining:** `super()` in the child's constructor calls the parent's constructor,
    just like `Person.call(this, name)` did. In classes, you MUST call `super()` before using `this`.

3.  **Methods:** Methods defined inside a class are automatically added to that class's prototype,
    just as we did manually with `Person.prototype.printName = ...`.

As shown in the console output, both versions produce the same kind of behavior: the student
object can call its own methods and the methods inherited from its parent.
*/

console.log("\n--- Verifying Prototype Chain in Class Version ---");
console.log(Object.getPrototypeOf(studentClass) === Student.prototype); // true
console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype); // true

