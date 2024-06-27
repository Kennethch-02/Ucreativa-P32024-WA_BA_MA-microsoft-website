document.addEventListener('DOMContentLoaded', () => {
    const passwordField = document.getElementById('password');
    const generateButton = document.getElementById('generate-password');
    const togglePasswordButton = document.getElementById('toggle-password');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarNav');

    generateButton.addEventListener('click', () => {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
        let password = '';
        for (let i = 0; i < 12; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        passwordField.value = password;
    });

    togglePasswordButton.addEventListener('click', () => {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        togglePasswordButton.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });

    passwordField.addEventListener('input', () => {
        const rules = {
            length: passwordField.value.length >= 8,
            lowercase: /[a-z]/.test(passwordField.value),
            uppercase: /[A-Z]/.test(passwordField.value),
            number: /\d/.test(passwordField.value),
            special: /[!@#$%^&*]/.test(passwordField.value)
        };
        for (const rule in rules) {
            document.getElementById(rule).classList.toggle('valid', rules[rule]);
        }
    });

    navbarToggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('show');
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm(contactForm)) {
            contactForm.submit();
        }
    });

    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm(signupForm)) {
            signupForm.submit();
        }
    });

    function validateForm(form) {
        let isValid = true;
        form.querySelectorAll('input, textarea').forEach(input => {
            if (!input.checkValidity()) {
                input.classList.add('is-invalid');
                isValid = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });
        return isValid;
    }
});
