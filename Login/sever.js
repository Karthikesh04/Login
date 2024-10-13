// Step 1: Import the required libraries
const express = require('express');  // Import Express library
const bodyParser = require('body-parser');  // Import body-parser middleware

// Step 2: Initialize the Express application
const app = express();

// Step 3: Use body-parser to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// Step 4: Serve static files (HTML/CSS) from the "public" folder
app.use(express.static('public'));

// Step 5: Set up a GET route to serve the login form (index.html)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Step 6: Set up a POST route to handle form submissions
app.post('/login', (req, res) => {
    const username = req.body.username;  // Extract username from form
    const password = req.body.password;  // Extract password from form
    res.send(`<h1>Logged in as: ${username}</h1>`);  // Display the username
});

// Step 7: Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
