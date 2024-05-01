class TagRepository {
    constructor(mongoose) {
        this.Tag = mongoose.model('Tag')
    }

    create(tag) {
        return this.Tag.create(tag)
    }

    findAll() {
        return this.Tag.find()
    }

    findById(id) {
        return this.Tag.findById(id)
    }

    update(id, tag) {
        return this.Tag.findByIdAndUpdate(id, tag)
    }

    delete(id) {
        return this.Tag.findByIdAndDelete(id)
    }
}

module.exports = TagRepository