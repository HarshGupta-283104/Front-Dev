

/*
Q 1: E-Commerce Product Manager (Classes + Objects)
You’re building an E-commerce Admin Panel. Create a Product class with properties like id,
name, price, and category.
─ Add methods to:
─ Apply a discount (e.g., 10%)
─ Display product details in a formatted string
─ Create multiple product objects and store them in an array.
─ Display products with price > 1000 in the console using a filter.
*/

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percentage) {
        if (percentage > 0 && percentage < 100) {
            this.price -= this.price * (percentage / 100);
        } else {
            console.log("Invalid discount percentage. Must be between 0 and 100.");
        }
    }

    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₰${this.price.toFixed(2)}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 45000, "Electronics"),
    new Product(2, "T-Shirt", 800, "Apparel"),
    new Product(3, "Coffee Maker", 2500, "Appliances"),
    new Product(4, "Book", 600, "Books"),
    new Product(5, "Smartphone", 25000, "Electronics")
];

console.log("--- All Products ---");
products.forEach(p => console.log(p.displayDetails()));

// Apply a discount to one product
console.log("\n--- Applying 15% discount to Laptop ---");
products[0].applyDiscount(15);
console.log(products[0].displayDetails());


console.log("\n--- Products with Price > ₰1000 ---");
const expensiveProducts = products.filter(p => p.price > 1000);
expensiveProducts.forEach(p => console.log(p.displayDetails()));
