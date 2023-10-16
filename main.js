
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

app.listen(3000, () => {
    console.log("Server started");

});

app.get("/", (req, res) => {
    res.sendFile('index.html'); 
});



