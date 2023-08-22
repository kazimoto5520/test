const { log, error } = require('console');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/userModel');

const app = express();
require('dotenv').config();

app.use(morgan('dev'));

const port = process.env.PORT;

mongoose.connect('mongodb+srv://mkazimoto17:mesha1729@cluster0.i2hyica.mongodb.net/ssp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

const db = mongoose.connection;

db.once('open', () => {
    console.log('connected');
})

app.get("/", (req, res) => {
    res.send('Hello');
})

app.listen(port, () => {
    console.log(`Sever is listening on port ${port}`);
});
