class PostRepository {
    constructor(mongoose) {
        this.Post = mongoose.model('Post')
    }

    async create(post) {
        return await this.Post.create(post)
    }

    async findAll() {
        return await this.Post.find().exec()
    }

    async findById(id) {
        return await this.Post.findById(id).exec()
    }

    async update(id, post) {
        return await this.Post.findByIdAndUpdate(id, post).exec()
    }

    async delete(id) {
        return await this.Post.findByIdAndDelete(id).exec()
    }

    async findByAuthor(id) {
        return await this.Post.find({author: id}).exec()
    }

    async findByTag(id) {
        return await this.Post.find({tags: id}).exec()
    }

    async findByCategory(id) {
        return await this.Post.find({categories: id}).exec()
    }

    async findByTitle(title) {
        return await this.Post.findOne({title}).exec()
    }

    async findByUrl(url) {
        return await this.Post.findOne({url}).exec()
    }
}

module.exports = PostRepository