
document.addEventListener('DOMContentLoaded', () => {

    const user = {
        name: "John",
        email: "john@mail.com",
        age: 21
    };

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');
    const userObjectPre = document.getElementById('user-object-pre');
    const editForm = document.getElementById('edit-form');

    function displayUserObject() {
        userObjectPre.textContent = JSON.stringify(user, null, 2);
    }

    function populateForm() {
        nameInput.value = user.name;
        emailInput.value = user.email;
        ageInput.value = user.age;
    }

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Update user object from form fields
        user.name = nameInput.value;
        user.email = emailInput.value;
        user.age = parseInt(ageInput.value, 10);

        console.log("User object updated:", user);
        alert("User details updated!");

        // Refresh the display
        displayUserObject();
    });

    // Initial setup
    populateForm();
    displayUserObject();
});
