const express = require("express");
const router = express.Router();
const trivia = require("../data/trivia.json")
// const fs= require("fs")
// const { v4: uuidv4 } = require('uuid');

router.get('/', (_req, res) => {
    res.status(200).json(trivia);
})

module.exports = router;