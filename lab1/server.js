//server.js

require('dotenv').config();

const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send({ message: 'Hello World !' });
});

app.get("/env", (req, res) => {
    res.send({ message: process.env.TEST });
});

module.exports = app;
