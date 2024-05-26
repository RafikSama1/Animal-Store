/* ------ Package imports ------*/
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

/* ----- Routes Imports ----- */
const animalsRoutes = require('./routes/animals.routes');

/* ------ initialization ------*/
const app = express();
mongoose.connect('mongodb://127.0.0.1/AnimalCare');

/* ----- Global Middlewares ----- */
app.use(express.json());
app.use(cors());

/* ----- Using Routes ----- */
app.use(animalsRoutes);

/* ------ App StartUp ------*/
app.listen(3000, ()=> {
    console.log("App started on: http://localhost:3000");
});