class AdminController {

    index(req, res) {
        if (req.isAuthenticated()) {
            res.render('areas/admin/index.pug')
        } else {
            res.redirect('/login')
        }
    }

}

module.exports = new AdminController()
