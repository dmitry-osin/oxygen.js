const {postRepository, tagRepository, categoryRepository} = require('./../db')

class MainController {

    async index(req, res) {
        const posts = await postRepository.findAll()
        const tags = await tagRepository.findAll()
        const categories = await categoryRepository.findAll()

        const pages = Array.from({length: posts.length}).map((_, index) => {
            return {url: '/page/' + (index + 1), label: index + 1}
        })

        res.render('index.pug', {posts, tags, categories, pages})
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

    async postsByTag(req, res) {
        const posts = await postRepository.findAllWithPagination(5, 0)
        const tags = await tagRepository.findAllWithPagination(5, 0)
        const categories = await categoryRepository.findAllWithPagination(5, 0)

        const tag = await tagRepository.findByUrl(req.params.tagId)
        const targetPosts = await postRepository.findByTag(tag._id)

        res.render('search.pug', {targetPosts, posts, tags, categories, pageHeader: `Search results by tag: "${tag.name}"`})
    }

    async postsByCategory(req, res) {
        const posts = await postRepository.findAllWithPagination(5, 0)
        const tags = await tagRepository.findAllWithPagination(5, 0)
        const categories = await categoryRepository.findAllWithPagination(5, 0)

        const category = await categoryRepository.findByUrl(req.params.categoryId)
        const targetPosts = await postRepository.findByCategory(category._id)

        res.render('search.pug', {targetPosts, posts, tags, categories, pageHeader: `Search results by category: "${category.name}"`})
    }

    async search(req, res) {
        const posts = await postRepository.findAllWithPagination(5, 0)
        const tags = await tagRepository.findAllWithPagination(5, 0)
        const categories = await categoryRepository.findAllWithPagination(5, 0)

        const targetPosts = await postRepository.search(req.body.query)

        res.render('search.pug', {targetPosts, posts, tags, categories, pageHeader: `Search results by query: "${req.body.query}"`})
    }

}

module.exports = new MainController()