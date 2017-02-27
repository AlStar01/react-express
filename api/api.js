let express = require('express');
let app = express();

let cars = require('./cars/cars');

app.use('/api/cars', cars);

module.exports = app;
