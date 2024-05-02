class TagRepository {
    constructor(mongoose) {
        this.Tag = mongoose.model('Tag')
    }

    async create(tag) {
        return await this.Tag.create(tag)
    }

    async findAll() {
        return await this.Tag.find().exec()
    }

    async findById(id) {
        return await this.Tag.findById(id).exec()
    }

    async update(id, tag) {
        return await this.Tag.findByIdAndUpdate(id, tag).exec()
    }

    async delete(id) {
        return await this.Tag.findByIdAndDelete(id).exec()
    }
}

module.exports = TagRepository