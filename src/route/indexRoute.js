const express = require("express");
const router = express.Router();

router.get('/', async function (req, res, next) {
    res.render('index.pug');
})

router.get('/about', async function (req, res, next) {
    res.render('about.pug')
})

module.exports = router