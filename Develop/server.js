const express = require('express');
const controllers = require('./controllers');

const PORT = process.env.PORT || 3001;
const app = express();
 
const { notes } = require('./db/db.json');

const path = require('path');
const fs = require('fs');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(controllers);
//======================================
//LISTEN
//======================================
app.listen(PORT, () => {
    console.log(`listening on port ${PORT} :}`);
})