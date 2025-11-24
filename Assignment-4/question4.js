
document.addEventListener('DOMContentLoaded', () => {

    class FormBuilder {
        constructor(containerId, fields) {
            this.container = document.getElementById(containerId);
            this.fields = fields;
            this.form = document.createElement('form');
            this.form.id = 'dynamicForm';
            if (!this.container) {
                throw new Error(`Container with id '${containerId}' not found.`);
            }
        }

        render() {
            let formHTML = '';
            this.fields.forEach(field => {
                formHTML += `<div class="form-group">`;
                formHTML += `<label for="${field.name}">${field.label}</label>`;
                switch (field.type) {
                    case 'text':
                    case 'email':
                    case 'password':
                        formHTML += `<input type="${field.type}" id="${field.name}" name="${field.name}" required>`;
                        break;
                    case 'select':
                        formHTML += `<select id="${field.name}" name="${field.name}">`;
                        field.options.forEach(option => {
                            formHTML += `<option value="${option.value}">${option.label}</option>`;
                        });
                        formHTML += `</select>`;
                        break;
                }
                formHTML += `</div>`;
            });

            this.form.innerHTML = formHTML;
            const submitButton = document.createElement('button');
            submitButton.type = 'submit';
            submitButton.textContent = 'Submit';
            this.form.appendChild(submitButton);

            this.container.appendChild(this.form);
        }

        getFormData() {
            const formData = new FormData(this.form);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            return data;
        }
    }


    // --- Demo ---

    const formFields = [
        { type: 'text', label: 'Username', name: 'username' },
        { type: 'email', label: 'Email Address', name: 'email' },
        { type: 'password', label: 'Password', name: 'password' },
        {
            type: 'select',
            label: 'Department',
            name: 'department',
            options: [
                { value: 'hr', label: 'Human Resources' },
                { value: 'tech', label: 'Technology' },
                { value: 'finance', label: 'Finance' }
            ]
        }
    ];

    const formBuilder = new FormBuilder('form-container', formFields);
    formBuilder.render();

    const dataOutput = document.getElementById('data-output');

    formBuilder.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submittedData = formBuilder.getFormData();
        dataOutput.textContent = JSON.stringify(submittedData, null, 2);
        alert("Form submitted! Check the data below.");
    });

});
