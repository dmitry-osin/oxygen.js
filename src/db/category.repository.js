class CategoryRepository {
    constructor(mongoose) {
        this.Category = mongoose.model('Category')
    }

    async create(category) {
        return await this.Category.create(category)
    }

    async findAll() {
        return await this.Category.find().exec()
    }

    async findById(id) {
        return await this.Category.findById(id).exec()
    }

    async update(id, category) {
        return await this.Category.findByIdAndUpdate(id, category).exec()
    }

    async delete(id) {
        return await this.Category.findByIdAndDelete(id).exec()
    }
}

module.exports = CategoryRepository