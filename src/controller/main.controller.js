const {postRepository, tagRepository, categoryRepository} = require('./../db')

class MainController {

    async index(req, res) {
        const posts = await postRepository.findAll()
        const tags = await tagRepository.findAll()
        const categories = await categoryRepository.findAll()

        res.render('index.pug', {posts, tags, categories})
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

    async post(req, res) {
        const posts = await postRepository.findAllWithPagination(5, 0)
        const tags = await tagRepository.findAllWithPagination(5, 0)
        const categories = await categoryRepository.findAllWithPagination(5, 0)

        const post = await postRepository.findByUrl(req.params.postId)
        res.render('post.pug', {post, posts, tags, categories})
    }

}

module.exports = new MainController()