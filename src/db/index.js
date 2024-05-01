const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/oxygen')
    .then()
    .catch(err => console.log(err))

const UserRepository = require('user.repository')
const PostRepository = require('post.repository')
const TagRepository = require('tag.repository')
const CategoryRepository = require('category.repository')

module.exports = {
    UserRepository: new UserRepository(mongoose),
    PostRepository: new PostRepository(mongoose),
    TagRepository: new TagRepository(mongoose),
    CategoryRepository: new CategoryRepository(mongoose)
}