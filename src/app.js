process.env['NODE_CONFIG_DIR'] = __dirname + '/config/'

const express = require('express')
const app = express()
const session = require('express-session')

const path = require('path')
const config = require('config')

const passport = require('passport')
const port = process.env.PORT || config.get('server.port') || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(passport.initialize())
app.use(session({
    secret: config.get('server.sessionSecret'),
    resave: false,
    saveUninitialized: false
}))
app.use(passport.authenticate('session'))

app.set('views engine', 'pug')
app.set('views', path.join(__dirname, 'view'))

const router = require('./controller');
app.use('', router)

require('./db').initializeDatabase().then().catch()

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})