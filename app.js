const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
require('dotenv').config(); // Asegúrate de que esta línea esté presente y en la parte superior del archivo

const app = express();
const PORT = 3000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    console.log(`New user registered: ${username}, ${email}`);
    res.send('Registration successful');
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const msg = {
        to: 'kennethalonsoc@gmail.com',
        from: email,
        subject: 'New Contact Message',
        text: message,
    };
    sgMail.send(msg)
        .then(() => res.send('Email sent'))
        .catch(error => res.send('Failed to send email'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
