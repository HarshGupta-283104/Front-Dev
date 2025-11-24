
/*
Q8. Dynamic Discount Evaluator
A store gives discounts based on product categories and cart totals.
Requirements:
Use an array of objects:
const cart = [
{ item: "Laptop", category: "electronics", price: 45000 },
{ item: "Shoes", category: "fashion", price: 2500 },
{ item: "Book", category: "education", price: 600 }
];
●
● If category = “electronics” → 10% discount
● If category = “fashion” → 5% discount
● If total cart value > 50000 → apply extra 5% overall discount.
● Use loops, conditionals, and reduce() to calculate the final total.
*/

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

function calculateTotal(cart) {
    let total = cart.reduce((acc, item) => {
        let price = item.price;
        if (item.category === "electronics") {
            price *= 0.9;
        } else if (item.category === "fashion") {
            price *= 0.95;
        }
        return acc + price;
    }, 0);

    if (total > 50000) {
        total *= 0.95;
    }

    return total;
}

const finalTotal = calculateTotal(cart);
console.log(`Final total after discounts: ₹${finalTotal.toFixed(2)}`);
