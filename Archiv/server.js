const express = require('express');
// Create App

const app = express();
app.use(express.static('public'));

app.listen(3000, function () {
 console.log('Server is up on port 3000')
});