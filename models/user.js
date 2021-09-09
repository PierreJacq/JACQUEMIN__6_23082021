const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');// Package permettant de vérifier que l'e-mail est unique


const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
userSchema.plugin(uniqueValidator); // Applique le package au schema

module.exports = mongoose.model('User', userSchema);