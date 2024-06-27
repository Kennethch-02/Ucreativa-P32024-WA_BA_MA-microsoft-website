document.addEventListener('DOMContentLoaded', () => {
    emailjs.init("YOUR_USER_ID");

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(() => {
                alert('Email sent successfully!');
            }, (error) => {
                alert('Failed to send email: ' + JSON.stringify(error));
            });
    });

    const passwordField = document.getElementById('password');
    const generateButton = document.getElementById('generate-password');

    generateButton.addEventListener('click', () => {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
        let password = '';
        for (let i = 0; i < 12; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        passwordField.value = password;
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
});
