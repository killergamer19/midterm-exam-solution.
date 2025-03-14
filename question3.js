const express = require('express'); // need sad e dl ang express "npm i express"
const app = express(); 
const port = 3000; // mao ni port number

// Mao ni ang route handler for GET request
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Write your full name' }); // Send a JSON response
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`); // mo message
});

//Para mo dagan ni sa terminal "question3.js"