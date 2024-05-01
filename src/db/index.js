const {mongoose} = require('./db')
const UserRepository = require('./user.repository')
const PostRepository = require('./post.repository')
const TagRepository = require('./tag.repository')
const CategoryRepository = require('./category.repository')

const userRepository = new UserRepository(mongoose)
const postRepository = new PostRepository(mongoose)
const tagRepository = new TagRepository(mongoose)
const categoryRepository = new CategoryRepository(mongoose)
const config = require('config')

mongoose.connect(config.get('db.host'))
    .then()
    .catch(err => console.log(err))

const initUser = config.get('application.user')

async function initializeDatabase() {
    const user = await userRepository.create({
        name: initUser.name,
        email: initUser.email,
        password: initUser.password,
        salt: initUser.salt,
        role: initUser.role,
        token: 'token',
        refreshToken: 'refreshToken',
        refreshTokenExpiry: new Date()
    })

    const post = await postRepository.create({
        title: 'Основы JavaScript',
        content: 'Основы JavaScript',
        url: 'javascript',
        author: user._id,
        description: 'Основы JavaScript',
        tags: ['javascript', 'css', 'html'],
        categories: ['javascript', 'css', 'html']
    })

    await categoryRepository.create({name: 'JavaScript', description: 'Основы JavaScript', url: 'javascript', posts: [post._id]})

    await tagRepository.create({name: 'C#', description: 'Основы C#', url: 'c#', posts: [post._id]})
}

module.exports = {
    userRepository,
    postRepository,
    tagRepository,
    categoryRepository,
    initializeDatabase
}