//--------------------------------------------------------------
//-------------- PACKAGES
//--------------------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//--------------------------------------------------------------
//-------------- DATABASE
//--------------------------------------------------------------
mongoose.connect('mongodb+srv://administrateurprojet:jesuisunmotdepassesimple@cluster0.brbcu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
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




module.exports = app;