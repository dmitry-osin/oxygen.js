class TagRepository {
    constructor(mongoose) {
        this.Tag = mongoose.model('Tag')
    }

    async create(tag) {
        return await this.Tag.create(tag)
    }

    async findOrCreate(tag) {
        const existingTag = await this.findByUrl(tag.url)
        if (existingTag) {
            return existingTag
        }
        return await this.Tag.findOneAndUpdate({url: tag.url, name: tag.name}, tag, {upsert: true, new: true})
            .exec()
    }

    async findAll() {
        return await this.Tag.find().exec()
    }

    async findAllWithPagination(limit, skip) {
        return await this.Tag.find().limit(limit).skip(skip).exec()
    }

    async findById(id) {
        return await this.Tag.findById(id).exec()
    }

    async findByUrl(url) {
        return await this.Tag.findOne({url}).exec()
    }

    async update(id, tag) {
        return await this.Tag.findByIdAndUpdate(id, tag).exec()
    }

    async delete(id) {
        return await this.Tag.findByIdAndDelete(id).exec()
    }
}

module.exports = TagRepository