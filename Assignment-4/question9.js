
document.addEventListener('DOMContentLoaded', () => {

    class Cart {
        constructor() {
            this.items = [];
            this.discountPercent = 0;
            this.couponApplied = false;
        }

        addItem(name, price, quantity) {
            this.items.push({ name, price, quantity });
            this.render();
        }

        getTotal() {
            return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
        }

        applyCoupon(couponCode) {
            const couponRegex = /^(SAVE|DISC)(\d{2})$/;
            const match = couponCode.toUpperCase().match(couponRegex);

            if (match) {
                this.discountPercent = parseInt(match[2], 10);
                this.couponApplied = true;
                this.render();
                return { success: true, message: `${this.discountPercent}% discount applied successfully!` };
            } else {
                this.discountPercent = 0;
                this.couponApplied = false;
                this.render();
                return { success: false, message: 'Invalid coupon code. Format: SAVE20 or DISC10.' };
            }
        }

        render() {
            const cartItemsEl = document.getElementById('cart-items');
            const subtotalEl = document.getElementById('subtotal');
            const discountEl = document.getElementById('discount');
            const finalTotalEl = document.getElementById('final-total');

            // Render items
            cartItemsEl.innerHTML = '';
            this.items.forEach(item => {
                const li = document.createElement('li');
                li.className = 'cart-item';
                li.innerHTML = `
                    <span>${item.name} (x${item.quantity})</span>
                    <span>₹${(item.price * item.quantity).toFixed(2)}</span>
                `;
                cartItemsEl.appendChild(li);
            });

            // Calculate and render totals
            const subtotal = this.getTotal();
            const discountAmount = subtotal * (this.discountPercent / 100);
            const finalTotal = subtotal - discountAmount;

            subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
            discountEl.textContent = `-₹${discountAmount.toFixed(2)}`;
            finalTotalEl.textContent = `₹${finalTotal.toFixed(2)}`;
        }
    }


    // --- Demo ---

    const myCart = new Cart();

    // Add initial items
    myCart.addItem('Wireless Mouse', 1500, 1);
    myCart.addItem('USB-C Cable', 400, 2);
    myCart.addItem('Keyboard', 3000, 1);

    const applyCouponBtn = document.getElementById('apply-coupon-btn');
    const couponInput = document.getElementById('coupon-input');
    const couponMessageEl = document.getElementById('coupon-message');

    applyCouponBtn.addEventListener('click', () => {
        const couponCode = couponInput.value;
        const result = myCart.applyCoupon(couponCode);

        couponMessageEl.textContent = result.message;
        couponMessageEl.className = result.success ? 'success' : 'error';
    });

});
