
/*
Q 4 . Create a constructor function Car(brand, model). Add a prototype method
getDetails() that prints car brand and model. Create two car objects and call this method to
show method sharing via prototype.
*/

// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Add a method to the Car's prototype
// This means all instances of Car will share this single method, saving memory.
Car.prototype.getDetails = function() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};


// --- Demonstration ---

// Create two car objects (instances of Car)
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

console.log("--- Calling getDetails() on car objects ---");
car1.getDetails(); // Output: Brand: Toyota, Model: Camry
car2.getDetails(); // Output: Brand: Honda, Model: Civic

// --- Verification of Method Sharing ---
console.log("\n--- Verifying that the method is shared ---");

// Both objects point to the exact same function in memory.
const isMethodShared = car1.getDetails === car2.getDetails;
console.log("Is the getDetails() method shared between car1 and car2?", isMethodShared); // true

// The method is not on the object itself, but on its prototype.
console.log("Does car1 have its own getDetails property?", car1.hasOwnProperty('getDetails')); // false
console.log("Does the Car prototype have the getDetails property?", Car.prototype.hasOwnProperty('getDetails')); // true
