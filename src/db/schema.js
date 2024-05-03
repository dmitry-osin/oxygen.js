const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, length: 128},
    salt: String,
    role: [{type: String, enum: ['admin', 'user']}],
    token: String,
    refreshToken: String,
    refreshTokenExpiry: Date,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
})

const Post = mongoose.model('Post', {
    title: {type: String, required: true, unique: true},
    content: String,
    url: {type: String, required: true, unique: true},
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    description: String,
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
})

const Tag = mongoose.model('Tag', {
    name: {type: String, required: true, unique: true},
    description: {type: String, length: 128},
    url: {type: String, required: true, unique: true},
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
})

const Category = mongoose.model('Category', {
    name: {type: String, required: true, unique: true},
    description: {type: String, length: 128},
    url: {type: String, required: true, unique: true},
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
})

module.exports = {
    User,
    Post,
    Tag,
    Category,
    mongoose
}