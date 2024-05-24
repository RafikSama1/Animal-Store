const {model} = require('mongoose');

module.exports = model('Animal', {
    name: String,
    birthdate: Date,
    type: String,
    breed: String,
});
