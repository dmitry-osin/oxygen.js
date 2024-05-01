class PostRepository {
    constructor(mongoose) {
        this.Post = mongoose.model('Post')
    }

    create(post) {
        return this.Post.create(post)
    }

    findAll() {
        return this.Post.find()
    }

    findById(id) {
        return this.Post.findById(id)
    }

    update(id, post) {
        return this.Post.findByIdAndUpdate(id, post)
    }

    delete(id) {
        return this.Post.findByIdAndDelete(id)
    }

    findByAuthor(id) {
        return this.Post.find({author: id})
    }

    findByTag(id) {
        return this.Post.find({tags: id})
    }

    findByCategory(id) {
        return this.Post.find({categories: id})
    }

    findByTitle(title) {
        return this.Post.findOne({title})
    }

    findByUrl(url) {
        return this.Post.findOne({url})
    }
}

module.exports = PostRepository