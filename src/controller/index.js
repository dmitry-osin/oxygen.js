const adminController = require('./admin.controller');
const mainController = require('./main.controller');

const express = require("express")
const router = express.Router()

router.get('/', mainController.index)
router.get('/about', mainController.about)
router.get('/contacts', mainController.contact)
router.get('/login', mainController.login)

router.get('/admin/', adminController.index)


module.exports = router