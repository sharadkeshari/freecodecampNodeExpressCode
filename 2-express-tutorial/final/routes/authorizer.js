const express = require('express')

const authorise = express.Router();


authorise.post('/', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`welcome ${name}`);
    }
    res.status(401).send("Please provide credentials.");
})

module.exports.authoriser = authorise