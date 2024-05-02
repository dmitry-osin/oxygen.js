class AdminController {

    index(req, res) {
        res.render('areas/admin/index.pug')
    }

}

module.exports = new AdminController()
