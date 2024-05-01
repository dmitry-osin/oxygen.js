const express = require("express")
const router = express.Router()

router.get('/admin/', async function (req, res, next) {
    res.render('areas/admin/index.pug')
})

module.exports = router