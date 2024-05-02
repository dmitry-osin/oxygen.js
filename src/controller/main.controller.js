class MainController {

    index(req, res) {
        res.render('index.pug')
    }

    about(req, res) {
        res.render('about.pug')
    }

    contact(req, res) {
        res.render('contacts.pug')
    }

    login(req, res) {
        res.render('login.pug')
    }

}

module.exports = new MainController()