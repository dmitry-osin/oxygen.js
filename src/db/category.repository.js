class CategoryRepository {
    constructor(mongoose) {
        this.Category = mongoose.model('Category')
    }

    async create(category) {
        return await this.Category.create(category)
    }

    async findOrCreate(category) {
        const existingCategory = await this.findByUrl(category.url)
        if (existingCategory) {
            return existingCategory
        }
        return await this.Category.findOneAndUpdate({url: category.url, name: category.name}, category, {
            upsert: true,
            new: true
        }).exec()
    }

    async findAll() {
        return await this.Category.find().exec()
    }

    async findAllWithPagination(limit, skip) {
        return await this.Category.find().limit(limit).skip(skip).exec()
    }

    async findById(id) {
        return await this.Category.findById(id).exec()
    }

    async findByUrl(url) {
        return await this.Category.findOne({url}).exec()
    }

    async update(id, category) {
        return await this.Category.findByIdAndUpdate(id, category).exec()
    }

    async delete(id) {
        return await this.Category.findByIdAndDelete(id).exec()
    }
}

module.exports = CategoryRepository