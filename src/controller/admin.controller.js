const {Types} = require('mongoose')
const {postRepository, categoryRepository, tagRepository, userRepository} = require('../db');

class AdminController {

    index(req, res) {
        if (req.isAuthenticated()) {
            res.render('areas/admin/index.pug')
        } else {
            res.redirect('/login')
        }
    }

    post(req, res) {
        if (req.isAuthenticated()) {
            res.render('areas/admin/new-post.pug')
        } else {
            res.redirect('/login')
        }
    }

    async publishPost(req, res) {
        if (req.isAuthenticated()) {
            await AdminController.createPost(req, true)
            res.redirect('/admin')
        } else {
            res.redirect('/login')
        }
    }

    static async createPost(req, isPublished) {
        const user = req.user
        const {title, url, description, content, categories, tags} = req.body

        const categoriesModels = await Promise.all(categories.split(',').map(async (category) => {
            return await categoryRepository.findOrCreate({url: category.toLowerCase(), name: category})
        }))

        const tagsModels = await Promise.all(tags.split(',').map(async (tag) => {
            return await tagRepository.findOrCreate({url: tag.toLowerCase(), name: tag})
        }))

        await postRepository.create({
            title,
            description,
            content,
            url,
            isPublished,
            author: new Types.ObjectId(user.id),
            categories: categoriesModels.map(category => category._id),
            tags: tagsModels.map(tag => tag._id)
        })
    }

    async draftPost(req, res) {
        if (req.isAuthenticated()) {
            await AdminController.createPost(req, false)
            res.redirect('/admin')
        } else {
            res.redirect('/login')
        }
    }

}

module.exports = new AdminController()
