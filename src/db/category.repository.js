class CategoryRepository {
    constructor(mongoose) {
        this.Category = mongoose.model('Category')
    }

    create(category) {
        return this.Category.create(category)
    }

    findAll() {
        return this.Category.find()
    }

    findById(id) {
        return this.Category.findById(id)
    }

    update(id, category) {
        return this.Category.findByIdAndUpdate(id, category)
    }

    delete(id) {
        return this.Category.findByIdAndDelete(id)
    }
}

module.exports = CategoryRepository