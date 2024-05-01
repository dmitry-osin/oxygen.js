const mongoose = require("mongoose")

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    salt: String,
    role: String,
    token: String,
    refreshToken: String,
    refreshTokenExpiry: Date,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
})

const Post = mongoose.model('Post', {
    title: String,
    content: String,
    url: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    description: String,
    tags: [String],
    categories: [String]
})

const Tag = mongoose.model('Tag', {
    name: String,
    description: String,
    url: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
})

const Category = mongoose.model('Category', {
    name: String,
    description: String,
    url: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
})

module.exports = {
    User,
    Post,
    Tag,
    Category
}