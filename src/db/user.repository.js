class UserRepository {
    constructor(mongoose) {
        this.User = mongoose.model('User')
    }

    async create(user) {
        return await this.User.create(user)
    }

    async findByEmail(email) {
        return await this.User.findOne({email}).exec()
    }

    async findById(id) {
        return await this.User.findById(id).exec()
    }

    async update(id, user) {
        return await this.User.findByIdAndUpdate(id, user).exec()
    }

    async delete(id) {
        return await this.User.findByIdAndDelete(id).exec()
    }

    async findAll() {
        return await this.User.find().exec()
    }
}

module.exports = UserRepository