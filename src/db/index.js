const {mongoose} = require('./schema')
const UserRepository = require('./user.repository')
const PostRepository = require('./post.repository')
const TagRepository = require('./tag.repository')
const CategoryRepository = require('./category.repository')
const bcrypt = require('bcryptjs')

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
    const existsUser = await userRepository.findByEmail('admin@localhost');
    if (existsUser) return

    const user = await userRepository.create({
        name: initUser.name,
        email: initUser.email,
        password: await bcrypt.hash(initUser.password, 7),
        salt: initUser.salt,
        role: initUser.role,
        token: 'token',
        refreshToken: 'refreshToken',
        refreshTokenExpiry: new Date()
    })

    const category = await categoryRepository.create({
        name: 'Разработка',
        description: 'Все, что связано с разработкой',
        url: 'development'
    })

    const tag = await tagRepository.create({
        name: 'JavaScript',
        description: 'Все связанное с JavaScript',
        url: 'javascript'
    })

    await postRepository.create({
        title: 'Основы JavaScript',
        content: 'Основы JavaScript',
        url: 'osnovi-javascript',
        author: user._id,
        isPublished: true,
        description: 'Основы JavaScript',
        categories: [category._id],
        tags: [tag._id]
    })
}

module.exports = {
    userRepository,
    postRepository,
    tagRepository,
    categoryRepository,
    initializeDatabase
}