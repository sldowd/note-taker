const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./controllers/apiRoutes');
const htmlRoutes = require('./controllers/htmlRoutes');
//require PATH and FILESYSTEM modules
const path = require('path');
const fs = require('fs');
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// give HTTP easy access to front end assets
app.use(express.static('public'));
// import data from file
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// ====================================================
// LISTEN
// ====================================================
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});