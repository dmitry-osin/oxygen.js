const adminController = require('./admin.controller');
const mainController = require('./main.controller');
const passport = require('passport')

const express = require('express')
const {Strategy: LocalStrategy} = require('passport-local')
const {userRepository} = require('../db')
const bcrypt = require('bcryptjs')
const router = express.Router()

router.get('/', mainController.index)
router.get('/page/:page?', mainController.index)
router.get('/about', mainController.about)
router.get('/contacts', mainController.contacts)
router.get('/login', mainController.login)
router.get('/logout', mainController.logout)

router.get('/post/:postId', mainController.post)
router.get('/tag/:tagId', mainController.postsByTag)
router.get('/category/:categoryId', mainController.postsByCategory)
router.post('/search', mainController.search)

router.get('/admin/', adminController.index)

router.post('/login/password', passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login'
}))

function initializePassport() {
    passport.use(new LocalStrategy(async function (email, password, cb) {
            const user = await userRepository.findByEmail(email)
            if (!user) return cb(null, false)

            bcrypt.compare(password, user.password, function (err, result) {
                if (err) return cb(err)
                if (!result) return cb(null, false)
                return cb(null, user)
            })
        }
    ))

    passport.serializeUser(function (user, cb) {
        cb(null, {id: user._id, email: user.email, name: user.name, role: user.role})
    })

    passport.deserializeUser(function (user, cb) {
        return cb(null, user)
    })
}

initializePassport()

module.exports = router