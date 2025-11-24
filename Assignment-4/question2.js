document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('studentForm');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');

    const validators = {
        name: {
            regex: /^[a-zA-Z\s]+$/,
            message: 'Name must contain only alphabets and spaces.',
            input: nameInput,
            error: nameError
        },
        email: {
            regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Please enter a valid email address.',
            input: emailInput,
            error: emailError
        },
        phone: {
            regex: /^\d{10}$/,
            message: 'Phone number must be exactly 10 digits.',
            input: phoneInput,
            error: phoneError
        },
        password: {
            regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
            message: 'Password must be at least 8 characters, with 1 uppercase, 1 number, and 1 special character.',
            input: passwordInput,
            error: passwordError
        }
    };

    function validateField(fieldName) {
        const validator = validators[fieldName];
        const value = validator.input.value;

        if (validator.regex.test(value)) {
            validator.input.classList.add('valid');
            validator.input.classList.remove('invalid');
            validator.error.textContent = '';
            return true;
        } else {
            validator.input.classList.add('invalid');
            validator.input.classList.remove('valid');
            validator.error.textContent = validator.message;
            return false;
        }
    }

    Object.keys(validators).forEach(fieldName => {
        validators[fieldName].input.addEventListener('input', () => validateField(fieldName));
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        let isFormValid = true;
        Object.keys(validators).forEach(fieldName => {
            if (!validateField(fieldName)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            alert('Registration successful!');
            form.reset();
            Object.values(validators).forEach(v => v.input.classList.remove('valid'));
        } else {
            alert('Please correct the errors in the form.');
        }
    });
});
