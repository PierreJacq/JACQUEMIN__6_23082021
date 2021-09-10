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

// Routes utilisateurs
const userRoutes = require ('./routes/user')
app.use('/api/auth', userRoutes)

//routes sauces
const saucesRoutes = require ('./routes/sauce')
app.use('/api/sauce', saucesRoutes)



module.exports = app;