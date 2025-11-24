
/*
Q 8. Add a custom prototype method myMap() to all arrays that behaves like the built-in map()
function.
Example:
[1,2,3].myMap(num => num * 2); // [2,4,6]
*/

// Add the myMap method to the Array prototype
Array.prototype.myMap = function(callback) {
    const newArray = [];
    // `this` inside this function refers to the array instance on which myMap is called.
    for (let i = 0; i < this.length; i++) {
        // Call the callback function for each element, passing the element, its index, and the original array
        const result = callback(this[i], i, this);
        newArray.push(result);
    }
    return newArray;
};


// --- Demonstration ---

const numbers = [1, 2, 3, 4, 5];

// 1. Doubling each number
const doubled = numbers.myMap(function(num) {
    return num * 2;
});
console.log("Doubled:", doubled); // Expected: [2, 4, 6, 8, 10]


// 2. Converting numbers to strings with their index
const indexedStrings = numbers.myMap((num, index) => {
    return `Item at index ${index} is ${num}`;
});
console.log("Indexed Strings:", indexedStrings);
// Expected: ["Item at index 0 is 1", "Item at index 1 is 2", ...]


// 3. Using it on a different array
const words = ["hello", "world"];
const uppercasedWords = words.myMap(word => word.toUpperCase());
console.log("Uppercased:", uppercasedWords); // Expected: ["HELLO", "WORLD"]


// 4. Verifying it works on an empty array
const emptyArray = [].myMap(item => item * 2);
console.log("Empty array:", emptyArray); // Expected: []
