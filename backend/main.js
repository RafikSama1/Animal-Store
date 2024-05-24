/* ------ Package import ------*/
const express = require('express');
const mongoose = require('mongoose');

/* ------ initialization ------*/
const app = express();
mongoose.connect('mongodb://127.0.0.1/AnimalCare');





/* ------ App StartUp ------*/
app.listen(3000, ()=> {
    console.log("App started on: http://localhost:3000");
});