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
    createdAt: {type: Date, default: Date.now, required: true},
    updatedAt: Date,
    deletedAt: Date
})

const Post = mongoose.model('Post', {
    title: {type: String, required: true, unique: true},
    content: String,
    url: {type: String, required: true, unique: true},
    createdAt: {type: Date, default: Date.now, required: true},
    updatedAt: Date,
    deletedAt: Date,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    isPublished: {type: Boolean, default: false},
    description: String,
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
})

const Tag = mongoose.model('Tag', {
    name: {type: String, required: true, unique: true},
    description: {type: String, length: 128},
    url: {type: String, required: true, unique: true},
    createdAt: {type: Date, default: Date.now, required: true},
    updatedAt: Date,
    deletedAt: Date
})

const Category = mongoose.model('Category', {
    name: {type: String, required: true, unique: true},
    description: {type: String, length: 128},
    url: {type: String, required: true, unique: true},
    createdAt: {type: Date, default: Date.now, required: true},
    updatedAt: Date,
    deletedAt: Date
})

module.exports = {
    User,
    Post,
    Tag,
    Category,
    mongoose
}