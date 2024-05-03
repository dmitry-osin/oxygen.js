class MainController {

    index(req, res) {
        res.render('index.pug')
    }

    about(req, res) {
        res.render('about.pug')
    }

    contacts(req, res) {
        res.render('contacts.pug')
    }

    login(req, res) {
        if (req.isAuthenticated()) {
            res.redirect('/admin');
        } else {
            res.render('login.pug');
        }
    }

    logout(req, res) {
        if (req.isAuthenticated()) {
            req.session.destroy()
        } else {
            res.redirect('/login');
        }
    }

}

module.exports = new MainController()