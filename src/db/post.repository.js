class PostRepository {
    constructor(mongoose) {
        this.Post = mongoose.model('Post')
    }

    async create(post) {
        return await this.Post.create(post)
    }

    async findAllWithPagination(limit, skip) {
        return await this.Post.find()
            .limit(limit).skip(skip)
            .populate('author')
            .populate('tags')
            .populate('categories').exec()
    }

    async findAll() {
        return await this.Post.find()
            .populate('author')
            .populate('tags')
            .populate('categories')
            .exec()
    }

    async findById(id) {
        return await this.Post.findById(id)
            .populate('author')
            .populate('tags')
            .populate('categories')
            .exec()
    }

    async search(query) {
        return await this.Post.find({'content': {'$regex': query, '$options': 'i'}})
            .populate('author')
            .populate('tags')
            .populate('categories')
            .exec()
    }

    async update(id, post) {
        return await this.Post.findByIdAndUpdate(id, post).exec()
    }

    async delete(id) {
        return await this.Post.findByIdAndDelete(id).exec()
    }

    async findByAuthor(id) {
        return await this.Post.find({author: id})
            .populate('author')
            .populate('tags')
            .populate('categories')
            .exec()
    }

    async findByTag(id) {
        return await this.Post.find({tags: id})
            .populate('author')
            .populate('tags')
            .populate('categories')
            .exec()
    }

    async findByCategory(id) {
        return await this.Post.find({categories: id})
            .populate('author')
            .populate('tags')
            .populate('categories')
            .exec()
    }

    async findByTitle(title) {
        return await this.Post.findOne({title})
            .populate('author')
            .populate('tags').populate('categories').exec()
    }

    async findByUrl(url) {
        return await this.Post.findOne({url})
            .populate('author')
            .populate('tags')
            .populate('categories')
            .exec()
    }
}

module.exports = PostRepository