
document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const seatsInput = document.getElementById('seats');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const seatsError = document.getElementById('seatsError');

    const ticketDetails = document.getElementById('ticket-details');
    const ticketPlaceholder = document.getElementById('ticket-placeholder');

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        // --- Validation ---

        // Name: Alphabets only
        if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
            nameError.textContent = 'Name must contain only alphabets.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Email: Proper format
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Seats: 1 to 10 only
        const seatsValue = parseInt(seatsInput.value, 10);
        if (isNaN(seatsValue) || seatsValue < 1 || seatsValue > 10) {
            seatsError.textContent = 'Please enter a number of seats between 1 and 10.';
            isValid = false;
        } else {
            seatsError.textContent = '';
        }

        // --- Store and Display ---

        if (isValid) {
            const bookingInfo = {
                name: nameInput.value,
                email: emailInput.value,
                seats: seatsValue
            };

            console.log('Booking Info:', bookingInfo);

            // Display ticket details
            document.getElementById('ticketName').textContent = bookingInfo.name;
            document.getElementById('ticketEmail').textContent = bookingInfo.email;
            document.getElementById('ticketSeats').textContent = bookingInfo.seats;

            ticketDetails.style.display = 'block';
            ticketPlaceholder.style.display = 'none';

            alert('Booking successful! Your ticket is displayed.');
            bookingForm.reset();
        } else {
            ticketDetails.style.display = 'none';
            ticketPlaceholder.style.display = 'block';
        }
    });
});
