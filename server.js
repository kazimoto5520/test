const { log } = require('console');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

app.use(morgan('dev'));

const port = process.env.PORT;

const db = mongoose.connect()

app.get("/", (req, res) => {
    res.send('Hello');
})

app.listen(port, () => {
    console.log(`Sever is listening on port ${port}`);
});
