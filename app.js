const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    console.log(`New user registered: ${username}, ${email}`);
    res.sendFile(__dirname + '/views/signup-success.html');
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Contact form submitted: ${name}, ${email}, ${message}`);
    res.sendFile(__dirname + '/views/contact-success.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
