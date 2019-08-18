const express = require('express');
const exphbs = require('express-hbs');
const bodyParser = require('body-parser');
const path = require('path');

//Database
const db = require('./config/db');

//Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

//G ig route
app.use('/manifacturers', require('./routes/manifacturers'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));