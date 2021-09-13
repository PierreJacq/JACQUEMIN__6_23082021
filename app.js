//--------------------------------------------------------------
//-------------- PACKAGES
//--------------------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


//--------------------------------------------------------------
//-------------- DATABASE
//--------------------------------------------------------------
mongoose.connect(process.env.DB_MONGO_ATLAS, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

//--------------------------------------------------------------
//--------------  HEADERS
//--------------------------------------------------------------
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//--------------------------------------------------------------
//-------------- ROUTES
//--------------------------------------------------------------
app.use(bodyParser.json());

// Route users
const userRoutes = require ('./routes/user')
app.use('/api/auth', userRoutes)

// Route sauce
const saucesRoutes = require ('./routes/sauce')
app.use('/api/sauce', saucesRoutes)

// Route images
const path = require('path');
app.use('images', express.static(path.join(__dirname, 'images')));

module.exports = app;