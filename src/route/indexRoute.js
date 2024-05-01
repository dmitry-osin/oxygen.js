const express = require("express")
const router = express.Router()

router.get('/', async function (req, res, next) {
    res.render('index.pug')
})

router.get('/about', async function (req, res, next) {
    res.render('about.pug')
})

router.get('/contacts', async function (req, res, next) {
    res.render('contacts.pug')
})

router.get('/login', async function (req, res, next) {
    res.render('login.pug')
})

module.exports = router