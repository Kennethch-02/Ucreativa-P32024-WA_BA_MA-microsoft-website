document.addEventListener('DOMContentLoaded', () => {
    emailjs.init("YOUR_USER_ID");

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(() => {
                alert('Email sent successfully!');
            }, (error) => {
                alert('Failed to send email: ' + JSON.stringify(error));
            });
    });

    const passwordField = document.getElementById('password');
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
