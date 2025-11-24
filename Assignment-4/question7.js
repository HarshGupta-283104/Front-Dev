
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const successMessage = document.getElementById('success-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        successMessage.style.display = 'none'; // Hide on new attempt

        let isUsernameValid = false;
        let isPasswordValid = false;

        // Username validation: at least 5 characters
        if (usernameInput.value.length >= 5) {
            usernameError.textContent = '';
            isUsernameValid = true;
        } else {
            usernameError.textContent = 'Username must be at least 5 characters long.';
        }

        // Password validation: at least 8 chars, 1 number, 1 uppercase, 1 lowercase, 1 special char
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (passwordRegex.test(passwordInput.value)) {
            passwordError.textContent = '';
            isPasswordValid = true;
        } else {
            passwordError.textContent = 'Password needs 8+ chars, with uppercase, lowercase, number, and special character.';
        }

        if (isUsernameValid && isPasswordValid) {
            successMessage.style.display = 'block';
            console.log('Login successful for user:', usernameInput.value);
            loginForm.reset();
        }
    });
});
